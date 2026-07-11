import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { Prisma } from "../generated/prisma/client";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  let statusCode = 500;
  let message = err.message || "Something went wrong";

  // Prisma Validation Error
  if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = status.BAD_REQUEST;
    message = err.message;
  }

  // Prisma Known Error
  else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        statusCode = status.CONFLICT;
        message = `Duplicate field value: ${err.meta?.target}`;
        break;

      case "P2025":
        statusCode = status.NOT_FOUND;
        message = "Record not found";
        break;

      case "P2003":
        statusCode = status.BAD_REQUEST;
        message = "Foreign key constraint failed";
        break;

      default:
        statusCode = status.BAD_REQUEST;
        message = err.message;
    }
  }

  // Prisma Unknown Error
  else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    statusCode = status.INTERNAL_SERVER_ERROR;
    message = err.message;
  }

  // Prisma Initialization Error
  else if (err instanceof Prisma.PrismaClientInitializationError) {
    statusCode = status.INTERNAL_SERVER_ERROR;
    message = err.message;
  }

  // Normal Error
  else if (err instanceof Error) {
    statusCode = status.INTERNAL_SERVER_ERROR;
    message = err.message;
  }

  console.error(err);

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};