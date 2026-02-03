export type AboutData = {
    banner: string;
    bannerAlt: string;
    pageTitle: string;
    pageDescription: string;
    firstSection: {
        items: {
            title: string;
            description: string;
        }[]
    }
    secondSection: {
        id: string;
        items: {
            title: string;
            scrollToId: string;
        }[]
    }
    thirdSection: {
        id: string;
        title: string;
        description: string;
        image: string;
        imageAlt: string;
        name: string;
        designation: string;
    }
    fourthSection: {
        id: string;
        title: string;
        items: {
            image: string;
            imageAlt: string;
            name: string;
            designation: string;
        }[]
    }
    fifthSection: {
        id: string;
        title: string;
        subTitle: string;
        description: string;
        image: string;
        imageAlt: string;
        items: {
            image: string;
            imageAlt: string;
            title: string;
            description: string;
        }[]
    }
    sixthSection: {
        id: string;
        title: string;
        image: string;
        imageAlt: string;
        items: {
            title: string;
            subTitle: string;
        }[]
    }
    seventhSection: {
        id: string;
        title: string;
        items: {
            image: string;
            imageAlt: string;
            title: string;
            description: string;
            websiteLink: string;
        }[]
    }
    eighthSection: {
        id: string;
        title: string;
        items: {
            image: string;
            imageAlt: string;
            title: string;
            description: string;
        }[]
    }
}