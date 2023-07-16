const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordr = document.querySelector("#password-repeat");
const submit = document.querySelector("#sign-up");

submit.addEventListener("click", function(){
    const newUser = [
        {
            "name": name.value,
            "surname": surname.value,
            "email": email.value,
            "password": password.value,
        }
    ];
    if (password.value === passwordr.value) {
        const newUserJSON = JSON.stringify(newUser)
        localStorage.setItem("user", newUserJSON)
    } else {
        document.querySelector("#hata").textContent = "Passwords are not match"
        document.querySelector("#hata").style.color = "red"
        return;
    }
});

