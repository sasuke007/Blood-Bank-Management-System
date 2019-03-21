function redirect(){
    location.replace("login.html")
}
function MadhyaPradesh_cities(){
    var c = document.createElement("option");
    c.text = "indore";
    document.getElementById("home_city_list").options.add(c,0);
}

function Kashmir_cities(){
    var c = document.createElement("option");
    c.text = "indore";
    document.getElementById("home_city_list").options.add(c,0);
}
function Kerela_cities(){
    var c = document.createElement("option");
    c.text = "indore";
    document.getElementById("home_city_list").options.add(c,0);
}
function Andhra_cities(){
    var c = document.createElement("option");
    c.text = "indore";
    document.getElementById("home_city_list").options.add(c,0);
}
function UttarPradesh_cities(){
    var c = document.createElement("option");
    c.text = "indore";
    document.getElementById("home_city_list").options.add(c,0);
}
function TamilNadu_cities(){
    var c = document.createElement("option");
    c.text = "indore";
    document.getElementById("home_city_list").options.add(c,0);
}
document.getElementById("home_state_list").onchange=function(){
    var list=document.getElementById("home_city_list");
    var length=list.options.length;
    while(length-->0){
        list.remove(length);
    }
    var x = document.getElementById("home_state_list");
    var i = x.selectedIndex;
    var z =x.options[i].text;
    if(z=="Madhya Pradesh"){
        MadhyaPradesh_cities();
    }
    if(z=="Andhra"){
        Andhra_cities();
    }
    if(z=="Kerela"){
        Kerela_cities();
    }
    if(z=="Tamil Nadu"){
        TamilNadu_cities();
    }
    if(z=="Uttar Pradesh"){
        UttarPradesh_cities();
    }
    if(z=="kashmir"){
        Kashmir_cities();
    }
}