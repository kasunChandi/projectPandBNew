const router = require("express").Router();
let pregnantMother = require("../models/pregnantMother");

router.route("/add").post((req,res)=>{

    const {Name,TelNo,Email,Password,Birthday,Address,PHMArea,HospitalWard,HusbandName} = req.body;

    const newpregnantMother = new pregnantMother({
        Name,
        TelNo,
        Email,
        Password,
        Birthday,
        Address,
        PHMArea,
        HospitalWard,
        HusbandName
    });

    newpregnantMother.save().then(()=>{
        res.json("New Pregnant Mother Added");
    }).catch((err)=>{
        console.log(err);
    });


});

router.route("/").get((req,res)=>{
    pregnantMother.find().then((pregnantMothers)=>{
        res.json(pregnantMothers);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {Name,TelNo,Email,Password,Birthday,Address,PHMArea,HospitalWard,HusbandName} = req.body;

    const updatepregnantMother = {
        Name,
        TelNo,
        Email,
        Password,
        Birthday,
        Address,
        PHMArea,
        HospitalWard,
        HusbandName
    };

    const update = await pregnantMother.findByIdAndUpdate(userId, updatepregnantMother).then(()=>{
        res.status(200).send({status: "Pregnant Mother Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error in Updating Data", error:err.message});
    });

});

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await pregnantMother.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Pregnant Mother Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in Delete Pregnant Mother", error:err.message});
    });

});

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    const user = await pregnantMother.findById(userId).then(()=>{
        res.status(200).send({status: "Pregnant Mother Fetched"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in Get Pregnant Mother", error:err.message});
    });

});


module.exports = router;