export type NewsData = {
    metaTitle: string;
    metaDescription: string;
    news: News[];
}

export type News = {
    banner: string;
    bannerAlt: string;
    title: string;
    slug: string;
    content: string;
    thumbnail: string;
    thumbnailAlt: string;
    metaTitle: string;
    metaDescription: string;
    date: string;
}