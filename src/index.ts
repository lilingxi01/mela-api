import { NextApiRequest, NextApiResponse } from 'next';

export type ApiErrorBody = {
  error: string;
};

// This type is used for the apiHandler function below.
export type ApiResponseStructure = {
  status: number;
  body?: any;
  // TODO: Add redirect support.
};

/**
 * This function is used to wrap the API handlers.
 * @param {function} func - The API handler function.
 * @return {function} - The wrapped API handler function.
 */
export function apiHandler<RequestModel, ResponseModel>(
  func: (
    req: NextApiRequest & RequestModel,
    res: NextApiResponse<ApiErrorBody | ResponseModel>,
  ) => Promise<ApiResponseStructure>,
) {
  return async (
    req: NextApiRequest & RequestModel,
    res: NextApiResponse<ApiErrorBody | ResponseModel>,
  ) => {
    const responseModel = await func(req, res);
    res.status(responseModel.status).json(responseModel.body);
  };
}

export const ApiResponse = {
  ok: (body?: any) => ({
    status: 200,
    body,
  }),
  normal: (status: number, body?: any): ApiResponseStructure => ({
    status,
    body,
  }),
  error: (status: number, error: string): ApiResponseStructure => ({
    status,
    body: { error },
  }),
};

export const ApiCommonResponse = {
  METHOD_NOT_ALLOWED: ApiResponse.error(405, 'Method not allowed'),
  RESTRICTED: ApiResponse.error(403, 'Restricted'),
  NOT_AUTHORIZED: ApiResponse.error(401, 'Not authorized'),
  UNKNOWN_ERROR: ApiResponse.error(500, 'Unknown error'),
  NOT_FOUND: ApiResponse.error(404, 'Not found'),
};
