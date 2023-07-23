const logine = document.querySelector("#login-email");
const loginp = document.querySelector("#login-password");
const logins = document.querySelector("#login-submit");

logins.addEventListener("click", function(event){
    event.preventDefault();
    
    const get = localStorage.getItem("user");
    const sorgu = JSON.parse(get);

    if (sorgu && sorgu[0].email === logine.value && sorgu[0].password === loginp.value) {
        console.log("Giriş yapıldı");
        document.querySelector("#err").textContent = " "
        document.querySelector("#err").textContent = `Succesfuly Loged-In. Welcome back ${sorgu[0].name} ${sorgu[0].surname}`
        document.querySelector("#err").style.color = "lime"
        const login = document.querySelector(".login-item")
        login.innerHTML = sorgu[0].name + " " + sorgu[0].surname 
    } else {
        document.querySelector("#err").textContent = "Password or Email is incorrect"
        document.querySelector("#err").style.color = "red"
        return;
    }
});
