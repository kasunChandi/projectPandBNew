const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pregnantMotherSchema = new Schema({
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
    HusbandName:{
        type : String,
        required : true
    },
    
});

const pregnantMother = mongoose.model("pregnant_mother",pregnantMotherSchema);

module.exports = pregnantMother;