import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  console.log('------------------------------');
  const { name } = await request.json();
  const data = await sql``;

  console.log(name);

  return NextResponse.json({ data: 'cool' })
}

export async function GET() {
  return NextResponse.json({ get: 'fine' })
}