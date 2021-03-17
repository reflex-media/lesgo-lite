import logger from 'Utils/logger';
import isEmpty from 'Utils/isEmpty';
import ErrorException from 'Exceptions/ErrorException';

const FILE = 'Core/utils/ping';

const ping = (input?: object, authSub?: string) => {
  return new Promise((resolve, reject) => {
    if (!input || isEmpty(input)) {
      if (!authSub) {
        return resolve('Pong');
      }

      return resolve({
        message: 'Pong',
        sub: authSub,
      });
    }

    if (input['sample-error']) {
      return reject(
        new ErrorException('Error exception', `${FILE}::ERROR_SAMPLE`)
      );
    }

    logger.warn('Unknown parameter supplied', { input });

    return reject(
      new ErrorException(
        'Unknown parameter supplied',
        `${FILE}::ERROR_UNKNOWN_PARAMETER`,
        400
      )
    );
  });
};

export default ping;
