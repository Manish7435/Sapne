import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Dream from "@/models/dream";

export async function POST(req) {
  try {
    const { title, tag, dream ,dreamerId, security} = await req.json();
    await connectToDatabase()
    await Dream.create({ title, tag, dream, dreamerId ,security}); 

    return NextResponse.json({ message: "dream stored." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while creating the dream." },
      { status: 500 }
    );
  }
}
