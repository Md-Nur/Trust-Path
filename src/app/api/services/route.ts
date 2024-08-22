import ServiceModel, { Service } from "@/models/Services";
import dbConnect from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body: Service = await req.json();
  if (!body) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }
  await dbConnect();
  const service = await ServiceModel.create(body);

  if (!service) {
    return NextResponse.json(
      { message: "Service not created" },
      { status: 400 }
    );
  }

  return NextResponse.json(service, { status: 201 });
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const serviceType = url.searchParams.get("type");
  await dbConnect();
  let services: Service[] = [];
  if (serviceType) {
    services = await ServiceModel.find({ serviceType });
  } else {
    services = await ServiceModel.find({});
  }
  if (!services || services.length === 0) {
    return NextResponse.json({ message: "No services found" }, { status: 404 });
  }
  return NextResponse.json(services, { status: 200 });
}
