let si = document.getElementById("si")
let lo = document.getElementById("logOut")
let idSi = document.getElementById("idSi")
let idSu = document.getElementById("idSu")
let rememberMe = document.getElementById("rememberMe")
let autofil = document.getElementById("autofil")
let signinContainer = document.getElementById("signin-container")
let signupContainer = document.getElementById("signup-container")
let registerBtn = document.getElementById("register")
let formSignUp = document.getElementById("form-signup")
let signUpName = document.getElementById("signUpName")
let signUpSurname = document.getElementById("signUpSurname")
let signUpUsername = document.getElementById("signUpUsername")
let signUpEmail = document.getElementById("signUpEmail")
let signUpPassword = document.getElementById("signUpPassword")
let signUpRePassword = document.getElementById("signUpRePassword")
let userLogin = document.getElementById("userLogin")
let userPassword = document.getElementById("userPassword")
let loginBtn = document.getElementById("login")
autofil.onclick = function () {
    this.isChecked = true;
    if (this.isChecked == true) {
        let dbArr = JSON.parse(localStorage.getItem("dbUser"));
        let existUsername = dbArr.find(u => u.Username == userLogin.value);
        userLogin.value = existUsername.Username
        userPassword.value = existUsername.Password
    }
}
si.onclick = function () {
    this.classList.add("d-none")
    signinContainer.classList.remove("d-none")
}
idSi.onclick = function () {
    signinContainer.classList.add("d-none")
    signupContainer.classList.remove("d-none")
}
idSu.onclick = function () {
    signupContainer.classList.add("d-none")
    signinContainer.classList.remove("d-none")
}
registerBtn.addEventListener("click", function () {

    if (localStorage.getItem("user") == null) {
        localStorage.setItem("user", JSON.stringify([]))
    }
    let arr = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("dbUser") == null) {
        localStorage.setItem("dbUser", JSON.stringify([]))
    }
    let dbArr = JSON.parse(localStorage.getItem("dbUser"));

    if (signUpEmail.value != "") {
        console.log(signUpPassword.value);
        console.log(signUpRePassword.value);

        if (signUpPassword.value != signUpRePassword.value) {
            alert("password is not same")
        }
        else {
            signupContainer.classList.add("d-none")
            signinContainer.classList.remove("d-none")
            arr.push({
                Name: signUpName.value,
                Surname: signUpSurname.value,
                Username: signUpUsername.value,
                Email: signUpEmail.value,
                Password: signUpPassword.value
            })
            localStorage.setItem("user", JSON.stringify(arr));
            dbArr.push({
                Name: signUpName.value,
                Surname: signUpSurname.value,
                Username: signUpUsername.value,
                Email: signUpEmail.value,
                Password: signUpPassword.value
            })
            localStorage.setItem("dbUser", JSON.stringify(arr));
        }
    }
})
loginBtn.addEventListener("click", function () {
    let dbArr = JSON.parse(localStorage.getItem("dbUser"));
    let existUsername = dbArr.find(u => u.Username == userLogin.value);
    let existUseremail = dbArr.find(u => u.Email == userLogin.value)
    if (userLogin.value != "") {
        if (existUsername != undefined || existUseremail != undefined) {
            if (userLogin.value == existUsername.Username && userPassword.value == existUsername.Password) {
                signupContainer.classList.add("d-none")
                signinContainer.classList.add("d-none")
                lo.classList.remove("d-none")
            }
            else {
                alert("Password is invalid!")
            };
        } else {
            alert("Username is invalid")
        }
    }
    else {

        alert("Please Enter Username")
    }
})
lo.onclick = function () {
    this.classList.add("d-none")
    signinContainer.classList.remove("d-none")
    userLogin.value = ""
    userPassword.value = ""
}

