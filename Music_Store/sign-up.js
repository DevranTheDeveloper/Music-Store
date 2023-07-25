const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordr = document.querySelector("#password-repeat");
const submit = document.querySelector("#sign-up");
const index = document.querySelector(".index");

submit.addEventListener("click", function(){
    const newUser = [
        {
            "ns": ns.value,
            "email": email.value,
            "password": password.value,
        }
    ];
    if (password.value === passwordr.value) {
        const newUserJSON = JSON.stringify(newUser)
        localStorage.setItem("user", newUserJSON)
        index.setAttribute("href", "index.html")
    } else {
        document.querySelector("#hata").textContent = "Passwords are not match"
        document.querySelector("#hata").style.color = "red"
        return;
    }
});

    const get = localStorage.getItem("user");
    const sorgu = JSON.parse(get);

    if (sorgu[0].name.includes(ns)) {
        const login = document.querySelector(".login-item")
        login.innerHTML = sorgu[0].ns
    }