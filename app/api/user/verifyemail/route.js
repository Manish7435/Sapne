import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        await connectToDatabase()
        const reqBody = await req.json()
       
        const {token} = reqBody

        const user = await User.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()} })
        if(!user){
            return NextResponse.json({error: "Invalid token"}, {status: 400})
        }

        user.isVerified = true,
        user.verifyToken= undefined
        user.verifyTokenExpiry = undefined
        await user.save()

        return NextResponse.json({
            message: "Email verified successfully",
            success: true
        })
    }
    catch(e){
        return NextResponse.json({error: e.message}, {status: 500})
    }
}