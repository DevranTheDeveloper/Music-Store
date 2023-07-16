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
    } else {
        document.querySelector("#err").textContent = "Password or Email is incorrect"
        document.querySelector("#err").style.color = "red"
        return;
    }
});
