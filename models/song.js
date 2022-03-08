import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 10,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const songSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    creator: { type: Schema.Types.ObjectId, ref: "Profile" },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Song = mongoose.model("Song", songSchema);

export { Song };
