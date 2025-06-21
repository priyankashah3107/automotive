// app/api/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createUser, findUserByEmail } from "@/lib/user";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  console.log("enmail, password", email, password);

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required." },
      { status: 400 }
    );
  }

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return NextResponse.json(
      { error: "User already exists." },
      { status: 409 }
    );
  }

  const user = await createUser(email, password);
  return NextResponse.json({ user });
}
