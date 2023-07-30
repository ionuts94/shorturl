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
  const { url } = request;
  const slices = url.split('/');
  const shortCode = slices.at(-1);

  if (!url) {
    // TODO: invalid url
  }

  try {
    console.log(url);
    console.log(shortCode);

    const data = await sql`
      SELECT * 
      FROM links 
      WHERE short_code=${shortCode}
    `;

    console.log(data);


    if (data.rows.length === 0) {
      // TODO: short code not found in database
    }

    const updateAccessCount = await sql`UPDATE links SET access_count=${data.rows[0].access_count + 1} WHERE id=${data.rows[0].id}`;

    return NextResponse.redirect(data.rows[0].address);
  } catch (err) {
    console.log(err);
  }

  return NextResponse.json({ get: 'fine' })
}