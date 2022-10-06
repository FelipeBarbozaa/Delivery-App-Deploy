import React, { useEffect, useState } from 'react';
import loginLogo from '../images/loginLogo.png';
import SIX from '../utils/numbers';
import './login.css';

export default function Login() {
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(true);
  const { email, password } = data;

  const handleInput = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (email && password) {
      const emailReg = /\S+@\S+\.\S+/;
      if (email.match(emailReg) && password.length >= SIX) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [email, password]);

  return (
    <div className="form__group">
      <img id="login_logo" src={ loginLogo } alt="login logo" />
      <input
        type="email"
        className="form__field"
        placeholder="email@email.com"
        name="email"
        required
        onChange={ (e) => handleInput(e) }
      />
      <input
        type="password"
        placeholder="********"
        className="form__field"
        name="password"
        required
        onChange={ (e) => handleInput(e) }
      />
      <br />
      <button
        type="button"
        className="btn draw-border"
        disabled={ disabled }
      >
        Login
      </button>
      <a href="/">
        Forgot your password?
      </a>
      <a href="/register">
        Register
      </a>
    </div>
  );
}
