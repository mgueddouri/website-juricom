import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/lib/mail';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: 'contact@juricom.com',
      to: 'your-email@example.com', // Replace with your email
      subject: `Nouveau message de ${name}`,
      text: `De : ${name} <${email}>\n\n${message}`,
    });
    return NextResponse.json({ status: 'success' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
