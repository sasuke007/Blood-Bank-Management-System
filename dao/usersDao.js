const client=require('../database/database').client;

function insertUser(user,callback){
    console.log(user);
    client.db('BloodBank').collection('users').insertOne({
        name:user.name,
        password:user.password,
        imageUrl:user.imageUrl, 
        email:user.email 
    },(err,result)=>{
        if(err){
            console.log('Error in inserting object '+err.message);
            callback(false);
        }
        else{
            console.log(result);
            callback(true);
        }
    });
}

module.exports.insertUser=insertUser;
