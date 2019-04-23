const express=require('express');
const router=express.Router();
const ejs=require('ejs');
const bodyParser=require('body-parser');
const path=require('path');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

router.post('/',(req,res)=>{
    console.log(req.body);
    
});
