const express=require('express');
const router=express.Router();
const ejs=require('ejs');
const bodyParser=require('body-parser');
const path=require('path');
const UsersInfo=require('../pojo/usersInfoPojo');
const findUser=require('../dao/usersDao').findUser;
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended:true
}));

router.post('/',(req,res)=>{
    console.log(req.body);
    console.log(req.session);
    let user=req.body;
    let userDetails=new UsersInfo(user.name,user.password);
    findUser(userDetails,(result)=>{
        if (result==true){
            console.log('Record Found');
            req.session.userName=user.name;
            console.log(req.sessionID);
            res.send('/home');
        }
        else{
            console.log('Record not found');
            res.send('not found');
        }
    });
});

module.exports=router;