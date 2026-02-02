import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
    banner: {
        type: String,
        required: true
    },
    bannerAlt: {
        type: String,
        required: true
    },
    pageTitle: {
        type: String,
        required: true
    },
    pageDescription: {
        type: String,
        required: true
    },
    projects: [{
        banner: {
            type: String,
        },
        galleryTitle: {
            type: String,
        },
        bannerAlt: {
            type: String,
        },
        title: {
            type: String,
        },
        firstSection: {
            title: {
                type: String,
            },
            location: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Region" },
            category: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Category" },
            status: {
                type: String,
            },
            items: [{
                title: {
                    type: String,
                },
                value: {
                    type: String,
                },
            }]
        },
        images: [{
            type: String,
        }],
        slug: {
            type: String,
        },
        thumbnail: {
            type: String,
        },
        thumbnailAlt: {
            type: String,
        },
        metaTitle: {
            type: String,
        },
        metaDescription: {
            type: String,
        },
        highlight: {
            type: Boolean,
        }
    }],
})

export default mongoose.models.Project || mongoose.model("Project", projectSchema);