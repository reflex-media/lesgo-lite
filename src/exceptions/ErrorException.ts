import isEmpty from 'Utils/isEmpty';

export default class ErrorException extends Error {
  statusCode: number;

  code: string;

  extra?: {};

  constructor(
    message: string,
    code: string = 'ERROR_EXCEPTION',
    statusCode: number = 500,
    extra: object = {}
  ) {
    super();
    this.name = 'ErrorException';
    this.message = message;
    this.statusCode = statusCode;
    this.code = code;

    Error.captureStackTrace(this, this.constructor);

    if (!isEmpty(extra)) this.extra = extra;
  }
}
