import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

const generator = require('generate-password');

export async function POST(request: Request) {
  const { link } = await request.json();

  const shortCode = generator.generate({
    length: 5,
    numbers: true,
    symbols: false,
  });

  const sqlInsert = await sql`INSERT INTO links (ID, NAME, ADDRESS, TIMESTAMP) values (${2},${shortCode},${link},${new Date().toISOString().slice(0, 19).replace('T', ' ')})`
  console.log(sqlInsert);
  return NextResponse.json({ p: 'r' })
}