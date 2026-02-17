import connectDB from "@/lib/mongodb"
import Newsletter from "@/app/models/Newsletter"
import { NextRequest, NextResponse } from "next/server"
import { verifyAdmin } from "@/lib/verifyAdmin"

export async function POST(req: NextRequest) {
    try {
        await connectDB()
        const body = await req.json()
        console.log("body", body)
        const newsletter = await Newsletter.create(body)
        if (!newsletter) {
            return NextResponse.json({ message: "Error adding newsletter", success: false }, { status: 500 })
        }
        return NextResponse.json({ message: "You’ve successfully subscribed to our newsletter.", success: true }, { status: 200 })
    } catch (error) {
        console.log("Error adding newsletter", error)
        return NextResponse.json({ message: "Error adding newsletter", success: false }, { status: 500 })
    }
}

export async function GET() {
    try {
        await connectDB()
        const newsletter = await Newsletter.find()
        if (!newsletter) {
            return NextResponse.json({ message: "No newsletter found", success: false }, { status: 404 })
        }
        return NextResponse.json({ data: newsletter, success: true }, { status: 200 })
    } catch (error) {
        console.log("Error fetching newsletter", error)
        return NextResponse.json({ message: "Error fetching newsletter", success: false }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await connectDB()
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const { id } = await req.json()
        const newsletter = await Newsletter.findByIdAndDelete(id)
        if (!newsletter) {
            return NextResponse.json({ message: "Newsletter not found", success: false }, { status: 404 })
        }
        return NextResponse.json({ message: "Newsletter deleted successfully", success: true }, { status: 200 })
    } catch (error) {
        console.log("Error deleting newsletter", error)
        return NextResponse.json({ message: "Error deleting newsletter", success: false }, { status: 500 })
    }
}




