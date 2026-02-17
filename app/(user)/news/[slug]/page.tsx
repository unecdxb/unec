import Index from "@/app/components/news-details";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;
    const response = await fetch(`${process.env.BASE_URL}/api/admin/news?slug=${slug}`, { next: { revalidate: 60 } });
    const data = await response.json();
    const news = data.data;

    return {
        title: news?.metaTitle,
        description: news?.metaDescription,
        openGraph: {
            title: news?.metaTitle,
            description: news?.metaDescription,
            url: `${process.env.BASE_URL}/news/${slug}`,
            images: news?.banner ? [{ url: news.banner, alt: news.bannerAlt }] : [],
            type: "article",
            publishedTime: news?.date,
        },
        twitter: {
            card: "summary_large_image",
            title: news?.metaTitle,
            description: news?.metaDescription,
            images: news?.banner ? [news.banner] : [],
        },
    };
}

const page = async ({ params }: Props) => {
    const slug = (await params).slug;
    const response = await fetch(`${process.env.BASE_URL}/api/admin/news?slug=${slug}`, { next: { revalidate: 60 } });
    const data = await response.json();

    return <Index data={data.data} />;
};

export default page;
