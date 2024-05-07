import mongoose from "mongoose";
const connectdb = async ()=>{
try {
    const connect = await mongoose.connect('mongodb://localhost:27017')
    console.log("db connected")
} catch (error) {
    console.log("db not connected something error occured")
}
}
export default connectdb