import mongoose from "mongoose"

const enquirySchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    subject: String,
    message: String,
    purpose: String,
    newsletter: Boolean,
    query: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Enquiry = mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema)

export default Enquiry


