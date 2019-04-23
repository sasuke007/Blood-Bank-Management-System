const express=require('express');
const router=express.Router();
const ejs=require('ejs');
const bodyParser=require('body-parser');
const path=require('path');
const UsersInfo=require('../pojo/usersInfoPojo');
const findUser=require('../dao/usersDao').findUser;
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended:true;
}));

router.post('/',(req,res)=>{
    console.log(req.body);
    let user=req.body;
    let userDetails=new UsersInfo(user.name,user.password);
    findUser(userDetails,(result)=>{
        if (result==true){
            console.log('Record Found');
            res.render('../views/home.ejs');
        }
        else{
            console.log('Record not found');
            res.status(500).sendFile('error.html',options);
        }
    });
});
