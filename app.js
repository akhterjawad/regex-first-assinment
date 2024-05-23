
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('.password');
const  ConfirmPassword = document.querySelector('.password');

let usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
let emailRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[^\s@]{1,64}@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
let cnicRegex = /^42\d{5}-\d{7}-\d{1}$/;
let ageRegex = /^(1[89]|[2-5]\d|60)$/;








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