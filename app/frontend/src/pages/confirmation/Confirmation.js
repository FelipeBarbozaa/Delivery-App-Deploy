import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import appContext from '../../context/AppContext';
import emailConfirmation from '../../api/emailConfirmation';
import { DELAY_REDIRECT } from '../../utils/numbers';
import './confirmation.css';

export default function Confirmation() {
  const [success, setSuccess] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const { saveUserInfo } = useContext(appContext);

  const activeEmail = async () => {
    const result = await emailConfirmation(params.token);
    const newObj = {
      token: result.newToken,
      ...result.response,
    };
    if (result.newToken) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    saveUserInfo(newObj);
  };
  activeEmail();

  if (success) {
    setTimeout(() => {
      navigate('/');
    }, DELAY_REDIRECT);
  }

  return (
    <p id="activation">
      { success ? <h1>Email ativado com sucesso, redirecionando...</h1> : null }
    </p>
  );
}
