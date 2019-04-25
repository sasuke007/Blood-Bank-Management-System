const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const client=require('./database/database').client;
const profiles=require('./routes/profile');
const login=require('./routes/login');
const session = require('express-session');
const ejs=require('ejs');
const render=require('./routes/render');
const path=require('path');
app.use(session({
    secret:'my secret',
    resave:false,
    saveUninitialized:false
}));


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use('/profile',profiles);
app.use('/login',login);
//app.use('/render',render);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('static'));
app.use(express.static('css'));
app.use(express.static('javascript'));
app.use(express.static('images'));

app.post('/showdonor',(req,res)=>{
    console.log('request received');
    console.log(req.body);
    res.send('request received');
});

app.get('/home',(req,res)=>{
    console.log('request received');
    console.log(req.sessionID);
    res.render('E:/VS Code Projects/Node.js/Blood-Bank-Management-System/views/home.ejs');
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