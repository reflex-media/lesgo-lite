import isEmpty from 'lesgo/utils/isEmpty';
import validateFields from 'lesgo/utils/validateFields';
import ErrorException from 'exceptions/ErrorException';

const FILE = 'core/utils/ping';

type Arguments = {
  ping: string;
};

const validateInput = (input: Arguments) => {
  const validFields = [{ key: 'ping', type: 'string', required: false }];

  return validateFields(input, validFields);
};

export default async (input: Arguments) => {
  const validated = validateInput(input);
};
