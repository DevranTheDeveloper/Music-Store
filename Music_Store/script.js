const userData = localStorage.getItem("user");
const userInfo = JSON.parse(userData);

const loginItem = document.querySelector(".login-item");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");
const loginSubmit = document.querySelector("#login-submit");
const errMessage = document.querySelector("#err");
if (userInfo) {
    loginItem.innerHTML = userInfo[0].ns;
    loginItem.href = "user.html"
} else {
    loginItem.href = "sign-in.html"
}

loginSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    
    if (userInfo && userInfo[0].email === loginEmail.value && userInfo[0].password === loginPassword.value) {
        console.log("Giriş yapıldı");
        errMessage.textContent = " ";
        errMessage.textContent = `Successfully Logged-In. Welcome back ${userInfo[0].ns}`;
        errMessage.style.color = "lime";
        setTimeout(() => {
            errMessage.textContent = " ";
        }, 5000);

    } else {
        errMessage.textContent = "Password or Email is incorrect";
        errMessage.style.color = "red";
        return;
    }
});
