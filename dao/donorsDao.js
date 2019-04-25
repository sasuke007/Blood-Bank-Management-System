const client=require('../database/database').client;

function findDonor(donorInfo,callback){
    client.db('BloodBank').collection('donors').findOne({
        name:donorInfo.state,
        city:donorInfo.city,
        bloodGroup:donorInfo.blood
    },(err,result)=>{
        if(err){
            console.log('Error in finding Donor '+err.message);
            callback(false);
        }
        else{
            if (result){
                callback(true);
            }
            else{
                callback(false);
            }
        }
    });
};

function insertUser(donor,callback){
    console.log(donor);
    client.db('BloodBank').collection('donors').insertOne({
        firstName:donor.firstName,
        lastName:donor.lastName,
        email:donor.email,
        dob:donor.dob,
        contactNo:donor.contactNo,
        profilePicture:donor.profilePicture,
        state:donor.state,
        city:donor.city,
        bloodGroup:donor.bloodGroup,
        password:donor.password
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

module.exports.findDonor=findDonor;
module.exports.insertDonor=insertDonor;