import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    clientname: {
        type: String,
    },
    clientadrs1: {
        type: String
    },
    clientadrs2: {
        type: String
    },
    clientphone: {
        type: String
    }
}, { timestamps: true })

export const Clients = mongoose.model("Clients", clientSchema)