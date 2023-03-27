import middy from '@middy/core';
import httpMiddleware from 'Middlewares/httpMiddleware';
import { APIGatewayProxyEvent } from 'aws-lambda';
import ping from 'Core/utils/ping';
import app from 'Config/app';

const originalHandler = (
  event: APIGatewayProxyEvent & {
    input: {
      ['sample-error']: string;
    };
  }
) => {
  return ping(event.input);
};

// eslint-disable-next-line import/prefer-default-export
export const handler = middy(originalHandler);

handler.use(httpMiddleware({ debugMode: app.debug }));
