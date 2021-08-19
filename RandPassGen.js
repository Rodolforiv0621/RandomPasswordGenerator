//Rodolfo Rivera

let passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbersVar = "0123456789";
const passwordSymbols = "!@#$%^&*";
let randomNumber;
let generatedPassword = "";
let color;

//Uses copy button to copy password to clipboard
function copyPassword(){
    let copyText = document.getElementById("generatedPassword");
    copyText.select();
    document.execCommand("copy");
}
let selectNum = document.getElementById("passwordLength");
let sliderColor = document.getElementById("strengthBar");
let check1 = document.getElementById("upperCase");
check1.addEventListener("keydown", checkBoxes);
let check2 = document.getElementById("lowerCase");
check2.addEventListener("keydown", checkBoxes);
let check3 = document.getElementById("numbers");
check3.addEventListener("keydown", checkBoxes);
let check4 = document.getElementById("Chars");
check4.addEventListener("keydown", checkBoxes);

//Lets user use keyboard key "Enter" to check and uncheck checkboxes
function checkBoxes(e){
    if(e.keyCode === 13){
        if(this.checked === true){
            this.checked = false;
        }else if(this.checked === false){
            this.checked = true;
        }
    }
}

function securePassword(){
    let textBox = document.getElementById("generatedPassword");
    updateCheckboxes();
    checkPasswordLength();
    for(let i = 0;i<selectNum.value;i++) {
        if(checkEmptyBoxes() === false){
            break;
        }
        randomNumber = Math.floor(Math.random() * passwordString.length);
        generatedPassword += passwordString[randomNumber];
    }
    textBox.value = generatedPassword;
    strengthBar();
    generatedPassword = "";
}

function updateCheckboxes(){
    if(check1.checked === true && passwordString.includes(uppercaseLetters) === false){
        passwordString += uppercaseLetters;
    }else if (check1.checked === false && passwordString.includes(uppercaseLetters) === true){
        passwordString = passwordString.replace(uppercaseLetters, "");
    }

    if(check2.checked === true && passwordString.includes(lowercaseLetters) === false){
        passwordString += lowercaseLetters;
    }else if (check2.checked === false && passwordString.includes(lowercaseLetters) === true){
        passwordString = passwordString.replace(lowercaseLetters, "");
    }

    if(check3.checked === true && passwordString.includes(numbersVar) === false){
        passwordString += numbersVar;
    }else if (check3.checked === false && passwordString.includes(numbersVar) === true){
        passwordString = passwordString.replace(numbersVar, "");
    }

    if(check4.checked === true && passwordString.includes(passwordSymbols) === false){
        passwordString += passwordSymbols;
    }else if (check4.checked === false && passwordString.includes(passwordSymbols) === true){
        passwordString = passwordString.replace(passwordSymbols, "");
    }
}

function checkPasswordLength(){
    if(!selectNum.value){
        selectNum.focus();
    }
}
function checkEmptyBoxes(){
    if(check1.checked === false && check2.checked === false && check3.checked === false && check4.checked === false){
        alert("Must check at least one box");
        check1.focus();
        return false;
    }
}
function strengthBar(){
    if(selectNum.value === ""){
        color = "linear-gradient(to right, green 0%, beige 0%)";
        sliderColor.style.background = color;
    }else if(selectNum.value<=10){
        color = "linear-gradient(to right, #eb5634 20%, beige 20%)"
        sliderColor.style.background = color;
    }else if(selectNum.value <=16){
        color = "linear-gradient(to right, #ebd634 40%, beige 40%)"
        sliderColor.style.background = color;
    }else if(selectNum.value <=24){
        color = "linear-gradient(to right, #c0eb34 60%, beige 60%)"
        sliderColor.style.background = color;
    }else if(selectNum.value <=30){
        color = "linear-gradient(to right, green 100%, beige 0%)"
        sliderColor.style.background = color;
    }
}
