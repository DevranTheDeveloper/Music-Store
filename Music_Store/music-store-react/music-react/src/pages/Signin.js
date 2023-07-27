import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function Signin() {
  const [ns, setNs] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (password === passwordRepeat) {
      const newUser = [
        {
          ns,
          email,
          password,
        }
      ];
      const newUserJSON = JSON.stringify(newUser);
      localStorage.setItem("user", newUserJSON);
      // Yönlendirme işlemi burada React Router veya başka bir yöntemle yapılmalıdır.
      // Şu anlık sadece consola mesaj bastırıyoruz.
      console.log("User signed up successfully.");
    } else {
      setError("Passwords do not match");
    }
  };

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
            <input id="ns" type="text" placeholder="Name & Surname" value={ns} onChange={(e) => setNs(e.target.value)} />
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="password-repeat">Password-Repeat:</label>
            <input id="password-repeat" type="password" placeholder="Password-Repeat" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} />
          </div>
          <div className="buttons mt-4">
            <button type="button" onClick={handleSignUp}>Sign-Up</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signin;
