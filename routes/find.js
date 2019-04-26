const express=require('express');
const router=express.Router();
const findDonor=require('../dao/donorsDao').findDonor;
const donorInfoPojo=require('../pojo/donorsInfo');
router.post('/',(req,res)=>{
    let info=req.body;
    console.log(info);
    let donorInfoPojo=new donorInfoPojo(info.state,info.city,info.blood);
    findDonor(donorInfoPojo,(result)=>{
        if (result){
            console.log('Donor Found');
        }
        else{
            console.log('Donor not found');
            res.send('Donor not found');
        }
    });
});


module.exports=router;