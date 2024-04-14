import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Dream from "@/models/dream";

export async function GET(req) {  
  try {
        await connectToDatabase()
        const headers = req.headers;
        let dreamerId;
        for (const [key, value] of headers) {
            if (key.toLowerCase() === 'dreamerid') {
                dreamerId = value;
                break;
            }
        }   
        const dreams = await Dream.find({dreamerId})
        return NextResponse.json({ dreams }, { status: 200 });
  
    } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while accessing the dream." },
      { status: 500 }
    );
  }
}
