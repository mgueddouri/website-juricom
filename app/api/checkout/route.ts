import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function GET(req: NextRequest) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Abonnement Juricom',
          },
          unit_amount: 4900, // 49.00 EUR
        },
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${req.nextUrl.origin}/success`,
    cancel_url: `${req.nextUrl.origin}/pricing`,
  });

  if (session.url) {
    return NextResponse.redirect(session.url);
  } else {
    return NextResponse.redirect(new URL('/pricing', req.url));
  }
}
