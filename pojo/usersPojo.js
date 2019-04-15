function Users(name,password,imageUrl="images\defaultUserImg.png",email="git@github.com",){
        this.name=name;
        this.password=password;
        this.imageUrl=imageUrl;
        this.email=email;
}

module.exports=Users;