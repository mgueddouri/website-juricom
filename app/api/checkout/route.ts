import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function GET(req: NextRequest) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription', // ✅ On crée une souscription
      line_items: [
        {
          price: 'price_1SPboXJr50fVu3346L7ELE81',
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/success`,
      cancel_url: `${req.nextUrl.origin}/pricing`,
    });

    if (session.url) {
      return NextResponse.redirect(session.url);
    } else {
      return NextResponse.redirect(new URL('/pricing', req.url));
    }
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
