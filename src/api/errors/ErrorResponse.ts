import type { NextApiResponse } from 'next';
import { jsonResponse } from '../utils';

export interface ErrorResponseContent {
  message: string;
}

export interface ErrorResponseParams<T extends ErrorResponseContent> {
  res: NextApiResponse;
  statusCode: number;
  errorResponse: T;
}

/**
 * Abstract class to create an Error Response
 */
export abstract class ErrorResponse<T extends ErrorResponseContent> {
  constructor({ res, statusCode, errorResponse }: ErrorResponseParams<T>) {
    jsonResponse(res, statusCode, errorResponse);
  }
}
