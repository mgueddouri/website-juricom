import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';

export async function GET(req: NextRequest) {
  const sessionCookie = req.cookies.get('session');
  const session = sessionCookie?.value;

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const secret = new TextEncoder().encode(process.env.SESSION_SECRET);
    const { payload } = await jose.jwtVerify(session, secret);

    return NextResponse.json({ name: payload.name || payload.email });
  } catch (error) {
    console.error('Failed to verify session:', error);
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
