import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function Signin() {
  // const ns = document.querySelector("#ns")
  // const email = document.querySelector("#email");
  // const password = document.querySelector("#password");
  // const passwordr = document.querySelector("#password-repeat");
  // const submit = document.querySelector("#sign-up");
  // const index = document.querySelector(".index");

  // if (submit && true) {
  //   submit.addEventListener("click", function () {
  //     const newUser = [
  //       {
  //         "ns": ns.value,
  //         "email": email.value,
  //         "password": password.value,
  //       }
  //     ];
  //     if (password.value === passwordr.value) {
  //       const newUserJSON = JSON.stringify(newUser)
  //       localStorage.setItem("user", newUserJSON)
  //       index.setAttribute("href", "/")
  //     } else {
  //       document.querySelector("#hata").textContent = "Passwords are not match"
  //       document.querySelector("#hata").style.color = "red"
  //       return;
  //     }
  //   });
  // }

  
  return (
    <>
      <Navbar />
      <div className="sign-up">
        <div className="sign-box">
          <div className="baslik">
            <h1>Sign-Up</h1>
          </div>
          <div className="input">
            <label htmlFor="ns">Name & Surname:</label>
            <input id="ns" type="text" placeholder="Name & Surname" />
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Email" />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" placeholder="Password" />
            <label htmlFor="password-repeat">Password-Repeat:</label>
            <input id="password-repeat" type="password" placeholder="Password-Repeat" />
          </div>
          <div className="buttons mt-4">
            <a className="index"><button type="button" id="sign-up">Sign-Up</button></a>
            <p id="hata"></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signin