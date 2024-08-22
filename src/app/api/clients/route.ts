import ClientModel, { Client } from "@/models/Clients";
import dbConnect from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  console.log("GET");
  await dbConnect();
  const clients = await ClientModel.find({});
  if (!clients || !clients.length) {
    return NextResponse.json({ message: "No clients found" }, { status: 404 });
  }
  return NextResponse.json(clients, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body: Client = await req.json();
  if (!body) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }
  await dbConnect();
  const client = await ClientModel.create(body);

  if (!client) {
    return NextResponse.json(
      { message: "Client not created" },
      { status: 400 }
    );
  }

  return NextResponse.json(client, { status: 201 });
}

