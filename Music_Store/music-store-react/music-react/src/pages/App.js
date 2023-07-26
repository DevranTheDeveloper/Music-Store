import Navbar from '../components/navbar';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const userData = localStorage.getItem("user");
  const userInfo = JSON.parse(userData);

  const loginEmail = document.querySelector("#login-email");
  const loginPassword = document.querySelector("#login-password");
  const loginSubmit = document.querySelector("#login-submit");
  const errMessage = document.querySelector("#err");

  if (loginSubmit && true) {
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
  }

  return (
    <>
      <Navbar />
      <header className="main-header" >
        <div className="main-blr">
          <h1>MUSIC STORE</h1>
        </div>
      </header>
      <div className="blank"></div>
      <div className="row guitars">
        <div className="left">
          <div className="list" data-aos="fade-left">
            <h3>GUITARS</h3>
            <ul>
              <li>Guitars are stringed instruments.</li>
              <li>Electric guitars are designed for amplification.</li>
              <li>Acoustic guitars rely on natural resonance.</li>
              <li>There are different types and styles of guitars.</li>
              <li>Playing the guitar offers numerous benefits.</li>
            </ul>
          </div>
          <a href="/Instruments"><button data-aos="fade-left">See More</button></a>
        </div>
      </div>
      <div className="row Piano">
        <div className="left2">
          <div className="list2" data-aos="fade-right">
            <h3>PIANOS</h3>
            <ul>
              <li>The piano is a keyboard instrument.</li>
              <li>The piano has a wide range of tones.</li>
              <li>The piano is classNameified as a percussion instrument.</li>
              <li>The piano has a complex internal mechanism.</li>
              <li>The piano is a versatile instrument.</li>
            </ul>
          </div>
          <a href="/Instruments"><button data-aos="fade-right">See More</button></a>
        </div>
      </div>
      <div className="row Drums">
        <div className="left3">
          <div className="list3" data-aos="fade-left">
            <h3>DRUMS</h3>
            <ul>
              <li>Drums are a percussion instrument.</li>
              <li>Drum kits are composed of various drums and cymbals.</li>
              <li>Drumming involves coordination and rhythm.</li>
              <li>Drumming styles vary across genres.</li>
              <li>Drums have a rich cultural history.</li>
            </ul>
          </div>
          <a href="/Instruments"><button data-aos="fade-left">See More</button></a>
        </div>
      </div>
      <div className="row Violins ">
        <div className="left4">
          <div className="list4" data-aos="fade-right">
            <h3>VIOLINS</h3>
            <ul>
              <li>The violin is a string instrument.</li>
              <li>The violin has a long history.</li>
              <li>Violins are made from different types of wood.</li>
              <li>Playing the violin requires proper technique.</li>
              <li>The violin is used in a variety of musical genres.</li>
            </ul>
          </div>
          <a href="/Instruments"><button data-aos="fade-right">See More</button></a>
        </div>
      </div>
      <div className="login">
        <div className="login-box">
          <div className="options">
            <h1>Login</h1>
            <button className="google"><i className="fa-brands fa-google fa-xl" style={{ color: "#F2E9DC", }}></i> Sign-up with Google</button>
          </div>
          <div className="inp">
            <input id="login-email" className="email" type="email" placeholder="Email" />
            <input id="login-password" className="password" type="password" placeholder="Password" />
            <div className="remember d-flex align-items-center">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
          </div>
          <div className="buttons">
            <button type="button" id="login-submit">Login</button>
            <p id="err"></p>
            <p>Don't have an account <a className="e" href='/Signin'>Sign-In</a></p></div>
          <div className="yazi">
            <small>Secured by Me :D</small>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}




AOS.init();

export default App;
