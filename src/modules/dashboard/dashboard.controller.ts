import { Request, Response } from "express";
import status from "http-status";

import { catchAsync } from "../../config/catch-async";
import { sendResponse } from "../../config/sendResponse";
import { dashboardService } from "./dashboard.service";

const getDashboardOverview = catchAsync(
  async (_req: Request, res: Response) => {
    const data = await dashboardService.getDashboardOverview();

    sendResponse(res, {
      httpStatusCode: status.OK,
      success: true,
      message: "Dashboard overview retrieved successfully.",
      data,
    });
  }
);

export const dashboardController = {
  getDashboardOverview,
};