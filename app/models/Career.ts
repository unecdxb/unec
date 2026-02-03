import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
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
            subTitle: {
                type: String,
            },
            description: {
                type: String,
            },
            image: {
                type: String,
                required: true
            },
            imageAlt: {
                type: String,
            },
        }]
    },
    secondSection: {
        title: {
            type: String,
            required: true
        },
        items: [{
            title: {
                type: String,
                required: true
            },
            mode: {
                type: String,
                required: true
            },
            jobType: {
                type: String,
                required: true
            },
        }]
    }
})

export default mongoose.models.Career || mongoose.model("Career", careerSchema);