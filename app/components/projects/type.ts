export type ProjectType = {
    metaTitle: string;
    metaDescription: string;
    banner: string;
    bannerAlt: string;
    pageTitle: string;
    pageDescription: string;
    projects: {
        banner: string;
        galleryTitle: string;
        bannerAlt: string;
        title: string;
        firstSection: {
            title: string;
            location: {
                _id: string;
                name: string;
                slug: string;
            };
            category: {
                _id: string;
                name: string;
                slug: string;
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
    }[];
}

export type RegionType = {
    _id: string;
    name: string;
    slug: string;
}

export type CategoryType = {
    _id: string;
    name: string;
    slug: string;
}
