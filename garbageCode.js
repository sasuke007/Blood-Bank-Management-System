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
