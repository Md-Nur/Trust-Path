import MessageModel from "@/models/Message";
import dbConnect from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const message = await MessageModel.findByIdAndDelete(params.id);
  if (!message) {
    return NextResponse.json({ message: "Message not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Message deleted" }, { status: 200 });
}
