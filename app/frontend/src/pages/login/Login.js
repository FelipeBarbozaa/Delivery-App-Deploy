import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tryLogin from '../../api/login';
import appContext from '../../context/AppContext';
import loginLogo from '../../images/loginLogo.png';
import { SIX } from '../../utils/numbers';
import './main.css';

export default function Login() {
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState({ active: false, message: '' });
  const navigate = useNavigate();
  const { email, password } = data;

  const { saveUserInfo } = useContext(appContext);

  const handleInput = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const login = async () => {
    const response = await tryLogin({ email, password });
    if (response.error) {
      setError({ active: true, message: response.error });
    }

    if (response.token) {
      saveUserInfo(response);
      navigate('/products');
    }
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
      { error.active
        ? <p id="error_msg">{ error.message }</p> : null}
      <input
        type="email"
        className="form__field email_field"
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
        onClick={ login }
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