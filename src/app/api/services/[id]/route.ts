import ServiceModel, { Service } from "@/models/Services";
import dbConnect from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const body: Service = await req.json();
  if (!body) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }
  await dbConnect();
  const service = await ServiceModel.findByIdAndUpdate(params.id, body, {
    new: true,
    runValidators: true,
  });

  if (!service) {
    return NextResponse.json({ message: "Service not found" }, { status: 404 });
  }

  return NextResponse.json(service, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const service = await ServiceModel.findByIdAndDelete(params.id);

  if (!service) {
    return NextResponse.json({ message: "Service not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Service deleted" }, { status: 200 });
}
