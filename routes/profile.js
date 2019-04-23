const express=require('express');
const router=express.Router();
const ejs=require('ejs');
const bodyParser=require('body-parser');
const client=require('../database/database').client;
const userPojo=require('../pojo/usersPojo');
const userDao=require('../dao/usersDao');
const multer=require('multer');
const path=require('path');
const storage=multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './userImage/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
const upload=multer({storage:storage});
//router.set('views',path.join(__dirname,'views'));
//router.set('view engine','ejs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended:true
}));
router.use(express.static('../static'));
router.use(express.static('../css'));
router.use(express.static('../javascript'));
router.use(express.static('../images'));


router.post('/',upload.single('fimage'),(req,res)=>{
    let info=req.body;
    let image=req.file;
    let newUser=new userPojo(info.ffirstname,info.fpassword,'./userImage/'+image.originalname,info.femail);
    let options={
        root:'E:/VS Code Projects/Node.js/Blood-Bank-Management-System/' + '/static/'
    }
    userDao.insertUser(newUser,(result)=>{
        if (result==true){
            console.log('Record Inserted in Database');
            res.sendFile('userlogin.html',options);
        }
        else{
            console.log('Record Cannot be inserted in database');
            res.status(500).sendFile('error.html',options);
        }   
    });
});

module.exports=router;