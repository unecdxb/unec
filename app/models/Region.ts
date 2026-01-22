import mongoose from "mongoose";

const regionSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

export default mongoose.models.Region || mongoose.model("Region", regionSchema);