import { NextRequest, NextResponse } from "next/server";
import { Issuer, generators } from "openid-client";

export async function GET(req: NextRequest) {
  // === 1️⃣ Configuration Cognito ===
  const issuerUrl = process.env.COGNITO_ISSUER!;
  const clientId = process.env.COGNITO_CLIENT_ID!;
  const clientSecret = process.env.COGNITO_CLIENT_SECRET!;
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;

  // === 2️⃣ Découverte de la configuration OpenID ===
  const issuer = await Issuer.discover(issuerUrl);

  // === 3️⃣ Création du client OpenID ===
  const cognitoClient = new issuer.Client({
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uris: [redirectUri],
    response_types: ["code"],
  });

  // === 4️⃣ Génération PKCE ===
  const codeVerifier = generators.codeVerifier();
  const codeChallenge = generators.codeChallenge(codeVerifier);

  // === 5️⃣ Construction de l’URL d’autorisation ===
  const authorizationUrl = cognitoClient.authorizationUrl({
    scope: "openid email phone",
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
  });

  // === 6️⃣ Redirection vers Cognito + stockage sécurisé du code_verifier ===
  const response = NextResponse.redirect(authorizationUrl);
  response.cookies.set("code_verifier", codeVerifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 60 * 10, // 10 minutes
    path: "/",
  });

  return response;
}
