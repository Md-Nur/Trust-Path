import TeamModel, { Team } from "@/models/Team";
import dbConnect from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body: Team = await req.json();
  if (!body) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }
  await dbConnect();
  const team = await TeamModel.findByIdAndUpdate(
    params.id,
    { $set: { ...body } },
    { new: true }
  );
  if (!team) {
    return NextResponse.json({ message: "Team not updated" }, { status: 400 });
  }
  return NextResponse.json(team, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const team = (await TeamModel.findByIdAndDelete(params.id)) || null;
  if (!team) {
    return NextResponse.json({ message: "Team not found" }, { status: 404 });
  }
  return NextResponse.json(team, { status: 200 });
}
