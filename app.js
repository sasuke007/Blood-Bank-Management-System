const http=require('http');
const express=require('express');
const app=express();
const ejs=require('ejs');
const bodyParser=require('body-parser');
const client=require('./database/database').client;
const userPojo=require('./pojo/usersPojo');
const userDao=require('./dao/usersDao');
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


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(express.static('static'));
app.use(express.static('css'));
app.use(express.static('javascript'));
app.use(express.static('images'));

app.post('/',(request,response)=>{
    let userName=request.body.name;
    let password=request.body.password;
    let user=new userPojo(userName,password);
    dao.insertUser(user);
    //  if(ans){
    //     console.log('Recored successfully Inserted');
    //     response.send('success');
    // }
    // else{
    //     response.send('error');
    // }
});

app.get('/',(request,response)=>{
    let name=request.query.name;
    let password=request.query.password;
    console.log('Name :'+name+' '+'Password :'+password);
    response.send('Request received');
});

app.get('/courses',(request,response)=>{
    console.log('/courses request');
    response.send('coureses request received');
});

app.post('/profile',upload.single('fimage'),(req,res,next)=>{
    let info=req.body;
    let image=req.file;
    let newUser=new userPojo(info.ffirstname,info.fpassword,'./userImage/'+image.originalname,info.femail);
    let options={
        root:__dirname + '/static/'
    }
    userDao.insertUser(newUser,(result)=>{
        if (result==true){
            console.log('Record Inserted in Database');
            res.sendFile('home.html',options);
        }
        else{
            console.log('Record Cannot be inserted in database');
            res.status(500).sendFile('error.html',options);
        }   
    });
});

client.connect(err=>{
    if(err){
        console.log('Error in connection with database '+err.message);
    }
    else{
        app.listen(3000,()=>{
            console.log('Server Started Successfully');
        });
    }
});