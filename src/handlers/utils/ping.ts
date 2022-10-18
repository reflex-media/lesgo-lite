import middy from '@middy/core';
import httpMiddleware from 'Middlewares/httpMiddleware';
import ping from 'Core/utils/ping';
import app from 'Config/app';

import type { Handler } from 'aws-lambda';
import type { HttpGatewayEvent } from 'Middlewares/normalizeHttpRequestMiddleware';
import type { PingResult } from 'Core/utils/ping';

const originalHandler: Handler<HttpGatewayEvent, PingResult> = event => {
  return ping((event.input ?? {}) as Record<string, any>);
};

// eslint-disable-next-line import/prefer-default-export
export const handler = middy(originalHandler);

handler.use(httpMiddleware({ debugMode: app.debug }));
