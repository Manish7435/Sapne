import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {  email } = await req.json();
    await connectToDatabase()
    const user =   await User.findOne({ email}).select("_id");

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error)
  }
}
