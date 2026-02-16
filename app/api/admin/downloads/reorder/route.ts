import { NextRequest, NextResponse } from "next/server";
import Downloads from "@/app/models/Downloads";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
export async function POST(req: NextRequest) {
    const session = await mongoose.startSession()
    try {
        session.startTransaction()
        await connectDB()
        const formData = await req.formData()
        const downloads = formData.get("downloads") as string
        const actualDownloads = JSON.parse(downloads)
        const allDownloads = await Downloads.findOne({})
        allDownloads.downloads = actualDownloads
        await allDownloads.save()
        session.commitTransaction()
        return NextResponse.json({ message: "Downloads reordered successfully", success: true }, { status: 200 })
    } catch (error) {
        console.log(error)
        session.abortTransaction()
        return NextResponse.json({ message: "Internal Server Error", success: false }, { status: 500 })
    }
    finally {
        session.endSession()
    }
}


