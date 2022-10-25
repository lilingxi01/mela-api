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

// Use this type to override body type in the original typing.
type CustomApiRequestKeyOverride<T1, T2> = Omit<T1, keyof T2> & T2;

type ApiRequestModel<ReqModel> = CustomApiRequestKeyOverride<NextApiRequest, ReqModel>;
type ApiResponseModel<ResModel> = NextApiResponse<ApiErrorBody | ResModel>;

type ApiHandlerFunction<ReqModel, ResModel> = (
  req: ApiRequestModel<ReqModel>,
  res: ApiResponseModel<ResModel>,
) => Promise<ApiResponseStructure>;

/**
 * This function is used to wrap the API handlers.
 * @param {function} func - The API handler function.
 * @return {function} - The wrapped API handler function.
 */
export function apiHandler<ReqModel, ResModel>(
  func: ApiHandlerFunction<ReqModel, ResModel>,
) {
  return async (
    req: ApiRequestModel<ReqModel>,
    res: ApiResponseModel<ResModel>,
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
