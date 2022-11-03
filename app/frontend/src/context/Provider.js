import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import appContext from './AppContext';
import getProducts from '../api/getProducts';

export default function Provider({ children }) {
  const [productsData, setProductsData] = useState([]);
  const [user, setUser] = useState();
  const [prices, setPrices] = useState(0);

  const saveUserInfo = (userInfo) => {
    setUser(userInfo.token);
    localStorage.setItem('token', userInfo.token);
    localStorage.setItem('name', userInfo.name);
    localStorage.setItem('email', userInfo.email);
    localStorage.setItem('role', userInfo.role);
    localStorage.setItem('id', userInfo.id);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const fetchApi = async () => {
        const response = await getProducts(token);
        return response;
      };
      if ('products' in localStorage) {
        setProductsData(JSON.parse(localStorage.getItem('products')));
      } else {
        fetchApi().then((response) => {
          const newData = response.map(({ id, name, price, urlImage }) => (
            { id, name, price, urlImage, quantity: 0 }
          ));
          setProductsData(newData);
          localStorage.setItem('products', JSON.stringify(newData));
        });
      }
    }
  }, [user]);

  useEffect(() => {
    const totalPrice = productsData.reduce((sum, e) => {
      const number = e.price.replace(',', '.');
      const value = parseInt(e.quantity, 10) * parseFloat(number);
      sum += value;
      return sum;
    }, 0).toFixed(2).replace('.', ',');
    setPrices(totalPrice);
  }, [productsData]);

  function onClickAddItem({ id }) {
    const products = JSON.parse(localStorage.getItem('products'));
    const addQuantity = products.map((e) => {
      if (e.id.toString() === id.toString()) {
        return {
          id: e.id,
          name: e.name,
          price: e.price,
          urlImage: e.urlImage,
          quantity: e.quantity + 1,
        };
      }
      return e;
    });

    setProductsData(addQuantity);
    localStorage.setItem('products', JSON.stringify(addQuantity));

    const cartProducts = addQuantity.filter((product) => product.quantity !== 0);
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }

  function onClickRemoveItem({ id }) {
    const products = JSON.parse(localStorage.getItem('products'));
    const removeQuantity = products.map((e) => {
      // eslint-disable-next-line sonarjs/no-collapsible-if
      if (e.quantity > 0) {
        if (e.id.toString() === id.toString()) {
          return {
            id: e.id,
            name: e.name,
            price: e.price,
            urlImage: e.urlImage,
            quantity: e.quantity - 1,
          };
        }
      }
      return e;
    });
    setProductsData(removeQuantity);
    localStorage.setItem('products', JSON.stringify(removeQuantity));

    const cartProducts = removeQuantity.filter((product) => product.quantity !== 0);
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }

  function setQuantityManual({ id }, { target: { value } }) {
    const products = JSON.parse(localStorage.getItem('products'));
    const updateQuantityManual = products.map((e) => {
      if (e.id.toString() === id.toString()) {
        return {
          id: e.id,
          name: e.name,
          price: e.price,
          urlImage: e.urlImage,
          quantity: parseInt(value, 10),
        };
      }
      return e;
    });
    setProductsData(updateQuantityManual);
    localStorage.setItem('products', JSON.stringify(updateQuantityManual));

    const cartProducts = updateQuantityManual.filter((product) => product.quantity !== 0);
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const context = useMemo(() => ({
    saveUserInfo,
    productsData,
    onClickAddItem,
    onClickRemoveItem,
    setQuantityManual,
    prices,
  }));

  return (
    <appContext.Provider value={ context }>
      {children}
    </appContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf,
}.isRequired;
