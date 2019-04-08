function Users(id,name,imageUrl="images\defaultUserImg.png",email="git@github.com",){
    this.id=id;
    this.name=name;
    this.imageUrl=imageUrl;
    this.email=email;
}

module.exports=Users;