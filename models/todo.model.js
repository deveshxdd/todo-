import mongoose from "mongoose";
const todoschema = mongoose.Schema({
    text : {
        type : "string",
        required: "true"
    }
})

export const todomodel = mongoose.model('todomodel',todoschema)

