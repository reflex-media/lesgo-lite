import { put } from 'lesgo/utils/dynamodb';
import dynamodbConfig from 'config/dynamodb';
import logger from 'lesgo/utils/logger';
import getCurrentTimestamp from 'lesgo/utils/getCurrentTimestamp';

const FILE = 'models/Blog/insertBlog';

type BlogRecord = {
  userId: string;
  blogId: string;
  title: string;
  snippet: string;
  content: string;
  isPublished: boolean;
  publishedAt: number | null;
  author: {
    name: string;
  };
};

export default async (params: BlogRecord) => {
  const { blogsTable } = dynamodbConfig.tables;

  const dateTimeNow = getCurrentTimestamp();

  const insertData = {
    ...params,
    isDelete: false,
    createdAt: dateTimeNow,
    updatedAt: dateTimeNow,
    deletedAt: null,
  };

  logger.debug(`${FILE}::STORING DATA TO DYNAMODB`, {
    insertData,
    blogsTable,
  });
  const resp = await put(blogsTable.name, insertData);
  logger.debug(`${FILE}::DATA STORED SUCCESSFULLY TO DYNAMODB`, { resp });

  return resp;
};
