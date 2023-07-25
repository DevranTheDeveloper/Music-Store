const user = localStorage.getItem("user");
const userInfo = JSON.parse(user);

const ns = document.querySelector(".ns");
const mail = document.querySelector(".mail");
const pass = document.querySelector(".pass");
const address = document.querySelector(".address");
const goster = document.querySelector(".goster");
const update = document.querySelector(".update");

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

console.log(userInfo)
let a = 0;
update.addEventListener("click", function () {
  a++;
  if (a % 2 === 1) {
    update.innerHTML = "Save";

    ns.disabled = false;
    mail.disabled = false;
    pass.disabled = false;
    address.disabled = false;
  } else if (a % 2 === 0) {
    update.innerHTML = "Update Informations";

    ns.disabled = true;
    mail.disabled = true;
    pass.disabled = true;
    address.disabled = true;

    if (userInfo) {
      userInfo[0].ns = ns.value;
      userInfo[0].email = mail.value;
      userInfo[0].password = pass.value;
      userInfo[0].address = address.value;

      localStorage.setItem("user", JSON.stringify(userInfo));
    }
  }
});

ns.value = userInfo[0].ns;
mail.value = userInfo[0].email
pass.value = userInfo[0].password
address.value = userInfo[0].address

if (address.value == "undefined") {
  address.value = "Add Address"
}