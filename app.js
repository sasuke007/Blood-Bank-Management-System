const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const client=require('./database/database').client;
const profiles=require('./routes/profile');

app.use('/profile',profiles);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('static'));
app.use(express.static('css'));
app.use(express.static('javascript'));
app.use(express.static('images'));





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