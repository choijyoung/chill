import mongoose from "mongoose";

const Schema = mongoose.Schema

const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    creator: { type: Schema.Types.ObjectId, ref: 
    'Songs'},
})

const Song = mongoose.model("Song", songSchema)

export {
    Song
}