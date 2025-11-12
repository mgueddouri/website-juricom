import { NextRequest, NextResponse } from 'next/server';
import { getClient } from '@/lib/cognito';
import * as jose from 'jose';

export async function GET(req: NextRequest) {
  const sessionCookie = req.cookies.get('session');
  const session = sessionCookie?.value;

  if (!session) {
    // If there's no session, just redirect to the app's homepage.
    return NextResponse.redirect(new URL('/', req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.SESSION_SECRET);
    const { payload } = await jose.jwtVerify(session, secret);
    const idToken = payload.id_token as string;

    const client = await getClient();
    const endSessionUrl = client.endSessionUrl({
      post_logout_redirect_uri: process.env.NEXT_PUBLIC_APP_URL,
      id_token_hint: idToken,
    });

    const response = NextResponse.redirect(endSessionUrl);
    response.cookies.delete('session');

    return response;
  } catch (error) {
    console.error('Failed to process logout:', error);
    // If token verification fails, clear the cookie and redirect to the homepage.
    const response = NextResponse.redirect(new URL('/', req.url));
    response.cookies.delete('session');
    return response;
  }
}
