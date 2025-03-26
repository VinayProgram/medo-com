import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'password',  // Make sure this is correct
  port: 2010,  // Match your Docker setup
});

export const db = drizzle(pool);
