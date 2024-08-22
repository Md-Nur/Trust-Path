import MessageModel, { Message } from "@/models/Message";
import dbConnect from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnect();
  const body: Message = await req.json();
  if (!body) {
    return NextResponse.json(
      { message: "Message not created" },
      { status: 400 }
    );
  }
  const msg = await MessageModel.create(body);

  if (!msg) {
    return NextResponse.json(
      { message: "Message not created" },
      { status: 400 }
    );
  }

  return NextResponse.json(msg, { status: 201 });
}

export async function GET() {
  await dbConnect();
  const messages: Message[] = await MessageModel.find();

  if (!messages || messages.length === 0) {
    return NextResponse.json(
      { message: "Messages not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(messages, { status: 200 });
}
