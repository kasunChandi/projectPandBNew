const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const infantSchema = new Schema({
    Name:{
        type : String,
        required : true
    },
    TelNo:{
        type : String,
        required : true
    },
    Email:{
        type : String,
        required : true
    },
    Password:{
        type : String,
        required : true
    },
    Birthday:{
        type : Date,
        required : true
    },
    BirthTime:{
        type : Number,
        required : true
    },
    Gender:{
        type : String,
        required : true
    },
    Address:{
        type : String,
        required : true
    },
    PHMArea:{
        type : String,
        required : true
    },
    HospitalWard:{
        type : String,
        required : true
    },
    MotherName:{
        type : String,
        required : true
    },
    FatherName:{
        type : String,
        required : true
    }

});

const infant = mongoose.model("infant",infantSchema);

module.exports = infant;