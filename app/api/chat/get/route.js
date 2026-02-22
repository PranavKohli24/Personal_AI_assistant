import connectDB from "@/config/db";
import Chat from "@/models/Chat";

import {auth} from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req){

    try{
        const {userId}=auth();

        if (!userId){
            return NextResponse.json({success:false, message:'User iss not Authenticated',debug_info: {
                    userId: userId || "null",
                    sessionId: sessionId || "null",
                    explanation: "Clerk auth() returned no user. Likely Middleware or Key issue."
                }})
        }

        //connect to the database and fetch all chats for the user.
        await connectDB();
        // const data=await Chat.find({userId});
        const data = await Chat.find({ userId }).sort({ updatedAt: -1 });

        return NextResponse.json({success:true, data})
    }catch(err){
        return NextResponse.json({success:false,error:err.message})
    }
}