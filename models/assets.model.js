import mongoose from "mongoose";

const AssetSchema = new mongoose.Schema({
    category: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required:true
    },

    description: {
        type: String,
        required:true
    }
})

const Asset = mongoose.model('assest', AssetSchema);

export default Asset;