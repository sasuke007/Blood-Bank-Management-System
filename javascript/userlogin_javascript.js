document.getElementById("signup_button").onclick=redirectit;
function redirectit(){
    window.location="signup.html";
}
let customer_login_btn = document.querySelector('#login_button');
customer_login_btn.addEventListener('click', () => {
    let ans = validate();
    if (ans) {
        let details = {
            "name": $('#user_name').val(),
            "password": $('#user_password').val()
        }
        let request=$.post('/login',details,process_response);
    } else {
        $('#home_login_msg').text(' Input fields cannot be left blank').css('color','red');
        setTimeout(() => {
            $('#home_login_msg').text('');
        }, 3000);
    }
        $('#cust_name').val('');
        $('#cust_password').val('');
});

function process_response(responseText,status){
    console.log('Request Recived');
    if (responseText=='not found'){
        alert('Record not found');
    }
    else{
        window.location=responseText;
    }
}

function validate(){
    return true;
}