import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    metaTitle: String,
    metaDescription: String,
    firstSection: {
        items: [{
            title: String,
            address: String,
            phone: String,
            email: String,
            fax: String,
            po: String,
            map: String,
        }]
    }
})

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);