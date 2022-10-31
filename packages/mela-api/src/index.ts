import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export type ApiErrorBody = {
  error: string;
};

// This type is used for the apiHandler function below.
export type ApiResponseStructure<ResModel = null> = {
  status: number;
  body: ResModel;
  // TODO: Add redirect support.
};

// Use this type to override body type in the original typing.
type CustomApiRequestOverride<T1, T2> = Omit<T1, keyof T2> & T2;

export type ApiRequestModel<ReqModel> = CustomApiRequestOverride<NextApiRequest, ReqModel>;
export type ApiResponseModel<ResModel = null> = NextApiResponse<ApiErrorBody | ResModel>;

type ApiHandlerFunction<ReqModel, ResModel = null> = (
  req: ApiRequestModel<ReqModel>,
  res: ApiResponseModel<ResModel>,
) => Promise<ApiResponseStructure<ApiErrorBody | ResModel>>;

type MelaApiHandler<ReqModel, ResModel> = (req: ApiRequestModel<ReqModel>, res: ApiResponseModel<ResModel>) => Promise<void>;

/**
 * This function is used to wrap the API handlers.
 * @param {function} func - The API handler function.
 * @return {function} - The wrapped API handler function.
 */
export function apiHandler<ReqModel = any, ResModel = null>(
  func: ApiHandlerFunction<ReqModel, ResModel>,
): MelaApiHandler<ReqModel, ResModel> {
  return async (
    req: ApiRequestModel<ReqModel>,
    res: ApiResponseModel<ResModel>,
  ) => {
    const responseModel = await func(req, res);
    res.status(responseModel.status).json(responseModel.body);
  };
}

export function createApiHandler(
  wrapper: <ResModel> (func: NextApiHandler<ResModel>) => NextApiHandler<ResModel>,
): <ReqModel, ResModel> (func: ApiHandlerFunction<ReqModel, ResModel>) => NextApiHandler<ResModel> {
  return <ReqModel, ResModel> (func: ApiHandlerFunction<ReqModel, ResModel>) => {
    // TODO: Cannot deal with this typing for now.
    return wrapper<ResModel>(apiHandler(func) as unknown as NextApiHandler<ResModel>);
  };
}

export const ApiResponse = {
  /**
   * Response with 200 OK status.
   * @param body - The response body.
   */
  ok: <R>(body?: R): ApiResponseStructure<R | null> => ({
    status: 200,
    body: body ?? null,
  }),
  /**
   * Customize the response status and body.
   * @param status - The response status.
   * @param body - The response body.
   */
  custom: <R>(status: number, body?: R): ApiResponseStructure<R | null> => ({
    status,
    body: body ?? null,
  }),
  /**
   * Response with error status code and error message.
   * @param status - The error status.
   * @param error - The error message.
   */
  error: (status: number, error: string): ApiResponseStructure<ApiErrorBody> => ({
    status,
    body: { error },
  }),
};

export const ApiCommonResponse = {
  MISSING_QUERY: ApiResponse.error(422, 'Missing query parameter'),
  MISSING_BODY: ApiResponse.error(422, 'Missing body parameter'),
  MISSING_HEADER: ApiResponse.error(422, 'Missing header parameter'),
  METHOD_NOT_ALLOWED: ApiResponse.error(405, 'Method not allowed'),
  RESTRICTED: ApiResponse.error(403, 'Restricted'),
  NOT_AUTHORIZED: ApiResponse.error(401, 'Not authorized'),
  UNKNOWN_ERROR: ApiResponse.error(500, 'Unknown error'),
  NOT_FOUND: ApiResponse.error(404, 'Not found'),
};
