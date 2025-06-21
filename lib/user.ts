// lib/db/user.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export type User = { email: string; passwordHash: string };
const users: User[] = [];

export async function createUser(email: string, password: string) {
  const hash = await bcrypt.hash(password, 10);
  users.push({ email, passwordHash: hash });
  return { email };
}

export async function findUserByEmail(email: string) {
  return users.find((u) => u.email === email);
}

export function createToken(email: string) {
  const secret = process.env.JWT_SECRET;
  console.log("Secert is ", secret);
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not defined");
  }
  return jwt.sign({ email }, secret, { expiresIn: "2h" });
}

export function verifyToken(token: string) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not defined");
  }
  try {
    const decoded = jwt.verify(token, secret);
    type JwtPayload = { email: string; [key: string]: unknown };
    if (typeof decoded === "object" && decoded !== null && "email" in decoded && typeof (decoded as JwtPayload).email === "string") {
      return { email: (decoded as JwtPayload).email };
    }
    return null;
  } catch {
    return null;
  }
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}
