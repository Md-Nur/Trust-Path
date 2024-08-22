import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (
    username === process.env.TRUST_USERNAME! &&
    password === process.env.TRUST_PASSWORD!
  ) {
    return NextResponse.json({ message: "Login Success" }, { status: 200 });
  }
  return NextResponse.json({ message: "Login Failed" }, { status: 400 });
}
