// app/api/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { findUserByEmail, verifyPassword, createToken } from "@/lib/user";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  console.log("enmail, password", email, password);
  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required." },
      { status: 400 }
    );
  }

  const user = await findUserByEmail(email);
  if (!user) {
    return NextResponse.json(
      { error: "Invalid email or password." },
      { status: 401 }
    );
  }

  const isValid = await verifyPassword(password, user.passwordHash);
  if (!isValid) {
    return NextResponse.json(
      { error: "Invalid email or password." },
      { status: 401 }
    );
  }

  const token = createToken(email);
  return NextResponse.json({ token });
}
