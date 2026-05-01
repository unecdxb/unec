export async function GET(req: Request) {
    const url = new URL(req.url).searchParams.get("url");

    if (!url) {
        return new Response("Missing URL", { status: 400 });
    }

    const res = await fetch(url);

    if (!res.ok) {
        return new Response("Failed to fetch file", { status: 500 });
    }

    const buffer = await res.arrayBuffer();

    return new Response(buffer, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": "inline; filename=\"file.pdf\"",
            "Cache-Control": "public, max-age=3600",
        },
    });
}