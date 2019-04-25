
let searchb = document.querySelector('#search');
searchb.addEventListener('click', () => {
    let ans = validate();
    if (ans) {
        let data = {
            "state": $('#home_state_list').val(),
            "city": $('#home_city_list').val(),
            "blood": $('#home_blood_list').val()
        }
        let request=$.post('/showdonor',data,process_response);
        //request.error(handle_error);
    } else {
        $('#home_login_msg').text(' Input fields cannot be left blank').css('color','red');
        setTimeout(() => {
            $('#home_login_msg').text('');
        }, 3000);
    }
        $('#cust_name').val('');
        $('#cust_password').val('');
});

function handle_error(){
    alert('Error');
}

function process_response(responseText,status){
    alert('response text :'+responseText);
}

function validate() {
    if ($('#home_state_list').val() === '' || $('#home_city_list').val() === ''|| $('home_blood_list')==='')
        return false;
    else
        return true;
}

function redirect() {
    location.replace("login.html")
}
function MadhyaPradesh_cities(){
    var a = document.createElement("option");
    a.text = "Indore";
    document.getElementById("home_city_list").options.add(a,0);
    var b = document.createElement("option");
    b.text = "Bhopal";
    document.getElementById("home_city_list").options.add(b,0);
    var c = document.createElement("option");
    c.text = "Jabalpur";
    document.getElementById("home_city_list").options.add(c,0);
    var d = document.createElement("option");
    d.text = "Gwalior";
    document.getElementById("home_city_list").options.add(d,0);
    var e = document.createElement("option");
    e.text = "Dewas";
    document.getElementById("home_city_list").options.add(e,0);
    
}

function Maharashtra_cities(){
    var a = document.createElement("option");
    a.text = "Mumbai";
    document.getElementById("home_city_list").options.add(a,0);
    var b = document.createElement("option");
    b.text = "Pune";
    document.getElementById("home_city_list").options.add(b,0);
    var c = document.createElement("option");
    c.text = "Nagpur";
    document.getElementById("home_city_list").options.add(c,0);
    var d = document.createElement("option");
    d.text = "Nashik";
    document.getElementById("home_city_list").options.add(d,0);
    var e = document.createElement("option");
    e.text = "Amravati";
    document.getElementById("home_city_list").options.add(e,0);
}
function Kerela_cities(){
    var a = document.createElement("option");
    a.text = "Kochi";
    document.getElementById("home_city_list").options.add(a,0);
    var b = document.createElement("option");
    b.text = "Kolam";
    document.getElementById("home_city_list").options.add(b,0);
    var c = document.createElement("option");
    c.text = "Kannur";
    document.getElementById("home_city_list").options.add(c,0);
    var d = document.createElement("option");
    d.text = "Aluva";
    document.getElementById("home_city_list").options.add(d,0);
    var e = document.createElement("option");
    e.text = "Munnar";
    document.getElementById("home_city_list").options.add(e,0);
}
function Andhra_cities(){
    var a = document.createElement("option");
    a.text = "Tirupati";
    document.getElementById("home_city_list").options.add(a,0);
    var b = document.createElement("option");
    b.text = "Guntur";
    document.getElementById("home_city_list").options.add(b,0);
    var c = document.createElement("option");
    c.text = "Vijayawada";
    document.getElementById("home_city_list").options.add(c,0);
    var d = document.createElement("option");
    d.text = "Visakhapatnam";
    document.getElementById("home_city_list").options.add(d,0);
    var e = document.createElement("option");
    e.text = "Kakinada";
    document.getElementById("home_city_list").options.add(e,0);
}
function UttarPradesh_cities(){
    var a = document.createElement("option");
    a.text = "Lucknow";
    document.getElementById("home_city_list").options.add(a,0);
    var b = document.createElement("option");
    b.text = "Mirzapur";
    document.getElementById("home_city_list").options.add(b,0);
    var c = document.createElement("option");
    c.text = "Kanpur";
    document.getElementById("home_city_list").options.add(c,0);
    var d = document.createElement("option");
    d.text = "Noida";
    document.getElementById("home_city_list").options.add(d,0);
    var e = document.createElement("option");
    e.text = "Jhansi";
    document.getElementById("home_city_list").options.add(e,0);
}
function TamilNadu_cities(){
    var a = document.createElement("option");
    a.text = "Chennai";
    document.getElementById("home_city_list").options.add(a,0);
    var b = document.createElement("option");
    b.text = "Coimbatore";
    document.getElementById("home_city_list").options.add(b,0);
    var c = document.createElement("option");
    c.text = "Salem";
    document.getElementById("home_city_list").options.add(c,0);
    var d = document.createElement("option");
    d.text = "Tirrupur";
    document.getElementById("home_city_list").options.add(d,0);
    var e = document.createElement("option");
    e.text = "Ooty";
    document.getElementById("home_city_list").options.add(e,0);
}

document.getElementById("home_state_list").onchange = function () {
    var list = document.getElementById("home_city_list");
    var length = list.options.length;
    while (length-- > 0) {
        list.remove(length);
    }
    var x = document.getElementById("home_state_list");
    var i = x.selectedIndex;
    var z = x.options[i].text;
    if (z == "Madhya Pradesh") {
        MadhyaPradesh_cities();
    }
    if (z == "Andhra") {
        Andhra_cities();
    }
    if (z == "Kerela") {
        Kerela_cities();
    }
    if (z == "Tamil Nadu") {
        TamilNadu_cities();
    }
    if (z == "Uttar Pradesh") {
        UttarPradesh_cities();
    }
    if (z == "Maharashtra") {
        Maharashtra_cities();
    }
}
