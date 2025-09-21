/** @format */

export async function GET() {
  return Response.json({
    hasId: !!process.env.GOOGLE_CLIENT_ID,
    hasSecret: !!process.env.GOOGLE_CLIENT_SECRET,
    hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
    url: process.env.NEXTAUTH_URL,
  });
}
