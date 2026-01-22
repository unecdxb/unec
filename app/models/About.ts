import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    banner: {
        type: String,
        required: true
    },
    bannerAlt: {
        type: String,
    },
    metaTitle: {
        type: String,
        required: true
    },
    metaDescription: {
        type: String,
        required: true
    },
    pageTitle: {
        type: String,
        required: true
    },
    firstSection: {
        items: [{
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
            }
        }]
    },
    secondSection: {
        id: {
            type: String,
        },
        items: [{
            title: {
                type: String,
                required: true
            },
            scrollToId: {
                type: String,
            }
        }]
    },
    thirdSection: {
        id: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
        },
        name: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            required: true
        },
    },
    fourthSection: {
        id: {
            type: String,
        },
        title: {
            type: String,
        },
        items: [{
            image: {
                type: String,
                required: true
            },
            imageAlt: {
                type: String,
            },
            name: {
                type: String,
                required: true
            },
            designation: {
                type: String,
                required: true
            },
        }]
    },
    fifthSection: {
        id: {
            type: String,
        },
        title: {
            type: String,
        },
        subTitle: {
            type: String,
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
        },
        items: [{
            image: {
                type: String,
                required: true
            },
            imageAlt: {
                type: String,
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
        }]
    },
    sixthSection: {
        id: {
            type: String,
        },
        title: {
            type: String,
        },
        image: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
        },
        items: [{
            title: {
                type: String,
                required: true
            },
            subTitle: {
                type: String,
                required: true
            },
        }]
    },
    seventhSection: {
        id: {
            type: String,
        },
        title: {
            type: String,
        },
        items: [{
            image: {
                type: String,
                required: true
            },
            imageAlt: {
                type: String,
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            websiteLink: {
                type: String
            }
        }]
    },
    eighthSection: {
        id: {
            type: String,
        },
        title: {
            type: String,
        },
        items: [{
            image: {
                type: String,
                required: true
            },
            imageAlt: {
                type: String,
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
        }]
    },
})

export default mongoose.models.About || mongoose.model("About", aboutSchema);