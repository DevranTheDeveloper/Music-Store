const user = localStorage.getItem("user");
const userInfo = JSON.parse(user);
const ns = document.querySelector(".ns");
const mail = document.querySelector(".mail");
const pass = document.querySelector(".pass");
const address = document.querySelector(".address");
const goster = document.querySelector(".goster")

ns.innerHTML = userInfo[0].name + " " + userInfo[0].surname;
mail.value = userInfo[0].email
pass.value = userInfo[0].password
address.value = userInfo[0].address

let i = 0 
goster.addEventListener("click", function(){
    i++
    if (i%2 == 0) {
        pass.type = "password"
        const img = `<i class="fa-solid fa-eye fa-xl" style="color: #e1ffeb83;"></i>`
        goster.innerHTML = img;
    } else if (i%2 == 1) {
        pass.type = "text"
        const img = `<i class="fa-solid fa-eye-slash fa-xl" style="color: #e1ffeb83;"></i>`
        goster.innerHTML = img;
    }
})