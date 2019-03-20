const http=require('http');
const express=require('express');
const app=express();
const logger=require('./logger.js');
const ejs=require('ejs');
app.use(express.json());

app.use(express.static('static'));

app.use(logger.log);

app.use((request,response,next)=>{
    console.log("Authenticating..");
    next();
});

app.get('/',(request,response)=>{
    console.log('/ request ');
    response.send(request.query.name + " "+request.query.password);
});

app.get('/courses',(request,response)=>{
    console.log('/courses request');
    response.send('coureses request received');
});

app.listen(3000,()=>{
    console.log('Server started Successfully');
});