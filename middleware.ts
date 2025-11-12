import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';

export async function middleware(req: NextRequest) {
  const sessionCookie = req.cookies.get('session');
  const session = sessionCookie?.value;

  if (!session) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.SESSION_SECRET);
    await jose.jwtVerify(session, secret);
  } catch (error) {
    console.error('Failed to verify session:', error);
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/checkout'],
};
