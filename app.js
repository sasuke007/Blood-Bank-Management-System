const http=require('http');
const express=require('express');
const app=express();
const ejs=require('ejs');
const bodyParser=require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('static'));
app.use(express.static('javascript'));
app.use(express.static('images'));


console.log(__dirname);
app.post('/',(request,response)=>{
    console.log(request.body.name);
    response.send('Received');
});

app.get('/',(request,response)=>{
    let name=request.query.name;
    let password=request.query.password;
    console.log('Name :'+name+' '+'Password :'+password);
    //console.log(request);
    response.send('Request received');
});

app.get('/courses',(request,response)=>{
    console.log('/courses request');
    response.send('coureses request received');
});

app.listen(3000,()=>{
    console.log('Server started Successfully');
});