import React from 'react';
import loginLogo from '../images/loginLogo.png';
import './login.css';

export default function Login() {
  return (
    <div className="form__group">
      <img id="login_logo" src={ loginLogo } alt="login logo" />
      <input
        type="email"
        className="form__field"
        placeholder="email@email.com"
        required
        id="email"
      />
      <input
        type="password"
        placeholder="********"
        className="form__field"
        required
        id="password"
      />
      <br />
      <button
        type="button"
        className="btn draw-border"
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
