import React, { Component } from 'react';
import Navbar from './components/navbar'
import Footer from './components/footer'
import './img/pp.png'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ns: '',
      mail: '',
      password: '',
      address: 'No address data found',
      disabled: false,
      counter: 0,
      pass: "password"
    };
  }

  componentDidMount() {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      const user = JSON.parse(userJSON);
      this.setState({
        ns: user[0].ns,
        mail: user[0].email,
        password: user[0].password,
        address: user[0].address,
      });
    }
  }
  

  passwordHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
      pass: prevState.counter % 2 === 0 ? "text" : "password",
    }));
  };

  visibilityHandler = () => {
    this.setState((prevState) =>({
      counter: prevState.counter + 1,
      disabled: prevState.counter % 2 === 0 ? false : true,
    }))
  }

  render() {
    const { ns, mail, password, address, disabled, pass } = this.state;

    return (
      <>
        <Navbar/>
        <div className="container">
          <div className="main-box d-flex">
            <div className="user-pp">
            </div>
            <div className="user-b">
              <input className="ns" type="text" value={ns} disabled={disabled} />
              <input className="mail" type="text" value={mail} disabled={disabled}/>
              <div className="sifr d-flex">
                <input className="pass" type={pass} value={password} disabled={disabled} />
                <button className="goster" onClick={this.passwordHandler}>
                  <i className="fa-solid fa-eye fa-xl" style={{ color: '#e1ffeb83' }}></i>
                </button>
              </div>
              <textarea name="Address" className="address" id="address" cols="36" rows="3" disabled={disabled} >
                {address}
              </textarea>
            </div>
            <div className="butns">
              <button className="update" onClick={this.visibilityHandler}>Update Information</button>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default User;
