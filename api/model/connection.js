import mongoose from "mongoose";
import options from '../config.js'

const url = `mongodb+srv://${options.user}:${options.password}@${options.cluster}.vqipidq.mongodb.net/${options.dataBase}?retryWrites=true&w=majority`

export default async function(){
  try {
    await mongoose.connect(url)
    console.log('Mongo is connected!')
  } catch (error) {
    console.error(error.message)
  }
}
