const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const healthOfficerRouter = require("./routes/helthOfficer");
const PregnantMotherRouter = require("./routes/pregnantMother");
const infantRouter = require("./routes/infant");
const clinicRouter = require("./routes/clinic");
const PORT = 5000;

app.use(express.json());
app.use(cors());
//app.use(log);
//app.use(morgan('dev'));
app.use("/api/healthOfficer",healthOfficerRouter);
app.use("/api/PregnantMother",PregnantMotherRouter);
app.use("/api/infant",infantRouter);
app.use("/api/clinic", clinicRouter);


mongoose
.connect("mongodb://localhost/PandBDB",{useNewUrlParser:true , useUnifiedTopology: true})
.then(()=>console.log("connetion is success"))
.catch(err=> console.log("connection error ", err));


app.listen(PORT, function(){
    console.log("Listening in port : " +PORT);
});