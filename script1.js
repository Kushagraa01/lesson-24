function validate(){
    const user=document.getElementById("txtuser").value;
    const password = document.getElementById("txtpassword").value;
    var message="";
    let msgbox=document.getElementById("msg");
    if(user==''){
        message="Please enter username";
        msgbox.style.color='red';
    }
    else if (password === '') {
        message = "Please enter password";
        msgbox.style.color = 'red';
    }
    else {
        message = "Sign in successful";
        msgbox.style.color = 'green';
    }
    msgbox.innerText = message;
}