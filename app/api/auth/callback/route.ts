import { NextRequest, NextResponse } from 'next/server';
import { getClient } from '@/lib/cognito';
import * as jose from 'jose';

export async function GET(req: NextRequest) {
  const client = await getClient();

  const searchParams = req.nextUrl.searchParams;
  const code = searchParams.get('code');

  if (!code) {
    // Handle missing code
    return NextResponse.redirect(new URL('/', req.url));
  }

  const code_verifier = req.cookies.get('code_verifier')?.value;

  if (!code_verifier) {
    // Handle missing code_verifier
    return NextResponse.redirect(new URL('/', req.url));
  }

  const tokenSet = await client.callback(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`,
    { code },
    { code_verifier },
  );

  const idToken = tokenSet.id_token;

  if (!idToken) {
    // Handle missing id_token
    return NextResponse.redirect(new URL('/', req.url));
  }

  const payload = jose.decodeJwt(idToken);

  const session = {
    ...payload,
    id_token: idToken,
    access_token: tokenSet.access_token,
  };

  const secret = new TextEncoder().encode(process.env.SESSION_SECRET);
  const jwt = await new jose.SignJWT(session)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(secret);

  const response = NextResponse.redirect(new URL('/api/checkout', req.url));

  response.cookies.set('session', jwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 60 * 60 * 2, // 2 hours
  });

  // Clean up the code_verifier cookie
  response.cookies.delete('code_verifier');

  return response;
}
