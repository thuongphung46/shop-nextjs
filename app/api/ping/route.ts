/** @format */

import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    ok: true,
    hasGoogleId: !!process.env.GOOGLE_CLIENT_ID,
    hasSecret: !!process.env.NEXTAUTH_SECRET,
    url: process.env.NEXTAUTH_URL,
    timestamp: new Date().toISOString(),
  });
}
