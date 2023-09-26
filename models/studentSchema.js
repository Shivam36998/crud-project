import mongoose, { Schema } from "mongoose";

const studentSchema = new mongoose.Schema({
    name : {type: String, required: true, trim : true},
    age : {type: Number, required: true, min: 10, max: 40},
    fees : {type : mongoose.Decimal128, required: true, validate : (v) => {v >= 4999.9}},
})

const studentModel = mongoose.model("student", studentSchema);

export default studentModel;
