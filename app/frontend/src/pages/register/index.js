import React, { useState, useEffect } from 'react';
import registerLogo from '../../images/registerLogo.png';
import { SIX, TWELVE } from '../../utils/numbers';
import './main.css';

export default function Register() {
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(true);
  const { name: nameReg, email, password } = data;

  const handleInput = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (nameReg && email && password) {
      const emailReg = /\S+@\S+\.\S+/;
      if (nameReg.length >= TWELVE && email.match(emailReg) && password.length >= SIX) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [nameReg, email, password]);

  return (
    <div className="form__group">
      <img id="register_logo" src={ registerLogo } alt="register logo" />
      <input
        data-testid="common_register__input-name"
        type="text"
        placeholder="Seu nome"
        className="form__field"
        name="name"
        required
        onChange={ (e) => handleInput(e) }
      />
      <input
        data-testid="common_register__input-email"
        type="email"
        placeholder="seu-email@site.com.br"
        name="email"
        className="form__field"
        required
        onChange={ (e) => handleInput(e) }
      />
      <input
        data-testid="common_register__input-password"
        type="password"
        placeholder="*********"
        name="password"
        className="form__field"
        required
        onChange={ (e) => handleInput(e) }
      />
      <br />
      <button
        data-testid="common_register__button-register"
        type="button"
        className="btn draw-border"
        disabled={ disabled }
      >
        Cadastrar
      </button>
      <a href="/">
        Login
      </a>
    </div>
  );
}
