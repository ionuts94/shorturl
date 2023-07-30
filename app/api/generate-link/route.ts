import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';
import { getEnvURL } from "@/libs/helpers";

const generator = require('generate-password');

export interface APIResponse {
  ok: boolean;
  shortLink?: string;
  shortCode?: string;
  linkClick?: number;
  newlyCreated?: boolean;
  error: string;
}

export async function POST(request: Request) {
  const { link } = await request.json();

  if (!link) {
    return NextResponse.json({
      ok: false,
      error: 'Missing url code'
    })
  }

  const shortCode = generator.generate({
    length: 5,
    numbers: true,
    symbols: false,
  });

  try {
    await sql`INSERT INTO links (short_code, address, timestamp, access_count)
    VALUES (${shortCode}, ${link}, ${new Date().toISOString().slice(0, 19).replace('T', ' ')}, 0);`

    return NextResponse.json({
      ok: true,
      shortLink: `${getEnvURL()}/${shortCode}`,
      shortCode: shortCode,
      linkClicks: 0,
      newlyCreated: true
    })
  } catch (err) {
    return NextResponse.json({
      ok: false,
      error: (err as Error).message
    })
  }
}