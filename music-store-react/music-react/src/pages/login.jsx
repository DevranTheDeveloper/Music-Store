import React, { useState} from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


function login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const userData = localStorage.getItem("user");
  const userInfo = JSON.parse(userData);

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (userInfo && userInfo[0].email === loginEmail && userInfo[0].password === loginPassword) {
      console.log("Giriş yapıldı");
      setErrMessage(`Successfully Logged-In. Welcome back ${userInfo[0].ns}`);
      setErrMessageColor("lime");
      setTimeout(() => {
        setErrMessage('');
      }, 5000);
    } else {
      setErrMessage('Password or Email is incorrect');
      setErrMessageColor('red');
      return;
    }
  };

  const setErrMessageColor = (color) => {
    document.querySelector("#err").style.color = color;
  };
  return (
    <>
    <Navbar/>
    <header>
    <div className="login">
        <div className="login-box">
          <div className="options">
            <h1>Login</h1>
            <button className="google"><i className="fa-brands fa-google fa-xl" style={{ color: "#F2E9DC", }}></i> Sign-up with Google</button>
          </div>
          <div className="inp">
            <input id="login-email" className="email" type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            <input id="login-password" className="password" type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            <div className="remember d-flex align-items-center">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
          </div>
          <div className="buttons">
            <button type="button" id="login-submit" onClick={handleLoginSubmit}>Login</button>
            <p id="err">{errMessage}</p>
            <p>Don't have an account <a className="e" href='/Signin'>Sign-In</a></p>
          </div>
          <div className="yazi">
            <small>Secured by Me :D</small>
          </div>
        </div>
      </div>
    </header>
    <Footer/>
    </>
  )
}

export default login