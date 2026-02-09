import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
    bannerSection: {
        items: [
            {
                title: { type: String, required: true },
                image: { type: String, required: true },
                imageAlt: { type: String },
                description: { type: String, required: true },
                link: { type: String },
            }
        ]
    },
    firstSection: {
        description: { type: String, required: true },
        fileTitle: { type: String, required: true },
        file: { type: String, required: true },
        items: [
            {
                number: { type: String, required: true },
                value: { type: String, required: true },
            }
        ]
    },
    secondSection: {
        title: { type: String, required: true },
    },
    thirdSection: {
        title: { type: String, required: true },
    },
    fourthSection: {
        title: { type: String, required: true },
        items: [
            {
                logo: { type: String, required: true },
                logoAlt: { type: String },
            }
        ]
    },
})

export default mongoose.models.Home || mongoose.model("Home", homeSchema);