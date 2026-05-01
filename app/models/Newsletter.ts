import mongoose from "mongoose"

const newsletterSchema = new mongoose.Schema({
    email: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Newsletter = mongoose.models.Newsletter || mongoose.model("Newsletter", newsletterSchema)

export default Newsletter

