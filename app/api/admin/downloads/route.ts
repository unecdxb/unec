import connectDB from "@/lib/mongodb";
import Download from "@/app/models/Downloads";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const { title, file, image, imageAlt } = await req.json();
        const downloads = await Download.findOne({})
        if (downloads) {
            downloads.downloads.push({ title, file, image, imageAlt })
            await downloads.save()
            return NextResponse.json({ message: "Download added successfully" }, { status: 200 });
        }
        else {
            return NextResponse.json({ message: "Error in adding download" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error in adding download", error);
        return NextResponse.json({ message: "Error in adding download" }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        const { title, file, image, imageAlt } = await req.json();
        const downloads = await Download.findOne({});
        if (downloads) {
            downloads.downloads = downloads.downloads.map((downloads: { _id: string }) => {
                if (downloads._id.toString() === id) {
                    return { title, file, image, imageAlt }
                }
                return downloads
            })
            await downloads.save()
            return NextResponse.json({ message: "Download updated successfully" }, { status: 200 });
        }
        else {
            return NextResponse.json({ message: "Error in updating download" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error in updating download", error);
        return NextResponse.json({ message: "Error in updating download" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const downloads = await Download.findOne({});
        if (downloads) {
            return NextResponse.json({ message: "Download fetched successfully", data: downloads }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Error in fetching download" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error in fetching download", error);
        return NextResponse.json({ message: "Error in fetching download" }, { status: 500 });
    }
}


export async function DELETE(req: NextRequest) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        const downloads = await Download.findOne({});
        if (id) {
            if (downloads) {
                downloads.downloads = downloads.downloads.filter((downloads: { _id: string }) => downloads._id.toString() !== id)
                await downloads.save()
                return NextResponse.json({ message: "Download deleted successfully" }, { status: 200 });
            } else {
                return NextResponse.json({ message: "Error in deleting download" }, { status: 500 });
            }
        } else {
            return NextResponse.json({ message: "Error in deleting download" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error in deleting download", error);
        return NextResponse.json({ message: "Error in deleting download" }, { status: 500 });
    }
}
