const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended:true
}));

router.use(express.static('../static'));
router.use(express.static('../css'));
router.use(express.static('../javascript'));
router.use(express.static('../images'));
router.get('/home',(req,res)=>{
    console.log(req.sessionID);
    res.render('E:/VS Code Projects/Node.js/Blood-Bank-Management-System/views/home.ejs');
});

module.exports=router;