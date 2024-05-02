import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helper/mailer";

export async function POST(req) {

  try {
    const { name, email, password, isVerified } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDatabase()
     const user = await User.create({ name, email, password:hashedPassword ,isVerified });

    await sendEmail({email, emailType: "VERIFY", userId: user._id})

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
