const http=require('http');
const express=require('express');
const app=express();
const ejs=require('ejs');
const bodyParser=require('body-parser');
const client=require('./database');


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(express.static('static'));
app.use(express.static('css'));
app.use(express.static('javascript'));
app.use(express.static('images'));




app.post('/',(request,response)=>{
    
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