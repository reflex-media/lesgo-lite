import middy from '@middy/core';
import { APIGatewayProxyEvent } from 'aws-lambda';
import httpMiddleware from 'lesgo/middlewares/httpMiddleware';
import opensearch from 'lesgo/utils/opensearch';
import app from 'config/app';
import generateUid from 'lesgo/utils/generateUid';

type Arguments = {
  uid?: string;
  name?: string;
  gender?: string;
  profile?: {
    aboutMe?: string;
    headline?: string;
  };
  location?: {
    formattedAddress?: string;
    city?: string;
    state?: string;
    country?: string;
    lat?: number;
    lng?: number;
  };
  favoriteMovies?: {
    title?: string;
    director?: string;
    genre?: string[];
  }[];
  createdAt?: number;
  updatedAt?: number;
};

const originalHandler = async (
  event: APIGatewayProxyEvent & { input: Arguments }
) => {
  let { input } = event;

  let documentId = input.uid ?? '';
  if (!input.uid) {
    documentId = await generateUid();
  }

  input = {
    ...input,
    uid: documentId,
  };

  const opensearchInstance = opensearch();
  const resp = await opensearchInstance.indexDocument(documentId, input);
  return resp;
};

// eslint-disable-next-line import/prefer-default-export
export const handler = middy(originalHandler);

handler.use(httpMiddleware({ debugMode: app.debug }));
