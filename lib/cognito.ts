import { Issuer, generators } from 'openid-client';

/**
 * Initialise le client Cognito avec la config OpenID
 */
export async function getClient() {
  const issuerUrl = process.env.COGNITO_ISSUER!;
  const clientId = process.env.COGNITO_CLIENT_ID!;
  const clientSecret = process.env.COGNITO_CLIENT_SECRET!;
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;

  // Découverte automatique du serveur Cognito
  const issuer = await Issuer.discover(issuerUrl);

  // Création du client OpenID
  const client = new issuer.Client({
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uris: [redirectUri],
    response_types: ['code'],
  });

  return client;
}

/**
 * Génère une URL d'autorisation avec PKCE
 */
export async function getAuthorizationUrl() {
  const client = await getClient();

  const codeVerifier = generators.codeVerifier();
  const codeChallenge = generators.codeChallenge(codeVerifier);

  const authorizationUrl = client.authorizationUrl({
    scope: 'openid email phone',
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
  });

  return { authorizationUrl, codeVerifier };
}

/**
 * Échange le code reçu contre un token
 */
export async function exchangeCodeForToken(code: string, codeVerifier: string) {
  const client = await getClient();
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;

  const tokenSet = await client.callback(redirectUri, { code }, { code_verifier: codeVerifier });
  return tokenSet;
}
