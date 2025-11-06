import { NextRequest, NextResponse } from 'next/server';
import { getClient } from '@/lib/cognito';
import { generators } from 'openid-client';

export async function GET(req: NextRequest) {
  const client = await getClient();
  const code_verifier = generators.codeVerifier();
  const code_challenge = generators.codeChallenge(code_verifier);

  const redirectUrl = client.authorizationUrl({
    scope: 'openid email profile',
    response_mode: 'query',
    code_challenge,
    code_challenge_method: 'S256',
  });

  const response = NextResponse.redirect(redirectUrl);

  response.cookies.set('code_verifier', code_verifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 60 * 10, // 10 minutes
  });

  return response;
}
