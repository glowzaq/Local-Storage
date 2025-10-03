const signupForm = document.getElementById('signupform');
const signinForm = document.getElementById('signinform');
const showSigninLink = document.getElementById('showSignin');
const showSignupLink = document.getElementById('showSignup');
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let email = document.getElementById('upemail');
let pass = document.getElementById('uppassword');
let confirmPass = document.getElementById('confirmpass');

showSignupLink.onclick = () => {
    signinForm.style.display = 'none';
    signupForm.style.display = 'block';
}
showSigninLink.onclick = () => {
    signupForm.style.display = 'none';
    signinForm.style.display = 'block';
}
const signupBtn = document.getElementById('signupbtn');
let userDetails;

signupBtn.addEventListener('click', () => {
    if (!firstName.value || !lastName.value || !email.value || !pass.value || !confirmPass.value) {
        alert('Please fill all fields');
        return;
    }
    if (pass.value !== confirmPass.value) {
        alert('Passwords do not match');
        return;
    }
    userDetails = {
        fname: firstName.value,
        lname: lastName.value,
        useremail: email.value,
        password: pass.value
    };

    let storedArr = JSON.parse(localStorage.getItem('userDetails')) || [];
    let existingUser = storedArr.find((userDetails) => userDetails.useremail === email.value);
    if (existingUser) {
        alert('Email already exists, kindly register with another email address!');
        return;
    }
    storedArr.push(userDetails);
    localStorage.setItem('userDetails', JSON.stringify(storedArr));
    window.location.href = "./Class 3/index.html"
})

const signinBtn = document.getElementById('signinbtn');
signinBtn.addEventListener('click', () => {
    const loginEmail = document.getElementById('loginemail').value;
    const loginPassword = document.getElementById('loginpassword').value;
    
    let storedArr = JSON.parse(localStorage.getItem('userDetails')) || [];

    let userInfo = storedArr.find((userDetails) => userDetails.useremail === loginEmail && userDetails.password === loginPassword);
    
    if (userInfo) {
        window.location.href = "./Class 3/index.html"
        alert(`Login Successful! Welcome back, ${userDetails.fname}`)
    }else {
        alert('Invalid username or password')
    }
})



