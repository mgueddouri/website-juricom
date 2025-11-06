import { Issuer } from 'openid-client';

export const getClient = async () => {
  const issuer = await Issuer.discover(process.env.COGNITO_ISSUER!);

  const client = new issuer.Client({
    client_id: process.env.COGNITO_CLIENT_ID!,
    redirect_uris: [`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`],
    response_types: ['code'],
  });

  return client;
};
