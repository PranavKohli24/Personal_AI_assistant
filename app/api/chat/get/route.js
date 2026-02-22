import connectDB from "@/config/db";
import Chat from "@/models/Chat";

import {auth} from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req){

    try{
        console.log("--- START DEBUG: /api/chat/get ---");
        // 1. Log Headers (Check if cookies/tokens are arriving)
        const headerList = headers();
        const authHeader = headerList.get("authorization");
        const cookieHeader = headerList.get("cookie");
        
        console.log("-> Authorization Header:", authHeader ? "PRESENT (Hidden)" : "MISSING");
        console.log("-> Cookie Header:", cookieHeader ? "PRESENT (Length: " + cookieHeader.length + ")" : "MISSING");


        const {userId}=auth();
        console.log("-> Auth Object:", JSON.stringify(authObj, null, 2));

        if (!userId){
            return NextResponse.json({success:false, message:'User iss not Authenticated'})
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