import mongoose from "mongoose"

const jobEnquirySchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    linkedIn: String,
    coverLetter: String,
    expectedSalary: String,
    termsAccepted: Boolean,
    position: String,
    experience: String,
    availability: String,
    resume: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const JobEnquiry = mongoose.models.JobEnquiry || mongoose.model("JobEnquiry", jobEnquirySchema)

export default JobEnquiry


