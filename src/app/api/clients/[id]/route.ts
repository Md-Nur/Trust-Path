import ClientModel, { Client } from "@/models/Clients";
import dbConnect from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body: Client = await req.json();
  if (!body) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }
  await dbConnect();
  const client = await ClientModel.findByIdAndUpdate(params.id, body, {
    new: true,
    runValidators: true,
  });

  if (!client) {
    return NextResponse.json({ message: "Service not found" }, { status: 404 });
  }

  return NextResponse.json(client, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const client = await ClientModel.findByIdAndDelete(params.id);

  if (!client) {
    return NextResponse.json({ message: "Client not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Client deleted" }, { status: 200 });
}
