import ping from 'Core/utils/ping';

const FILE = 'Core/utils/ping';

describe('test Core/utils/ping', () => {
  it('should return Pong by default', () => {
    return expect(ping()).resolves.toBe('Pong');
  });

  it('should return Pong with authSub when present', () => {
    return expect(ping({}, '123123')).resolves.toMatchObject({
      message: 'Pong',
      sub: '123123',
    });
  });

  it('should return error with sample error input', () => {
    return expect(ping({ 'sample-error': 'exception' })).rejects.toHaveProperty(
      'code',
      `${FILE}::ERROR_SAMPLE`
    );
  });

  it('should return error with unknown input', () => {
    return expect(ping({ invalid: 'invalid' })).rejects.toHaveProperty(
      'code',
      `${FILE}::ERROR_UNKNOWN_PARAMETER`
    );
  });
});
