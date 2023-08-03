const passwordBox = document.querySelector(".password");
const lenght = 12;

const upperCase = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const lowerCase = "azertyuiopqsdfghjklmwxcvbn";
const number = "0123456789"
const specialCaracters = "&é'(-è_çà/;,@";

const allChars = upperCase+lowerCase+number+specialCaracters;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += specialCaracters[Math.floor(Math.random()* specialCaracters.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value = password
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}