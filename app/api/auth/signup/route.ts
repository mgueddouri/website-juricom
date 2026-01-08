import { NextRequest, NextResponse } from "next/server";
import { Issuer, generators } from "openid-client";

export async function GET(req: NextRequest) {
  const issuerUrl = process.env.COGNITO_ISSUER!;
  const clientId = process.env.COGNITO_CLIENT_ID!;
  const clientSecret = process.env.COGNITO_CLIENT_SECRET!;
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;

  const issuer = await Issuer.discover(issuerUrl);

  const cognitoClient = new issuer.Client({
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uris: [redirectUri],
    response_types: ["code"],
  });

  const codeVerifier = generators.codeVerifier();
  const codeChallenge = generators.codeChallenge(codeVerifier);

  const authorizationUrl = cognitoClient.authorizationUrl({
    scope: "openid email phone",
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
    lang: "fr",
  });

  // ✅ Remplacement direct pour accéder à la page SIGNUP
  const signupUrl = authorizationUrl.replace("/oauth2/authorize", "/signup");

  const response = NextResponse.redirect(signupUrl);
  response.cookies.set("code_verifier", codeVerifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 60 * 10,
    path: "/",
  });

  return response;
}
