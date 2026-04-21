export type NewsData = {
    metaTitle: string;
    metaDescription: string;
    news: News[];
    banner: string;
    bannerAlt: string;
    pageTitle: string;
}

export type News = {
    banner: string;
    bannerAlt: string;
    title: string;
    subTitle:string;
    slug: string;
    content: string;
    thumbnail: string;
    thumbnailAlt: string;
    metaTitle: string;
    metaDescription: string;
    date: string;
}