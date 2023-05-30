import middy from '@middy/core';
import { APIGatewayProxyEvent } from 'aws-lambda';
import httpMiddleware from 'lesgo/middlewares/httpMiddleware';
import app from 'config/app';
import { hash } from 'lesgo/utils/crypto';

type Arguments = {
  text: string;
};

const originalHandler = async (
  event: APIGatewayProxyEvent & {
    input: Arguments;
  }
) => {
  const { input } = event;

  const resp = hash(input.text);
  return { hashed: resp };
};

// eslint-disable-next-line import/prefer-default-export
export const handler = middy(originalHandler);

handler.use(httpMiddleware({ debugMode: app.debug }));
