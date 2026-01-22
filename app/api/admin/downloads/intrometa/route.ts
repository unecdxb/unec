import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Download from "@/app/models/Downloads";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const { metaTitle, metaDescription, banner, bannerAlt } = await req.json();
        const download = await Download.findOne({});
        if (download) {
            download.metaTitle = metaTitle;
            download.metaDescription = metaDescription;
            download.banner = banner;
            download.bannerAlt = bannerAlt;
            await download.save();
            return NextResponse.json({ message: "Details saved successfully" }, { status: 200 });
        } else {
            const download = new Download({ metaTitle, metaDescription, banner, bannerAlt });
            await download.save();
            return NextResponse.json({ message: "Details saved successfully" }, { status: 200 });
        }
    } catch (error) {
        console.log("Error saving intro meta details", error);
        return NextResponse.json({ message: "Error saving intro meta details" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const download = await Download.findOne({});
        if (download) {
            return NextResponse.json({ success: true, data: download }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, message: "Error fetching details" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error fetching details", error);
        return NextResponse.json({ success: false, message: "Error fetching details" }, { status: 500 });
    }
}

