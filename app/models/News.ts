import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    metaTitle: { type: String },
    metaDescription: { type: String },
    news: [
        {
            banner: {
                type: String
            },
            bannerAlt: {
                type: String
            },
            title: {
                type: String
            },
            slug: {
                type: String
            },
            content: {
                type: String
            },
            thumbnail: {
                type: String
            },
            thumbnailAlt: {
                type: String
            },
            metaTitle: {
                type: String
            },
            metaDescription: {
                type: String
            },
            date: {
                type: String
            }
        }
    ]
});

export default mongoose.models.News || mongoose.model("News", newsSchema);