/** @format */

import { NextResponse } from "next/server";

export const runtime = "nodejs"; // bắt buộc: chạy Node, không Edge
export const dynamic = "force-dynamic"; // tránh bị static hoá
export const revalidate = 0;

export async function GET() {
  return NextResponse.json({
    ok: true,
    hasGoogleId: !!process.env.GOOGLE_CLIENT_ID,
    hasSecret: !!process.env.NEXTAUTH_SECRET,
    url: process.env.NEXTAUTH_URL,
  });
}
