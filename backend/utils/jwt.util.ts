import jwt from "jsonwebtoken";

export const generateToken = (payload: object): string => {
  const secret = (process.env.JWT_SECRET as string) || "nodeauthsecret";
  const expiresIn = process.env.JWT_EXPIRES_IN || "1h";

  return jwt.sign(payload, secret, { expiresIn });
};
