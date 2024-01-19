'use server';
import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'easy_meal',
    password: 'postgres',
    port: 5432,
});

export async function fetchRestaurants() {
    const restaurants=pool.query('SELECT * FROM restaurants');
    return restaurants;
}