import mongoose from "mongoose";

const downloadsSchema = new mongoose.Schema({
    metaTitle: { type: String },
    metaDescription: { type: String },
    banner: { type: String },
    bannerAlt: { type: String },
    downloads: [
        {
            title: {
                type: String
            },
            file: {
                type: String
            }
        }
    ]
});

export default mongoose.models.Downloads || mongoose.model("Downloads", downloadsSchema);