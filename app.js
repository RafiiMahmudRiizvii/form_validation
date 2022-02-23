const passwordOne = document.querySelector("#password1");
const passwordTwo = document.querySelector("#password2");
const message = document.querySelector("#message");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const btn = document.querySelector("#btn");
const form = document.querySelector("#form");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const spcl = document.getElementById("special");
const number = document.getElementById("number");
const len = document.getElementById("length");

passwordOne.addEventListener("focusin", function (e) {
    e.preventDefault();
    message.style.display = "block"
})
passwordOne.addEventListener("focusout", function (e) {
    e.preventDefault();
    message.style.display = "none"
})
passwordOne.addEventListener("keyup", function (e) {

    var lowerCaseLetters = /[a-z]/;
    if (passwordOne.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/;
    if (passwordOne.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/;
    if (passwordOne.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    //Validate special chatercter
    var special = /[!@#$%^&*]/;
    if (passwordOne.value.match(special)) {
        spcl.classList.remove("invalid");
        spcl.classList.add("valid");
    } else {
        spcl.classList.remove("valid");
        spcl.classList.add("invalid");
    }
    // Validate length
    if (passwordOne.value.length >= 8) {

        len.className = "valid";
        len.classList.add("valid");
    } else {
        len.classList.remove("valid");
        len.classList.add("invalid");
    }



})
btn.addEventListener("click", (e) => {
    e.preventDefault();
    // User Name validation
    if (username.value.length < 5) {
        if (username.value.length <= 0) {
            username.parentNode.className = "form-control error"
            username.parentNode.querySelector("small").textContent = "please enter your user name"
        } else {

            username.parentNode.className = "form-control error"
            username.parentNode.querySelector("small").textContent = "minimum 5 charecters"
        }

    } else {
        username.parentNode.className = "form-control success"


    }
    ///////////////////////////

    // Email validation
    if (email.value.length <= 0) {
        email.parentNode.className = "form-control error"
        email.parentNode.querySelector("small").textContent = "please enter your email address"
    } else {

        if (email.value.match(/\S+@\S+\.com/)) {
            email.parentNode.className = "form-control success"

        } else {
            email.parentNode.className = "form-control error"
            email.parentNode.querySelector("small").textContent = "invalid email address"
        }
    }
    ///////////////////////////

    // Password One validation
    if (passwordOne.value.length <= 0) {
        passwordOne.parentNode.className = "form-control error"
        passwordOne.parentNode.querySelector("small").textContent = "please enter your password"
    } else {

        if (passwordOne.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)) {
            passwordOne.parentNode.className = "form-control success"

        } else {
            passwordOne.parentNode.className = "form-control error"
            passwordOne.parentNode.querySelector("small").textContent = "your password doesn't meet the requirement"
        }
    }

    ///////////////////////////

    // Password Two validation
    if(passwordTwo.value.length<=0){
        passwordTwo.parentNode.className = "form-control error"
        passwordTwo.parentNode.querySelector("small").textContent = "please enter your password again"
    }else{

        if (passwordOne.value === passwordTwo.value) {
            passwordTwo.parentNode.className = "form-control success"
    
        } else {
            passwordTwo.parentNode.className = "form-control error"
            passwordTwo.parentNode.querySelector("small").textContent = "your password doesn,t match"
    
           
        }
    }
    
    ///////////////////////////


})