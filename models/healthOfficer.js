const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const healthOfficerSchema = new Schema({
    UserID:{
        type : String,
        required : true
    },
    Name:{
        type : String,
        required : true
    },
    TelNo:{
        type : Number,
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
    Designation:{
        type : String,
        required : true
    },
    WorkPlace:{
        type : String,
        required : true
    }
});

const healthOfficer = mongoose.model("health_officer",healthOfficerSchema);

module.exports = healthOfficer;