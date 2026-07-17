import { Request, Response } from "express";
import status from "http-status";

import { catchAsync } from "../../config/catch-async";
import { sendResponse } from "../../config/sendResponse";
import { contactService } from "./contact.service";

const sendMessage = catchAsync(async (req: Request, res: Response) => {
  const data = await contactService.sendMessage(req.body);

  sendResponse(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Message sent successfully.",
    data,
  });
});

const getAllMessages = catchAsync(async (_req: Request, res: Response) => {
  const data = await contactService.getAllMessages();

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Messages retrieved successfully.",
    data,
  });
});

const getSingleMessage = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await contactService.getSingleMessage(id as string);

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Message retrieved successfully.",
    data,
  });
});

const deleteMessage = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await contactService.deleteMessage(id as string);

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Message deleted successfully.",
    data,
  });
});

export const contactController = {
  sendMessage,
  getAllMessages,
  getSingleMessage,
  deleteMessage,
};