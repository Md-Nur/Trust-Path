import TeamModel, { Team } from "@/models/Team";
import dbConnect from "@/utils/dbConnection";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const team: Team[] = await TeamModel.find();
  if (!team || team.length === 0) {
    return NextResponse.json({ message: "Team not found" }, { status: 404 });
  }
  return NextResponse.json(team);
}

export async function POST(req: NextRequest) {
  const body: Team = await req.json();
  if (!body) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }
  await dbConnect();
  const team = await TeamModel.create(body);
  if (!team) {
    return NextResponse.json({ message: "Team not created" }, { status: 400 });
  }
  return NextResponse.json(team, { status: 201 });
}
