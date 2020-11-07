export default class ErrorException extends Error {
  constructor(
    message,
    errorCode = 'ERROR_EXCEPTION',
    httpStatusCode = 500,
    extra
  ) {
    super();
    this.name = 'ErrorException';
    this.message = message;
    this.statusCode = httpStatusCode;
    this.code = errorCode;

    Error.captureStackTrace(this, this.constructor);

    if (extra) this.extra = extra;
  }
}
