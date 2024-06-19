import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    project: {
        type: String,
    },
    qty: {
        type: String
    },
    price: {
        type: String
    },
    userId: {
        type: String
    }
}, { timestamps: true })

export const Projects = mongoose.model("Projects", ProjectSchema)