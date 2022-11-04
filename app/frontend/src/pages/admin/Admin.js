import React, { useState, useEffect } from 'react';
import tryRegisterByAdminApi from '../../api/registerByAdmin';
// import adminSchema from '../../schemas/adminSchema';
import Header from '../../components/Header';
import getAllUsers from '../../api/getAllUsers';
import removeOne from '../../api/removeUser';
import trash from '../../images/trash.png';
import userRegisterSchema from '../../schemas/registerSchema';
import './style.css';

function Admin() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({ active: false, message: '', success: false });
  const [disabled, setDisabled] = useState(true);
  const [callback, setCallback] = useState(0);
  const [registerData, setRegisterData] = useState(
    { role: 'customer', email: '', name: '', password: '' },
  );
  const { name, email, password } = registerData;

  const token = localStorage.getItem('token');

  useEffect(() => {
    getAllUsers(token).then((response) => setUsers(response));
  }, [token, callback]);

  useEffect(() => {
    const { error: joiError } = userRegisterSchema
      .validate({ name, email, password });
    if (joiError) {
      setError({ active: true, message: joiError.message });
    } else {
      setError({ active: false });
    }
    if (joiError && joiError.message.match('required')) {
      setError({ active: false });
    }
    if (name && email && password && !joiError) {
      setError({ active: false, message: '' });
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password, registerData]);

  const handleRegisterData = async ({ target: { value, name: name2 } }) => {
    setRegisterData({ ...registerData, [name2]: value });
  };

  async function handleClickRegister() {
    const newData = {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
      role: registerData.role,
      active: 1,
    };
    const result = await tryRegisterByAdminApi(token, newData);
    if (result.message) {
      setRegisterData({ role: 'customer', email: '', name: '', password: '' });
    } else if (result.error.match('User')) {
      setError({ active: true, message: 'User already exists' });
    } else if (result.error.match('Email')) {
      setError({ active: true, message: 'Email already exists' });
    }
    setCallback(callback + 1);
  }

  const handleDeleteUser = async (id) => {
    await removeOne(token, id);
    setCallback(callback + 1);
  };

  return (
    <div>
      <Header initialName="Felipe Barboza" />
      <div className="form__group2">
        <br />
        { error.active
          ? <p id="error_msg">{ error.message }</p> : null}
        <br />
        <input
          id="inputName"
          name="name"
          value={ name }
          onChange={ (e) => handleRegisterData(e) }
          className="form__field"
          placeholder="Nome e sobrenome"
          data-testid="admin_manage__input-name"
          type="text"
          required
        />
        <input
          onChange={ (e) => handleRegisterData(e) }
          value={ email }
          name="email"
          className="form__field"
          id="inputEmail"
          placeholder="seu-email@site.com"
          data-testid="admin_manage__input-email"
          type="email"
          required
        />
        <input
          className="form__field"
          value={ password }
          name="password"
          onChange={ (e) => handleRegisterData(e) }
          id="inputPassword"
          placeholder="**********"
          data-testid="admin_manage__input-password"
          type="password"
          required
        />
        <select
          name="role"
          className="form__field"
          defaultValue="customer"
          data-testid="admin_manage__select-role"
          onChange={ (e) => handleRegisterData(e) }
        >
          <option value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
        </select>
        <br />
        <button
          onClick={ () => handleClickRegister() }
          type="button"
          className="btn draw-border"
          disabled={ disabled }
        >
          CADASTRAR
        </button>
      </div>
      <br />
      {users.length === 0 ? null : (
        <table className="details-content-table">
          <thead className="thead-order-details">
            <tr>
              <th>Id</th>
              <th>E-mail</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr id="letter2" key={ user.id }>
                <td
                  width="40"
                  data-testid={ `admin_manage__element-user-table-item-number-${index}` }
                >
                  {index + 1}
                </td>
                <td
                  id="teste3"
                  data-testid={ `admin_manage__element-user-table-email-${index}` }
                >
                  {user.email}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-role-${index}` }
                >
                  {user.role}
                </td>
                <td>
                  <button
                    onClick={ () => handleDeleteUser(user.id) }
                    type="button"
                    data-testid={ `admin_manage__element-user-table-remove-${index}` }
                  >
                    <img id="trash" src={ trash } alt="delete user" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;
