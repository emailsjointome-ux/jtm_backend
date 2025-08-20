import serverlessExpress from '@vendia/serverless-express';
import app from './src/app.js';

const server = serverlessExpress({ app });

export const handler = async (event, context) => {
  return server(event, context);
};