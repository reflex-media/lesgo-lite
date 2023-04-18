import { query } from 'lesgo/utils/dynamodb';
import dynamodbConfig from 'config/dynamodb';
import logger from 'lesgo/utils/logger';
import ErrorException from 'exceptions/ErrorException';

const FILE = 'models/Blog/getBlog';

export default async (blogId: string, userId: string) => {
  const { blogsTable } = dynamodbConfig.tables;

  logger.debug(`${FILE}::FETCHING DATA`, {
    blogId,
    userId,
    blogsTable,
  });
  const resp = await query(
    blogsTable.name,
    'userId = :u AND blogId = :b',
    { ':u': userId, ':b': blogId },
    'userId,blogId,author,content,snippet,title,createdAt,updatedAt'
  );
  logger.debug(`${FILE}::DATA FETCHED SUCCESSFULLY`, { resp });

  if (typeof resp !== 'undefined' && resp.length > 0) {
    return resp[0];
  }

  throw new ErrorException(
    'Unable to find record',
    `${FILE}::NO_RECORD_FOUND`,
    404,
    { blogId, userId }
  );
};
