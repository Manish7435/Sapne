import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Dream from "@/models/dream";

export async function GET() {
  try {
    await connectToDatabase()
    const dreams = await Dream.find()
    return NextResponse.json({ dreams }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while accessing the dream." },
      { status: 500 }
    );
  }
}
