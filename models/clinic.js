const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clinicSchema = new Schema({
    
    Name:{
        type : String,
        required : true
    },
    Type:{
        type : String,
        required : true
    },
    Location:{
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
    }
    
});

const clinic = mongoose.model("clinic",clinicSchema);

module.exports = clinic;