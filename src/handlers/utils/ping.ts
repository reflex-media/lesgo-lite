import middy from '@middy/core';
import httpMiddleware from 'lesgo/middlewares/httpMiddleware';
import ping from 'core/utils/ping';
import app from 'config/app';

const originalHandler = event => {
  return ping(event.input);
};

// eslint-disable-next-line import/prefer-default-export
export const handler = middy(originalHandler);

handler.use(httpMiddleware({ debugMode: app.debug }));
