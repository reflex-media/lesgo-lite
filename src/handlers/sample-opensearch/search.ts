import middy from '@middy/core';
import httpMiddleware from 'lesgo/middlewares/httpMiddleware';
import { APIGatewayProxyEvent } from 'aws-lambda';
import search from 'core/sample-opensearch/search';
import app from 'config/app';

const originalHandler = (
  event: APIGatewayProxyEvent & { input: { ping?: string } }
) => {
  return search(event.input);
};

// eslint-disable-next-line import/prefer-default-export
export const handler = middy(originalHandler);

handler.use(httpMiddleware({ debugMode: app.debug }));
