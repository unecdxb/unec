import { Url } from "url";

export type HomeDataType = {
    metaTitle: string;
    metaDescription: string;
    bannerSection: {
        items: {
            link: Url;
            title: string;
            image: string;
            imageAlt: string;
            description: string;
        }[];
    };
    firstSection: {
        description: string;
        fileTitle: string;
        file: string;
        items: {
            number: string;
            value: string;
        }[];
    };
    secondSection: {
        title: string;
    };
    thirdSection: {
        title: string;
    };
    fourthSection: {
        title: string;
        items: {
            logo: string;
            logoAlt: string;
        }[];
    };
}