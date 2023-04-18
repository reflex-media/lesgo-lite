import { query } from 'lesgo/utils/dynamodb';
import dynamodbConfig from 'config/dynamodb';
import logger from 'lesgo/utils/logger';

const FILE = 'models/Blog/getBlogsByUserId';

export default async (userId: string) => {
  const { blogsTable } = dynamodbConfig.tables;

  logger.debug(`${FILE}::FETCHING DATA`, {
    userId,
    blogsTable,
  });
  const resp = await query(
    blogsTable.name,
    'userId = :u',
    { ':u': userId },
    'userId,blogId,author,content,snippet,title,createdAt,updatedAt'
  );
  logger.debug(`${FILE}::DATA FETCHED SUCCESSFULLY`, { resp });

  return resp;
};
