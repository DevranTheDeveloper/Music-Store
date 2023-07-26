import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'



function User() {
  // const user = localStorage.getItem("user");
  // const userInfo = JSON.parse(user);

  // const ns = document.querySelector(".ns");
  // const mail = document.querySelector(".mail");
  // const pass = document.querySelector(".pass");
  // const address = document.querySelector(".address");
  // const goster = document.querySelector(".goster");
  // const update = document.querySelector(".update");

  // let i = 0
  // if (goster && true) {
  //   goster.addEventListener("click", function () {
  //     i++
  //     if (i % 2 == 0) {
  //       pass.type = "password"
  //       const img = `<i class="fa-solid fa-eye fa-xl" style="color: #e1ffeb83"></i>`
  //       goster.innerHTML = img;
  //     } else if (i % 2 == 1) {
  //       pass.type = "text"
  //       const img = `<i class="fa-solid fa-eye-slash fa-xl" style="color: #e1ffeb83;"></i>`
  //       goster.innerHTML = img;
  //     }
  //   })
  // }

  // console.log(userInfo)
  // let a = 0;
  // if (update && true) {
  //   update.addEventListener("click", function () {
  //     a++;
  //     if (a % 2 === 1) {
  //       update.innerHTML = "Save";
  
  //       ns.disabled = false;
  //       mail.disabled = false;
  //       pass.disabled = false;
  //       address.disabled = false;
  //     } else if (a % 2 === 0) {
  //       update.innerHTML = "Update Informations";
  
  //       ns.disabled = true;
  //       mail.disabled = true;
  //       pass.disabled = true;
  //       address.disabled = true;
  
  //       if (userInfo) {
  //         userInfo[0].ns = ns.value;
  //         userInfo[0].email = mail.value;
  //         userInfo[0].password = pass.value;
  //         userInfo[0].address = address.value;
  
  //         localStorage.setItem("user", JSON.stringify(userInfo));
  //       }
  //     }
  //   });
  // }

  // if (ns && true){
  //   ns.value = userInfo[0].ns;
  //   mail.value = userInfo[0].email
  //   pass.value = userInfo[0].password
  //   address.value = userInfo[0].address
  // }
  

  // if (true) {
  //   if (address.value == "undefined") {
  //     address.value = "Add Address"
  //   }
  // }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="main-box d-flex">
          <div className="user-pp">
            <img src="img/pp.webp" alt="" />
          </div>
          <div className="user-b">
            <input className="ns" type="text" value="" disabled="disabled" />
            <input className="mail" type="text" value="" disabled="disabled" />
            <div className="sifr d-flex">
              <input className="pass" type="password" value="sifre ama gizli olacak" disabled="disabled" />
              <button className="goster"><i className="fa-solid fa-eye fa-xl" style={{ color: "#e1ffeb83" }}></i></button>
            </div>
            <textarea name="Address" className="address" id="address" cols="36" rows="3" disabled="disabled"></textarea>
          </div>
          <div className="butns">
            <button className="update">Update Informations</button>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}



export default User