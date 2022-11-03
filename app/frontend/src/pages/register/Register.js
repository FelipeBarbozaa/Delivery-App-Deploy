import React, { useState, useEffect } from 'react';
import registerLogo from '../../images/registerLogo.png';
import tryRegister from '../../api/register';
import userRegisterSchema from '../../schemas/registerSchema';
import './register.css';

export default function Register() {
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState({ active: false, message: '', success: false });
  const { name: nameReg, email, password } = data;

  const handleInput = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const register = async () => {
    const result = await tryRegister({ name: nameReg, email, password });
    if (result.message === 'success') {
      setError({ success: true,
        message: `Account created successfully! Activate
        using the link sent to your email`,
      });
    }
    if (result.error.match('exists')) {
      setError({ active: true, message: 'Email already exists' });
    }
  };

  useEffect(() => {
    const { error: joiError } = userRegisterSchema.validate(data);
    console.log(joiError);
    if (joiError) {
      setError({ active: true, message: joiError.message });
    } else {
      setError({ active: false });
    }
    if (nameReg && email && password && !joiError) {
      setError({ active: false, message: '' });
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [nameReg, email, password, data]);

  return (
    <div className="form__group">
      <img id="register_logo" src={ registerLogo } alt="register logo" />
      { error.success
        ? <p id="active_msg">{ error.message }</p> : null}
      { error.active
        ? <p id="error_msg">{ error.message }</p> : null}
      <br />
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
        onClick={ register }
      >
        Cadastrar
      </button>
      <a href="/">
        Login
      </a>
    </div>
  );
}
