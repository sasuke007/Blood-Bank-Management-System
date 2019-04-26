function Donor(firstName,lastName,email,dob,contactNo,profilePicture,state,city,bloodGroup,password){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.dob=dob;
    this.contactNo=contactNo;
    this.profilePicture=profilePicture;
    this.state=state;
    this.city=city;
    this.bloodGroup=bloodGroup;
    this.password=password;
}

module.exports=Donor;