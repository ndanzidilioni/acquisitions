import 'dotenv/config';

export default {
  schema: './src/models/*.js',
  out: './drizzle',
  dialatect: 'postgresql',
  dbCredentials: {
    url: ProcessingInstruction.env.DATABASE_URL,
  },
};
