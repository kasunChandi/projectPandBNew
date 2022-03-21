const router = require("express").Router();
let healthOfficer = require("../models/healthOfficer");

router.route("/add").post((req,res)=>{

    const UserID = req.body.UserID;
    const Name = req.body.Name;
    const TelNo = req.body.TelNo;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Designation = req.body.Designation;
    const WorkPlace = req.body.WorkPlace;

    const newHealthOfficer = new healthOfficer({
        UserID,
        Name,
        TelNo,
        Email,
        Password,
        Designation,
        WorkPlace
    });

    newHealthOfficer.save().then(()=>{
        res.json("New Health Officer Added");
    }).catch((err)=>{
        console.log(err);
    });


});

router.route("/").get((req,res)=>{
    healthOfficer.find().then((healthOfficers)=>{
        res.json(healthOfficers);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {UserID,Name,TelNo,Email,Password,Designation,WorkPlace} = req.body;

    const updateHealthOfficer = {
        UserID,
        Name,
        TelNo,
        Email,
        Password,
        Designation,
        WorkPlace
    };

    const update = await healthOfficer.findByIdAndUpdate(userId, updateHealthOfficer).then(()=>{
        res.status(200).send({status: "Health Officer Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error in Updating Data", error:err.message});
    });

});

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await healthOfficer.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Health Officer Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in Delete Health Officer", error:err.message});
    });

});

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    const user = await healthOfficer.findById(userId).then(()=>{
        res.status(200).send({status: "Health Officer Fetched"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in Get Health Officer", error:err.message});
    });

});


module.exports = router;