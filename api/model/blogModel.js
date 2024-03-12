import { Schema, model } from "mongoose";

const Blog = new Schema({
  userId: String,
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  title: String,
  body: String,
  likes: Number,
  tag: String
})

export default model('Blog', Blog)