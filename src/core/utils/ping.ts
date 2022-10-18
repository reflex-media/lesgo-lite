import isEmpty from 'Utils/isEmpty';
import validateFields from 'Utils/validateFields';
import ErrorException from 'Exceptions/ErrorException';

const FILE = 'Core/utils/ping';

type Arguments = {
  'sample-error'?: string;
  authSub?: string;
};

export type PingResult = {
  message: string;
  sub?: string;
};

const validateInput = (input: Arguments): Arguments => {
  const validFields = [
    { key: 'sample-error', type: 'string', required: false },
    { key: 'authSub', type: 'string', required: false },
  ];

  try {
    return validateFields(input, validFields);
  } catch (err) {
    throw new ErrorException(
      (err as Error).message,
      `${FILE}::INVALID_INPUT`,
      400,
      {
        err,
      }
    );
  }
};

export default async (
  input?: Arguments,
  authSub?: string
): Promise<PingResult> => {
  const validated = validateInput({ ...(input ?? {}), authSub });

  if (isEmpty(input)) {
    if (!authSub) {
      return {
        message: 'Pong',
      };
    }

    return {
      message: 'Pong',
      sub: authSub,
    };
  }

  if (validated['sample-error']) {
    throw new ErrorException('Error exception', `${FILE}::SAMPLE_ERROR`, 400, {
      validated,
    });
  }

  throw new ErrorException(
    'Invalid parameters provided',
    `${FILE}::INVALID_PARAMETERS`,
    400,
    { input, authSub }
  );
};
