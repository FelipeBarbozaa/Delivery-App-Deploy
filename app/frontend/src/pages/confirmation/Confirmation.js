import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import emailConfirmation from '../../api/emailConfirmation';
import { DELAY_REDIRECT, TWO_HUNDRED_AND_ONE } from '../../utils/numbers';

export default function Confirmation() {
  const [success, setSuccess] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const activeEmail = async () => {
    const result = await emailConfirmation(params.token);
    setSuccess(result.status === TWO_HUNDRED_AND_ONE);
  };
  activeEmail();

  if (success) {
    setTimeout(() => {
      navigate('/');
    }, DELAY_REDIRECT);
  }

  return (
    <div>
      { success ? <h1>Email ativado com sucesso, redirecionando...</h1> : <h1>Erro</h1> }
    </div>
  );
}
