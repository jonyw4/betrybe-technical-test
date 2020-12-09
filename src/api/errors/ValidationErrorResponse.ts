import type { NextApiResponse } from 'next';
import { ErrorResponse, ErrorResponseContent } from './ErrorResponse';

export type ValidationErrorContent = ErrorResponseContent;

/**
 * Class show a return a response with validation error *(HTTP 400)*
 */
export class ValidationErrorResponse extends ErrorResponse<ValidationErrorContent> {
  constructor(res: NextApiResponse, message = 'Campos inválidos') {
    super({
      res: res,
      statusCode: 400,
      errorResponse: { message }
    });
  }
}
