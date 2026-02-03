export type CareerData = {
    banner: string;
    bannerAlt: string;
    metaTitle: string;
    metaDescription: string;
    pageTitle: string;
    firstSection: {
        items: {
            title: string;
            subTitle: string;
            description: string;
            image: string;
            imageAlt: string;
        }[]
    },
    secondSection: {
        title: string;
        items: {
            title: string;
            mode: string;
            jobType: string;
        }[]
    }
}