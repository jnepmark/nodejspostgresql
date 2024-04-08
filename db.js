import pg from 'pg';

const { Pool }  = pg;

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nodejspostgressql1',
    password:'123456@aA',
    port: 5432
});