import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  const { shortCode } = await request.json();

  const data = await sql`
    SELECT * 
    FROM links 
    WHERE short_code=${shortCode}
  `;

  return NextResponse.json({ data })
}

export async function GET(request: Request) {
  console.log(request);
  return NextResponse.json({ get: 'fine' })
}