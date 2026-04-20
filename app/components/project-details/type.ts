export type ProjectData = {
    metaTitle: string;
    metaDescription: string;
    banner: string;
    bannerAlt: string;
    pageTitle: string;
    pageDescription: string;
    projects: Project[];
}

export type Project = {
    _id: string;
    banner: string;
    galleryTitle: string;
    bannerAlt: string;
    title: string;
    firstSection: {
        title: string;
        innerLocation:string;
        location: {
            name: string;
        };
        category: {
            name: string;
        };
        status: string;
        items: {
            title: string;
            value: string;
        }[];
    };
    images: string[];
    slug: string;
    thumbnail: string;
    thumbnailAlt: string;
    metaTitle: string;
    metaDescription: string;
    highlight: boolean;
}