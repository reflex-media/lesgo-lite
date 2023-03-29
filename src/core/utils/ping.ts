import isEmpty from 'lesgo/utils/isEmpty';
import validateFields from 'lesgo/utils/validateFields';
import ErrorException from 'exceptions/ErrorException';

const FILE = 'core/utils/ping';

type Arguments = {
  'sample-error'?: string;
  authSub?: string;
};

type PingResult = {
  message: string;
  sub?: string;
};

const validateInput = (input: Arguments): Arguments => {
  const validFields = [
    { key: 'sample-error', type: 'string', required: false },
    { key: 'authSub', type: 'string', required: false },
  ];

  return validateFields(input, validFields);
};

export default async (
  input?: Arguments,
  authSub?: string
): Promise<PingResult> => {
  const validated = validateInput({ ...input, authSub });

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
