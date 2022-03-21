const router = require("express").Router();
let clinic = require("../models/clinic");

router.route("/add").post((req,res)=>{

    const {Name,Type,Location,TelNo,Email,Password} = req.body;

    const newclinic = new clinic({
        Name,
        Type,
        Location,
        TelNo,
        Email,
        Password
    });

    newclinic.save().then(()=>{
        res.json("New Clinic Added");
    }).catch((err)=>{
        console.log(err);
    });


});

router.route("/").get((req,res)=>{
    clinic.find().then((clinics)=>{
        res.json(clinics);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {Name,Type,Location,TelNo,Email,Password} = req.body;

    const updateclinic = {
        Name,
        Type,
        Location,
        TelNo,
        Email,
        Password
    };

    const update = await clinic.findByIdAndUpdate(userId, updateclinic).then(()=>{
        res.status(200).send({status: "Clinic Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error in Updating Data", error:err.message});
    });

});

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await clinic.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Clinic Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in Delete Clinic", error:err.message});
    });

});

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    const user = await clinic.findById(userId).then(()=>{
        res.status(200).send({status: "Clinic Fetched"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in Get Clinic", error:err.message});
    });

});


module.exports = router;