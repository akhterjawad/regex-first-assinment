
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const CNIC = document.querySelector('#CNIC');
const  age = document.querySelector('#age');
const password = document.querySelector('.password');
const  ConfirmPassword = document.querySelector('.Cpassword');

let usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
let emailRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[^\s@]{1,64}@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
let CNICRegex = /^42\d{11}$/;
let ageRegex = /^(1[89]|[2-5]\d|60)$/;

form.addEventListener('submit' , (event)=>{
    event.preventDefault()
    // console.log(username.value)
    // console.log(CNIC.value)
    // console.log(age.value)
    // console.log(email.value)
    // console.log(password.value)
    // console.log(ConfirmPassword.value)


if (usernameRegex.test(username.value)) {
    console.log("true username");
}
if (CNICRegex.test(CNIC.value)) {
    console.log("true CNIC");
}
if (ageRegex.test(age.value)) {
    console.log("true age");
}
if (emailRegex.test(email.value)) {
    console.log("true email");
}
if (passwordRegex.test(password.value)) {
    console.log('Password true');
}
if (password.value == ConfirmPassword.value) {
    console.log('ConfirmPassword true');
}

})







// let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let regex = /^(?=.*!)[a-zA-Z0-9!]{4,5}$/;
// let cnicRegex = /^42\d{11}$/;

// form.addEventListener('submit' , (event)=>{
//     event.preventDefault()
//     // console.log(username.value)
//     // console.log(email.value)
//     // console.log(password.value)

//     // console.log(emailRegex.test(email.value))
//     // console.log(regex.test(email.value))
//     // console.log(cnicRegex.test(email.value))

//     // if(cnicRegex.test(email.value)){
//     //     console.log(email.value);
//     // }
// })