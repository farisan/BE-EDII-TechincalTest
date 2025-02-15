const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET;

// Generate token
export function generateToken(payload: object): string {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "10h" });
}


interface payloadInterface {
  id: string;
  role: string;
  email: string;
}

export function verifyToken(token: string): { valid: boolean; payload?: payloadInterface; error?: string } {
  try {
    const payload = jwt.verify(token, SECRET_KEY);
    return { valid: true, payload };
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return { valid: false, error: "Token Expired" };
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return { valid: false, error: "Invalid Token" };
    }
    return { valid: false, error: "Token verification failed" };
  }
}