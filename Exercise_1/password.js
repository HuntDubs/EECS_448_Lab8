function validate(){
    let passwordOne = document.getElementById("password1").value;
    let passwordTwo = document.getElementById("password2").value;
    console.log(passwordOne.length);
    if (passwordOne.length < 8 || passwordTwo.length < 8){
        alert("Failed! Password not of correct length (8)");
    } else if (passwordOne == passwordTwo){
        alert("Passed!");
    }else {
        alert("Failed! These passwords are not the same");
    }
}