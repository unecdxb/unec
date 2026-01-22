import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import Region from "@/app/models/Region";

export async function GET() {
    try {
        await connectDB();
        const region = await Region.find({});
        if (!region) {
            return NextResponse.json({ message: "Region not found" }, { status: 404 });
        }
        return NextResponse.json({ data: region, message: "Region fetched successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { name } = await request.json();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const region = await Region.create({ name });
        if (!region) {
            return NextResponse.json({ message: "Region not found" }, { status: 404 });
        }
        return NextResponse.json({ data: region, message: "Region created successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const { name } = await request.json();
        const id = request.nextUrl.searchParams.get("id");
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const region = await Region.findByIdAndUpdate(id, { name }, { upsert: true, new: true });
        if (!region) {
            return NextResponse.json({ message: "Region not found" }, { status: 404 });
        }
        return NextResponse.json({ data: region, message: "Region updated successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const region = await Region.findByIdAndDelete(id);
        if (!region) {
            return NextResponse.json({ message: "Region not found" }, { status: 404 });
        }
        return NextResponse.json({ data: region, message: "Region deleted successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
