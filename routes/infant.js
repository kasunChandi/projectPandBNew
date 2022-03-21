const router = require("express").Router();
let infant = require("../models/infant");

router.route("/add").post((req,res)=>{

    const {Name,TelNo,Email,Password,Birthday,BirthTime,
        Gender,Address,PHMArea,HospitalWard,MotherName,FatherName} = req.body;

    const newinfant = new infant({
        Name,
        TelNo,
        Email,
        Password,
        Birthday,
        BirthTime,
        Gender,
        Address,
        PHMArea,
        HospitalWard,
        MotherName,
        FatherName
    });

    newinfant.save().then(()=>{
        res.json("New Infant Added");
    }).catch((err)=>{
        console.log(err);
    });


});

router.route("/").get((req,res)=>{
    infant.find().then((infants)=>{
        res.json(infants);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {Name,TelNo,Email,Password,Birthday,BirthTime,
        Gender,Address,PHMArea,HospitalWard,MotherName,FatherName} = req.body;

    const updateinfant = {
        Name,
        TelNo,
        Email,
        Password,
        Birthday,
        BirthTime,
        Gender,
        Address,
        PHMArea,
        HospitalWard,
        MotherName,
        FatherName
    };

    const update = await infant.findByIdAndUpdate(userId, updateinfant).then(()=>{
        res.status(200).send({status: "Infant Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error in Updating Data", error:err.message});
    });

});

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await infant.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Infant Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in Delete Infant", error:err.message});
    });

});

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    const user = await infant.findById(userId).then(()=>{
        res.status(200).send({status: "Infant Fetched"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in Get Infant", error:err.message});
    });

});


module.exports = router;