export type DownloadsData = {
    metaTitle: string;
    metaDescription: string;
    banner: string;
    bannerAlt: string;
    pageTitle: string;
    downloads: {
        title: string;
        file: string;
        image: string;
        imageAlt: string;
    }[];
}