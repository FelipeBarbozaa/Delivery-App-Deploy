import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import add from '../../images/add.png';
import remove from '../../images/remove.png';
import cart from '../../images/cart.svg';
import './style.css';
import appContext from '../../context/AppContext';

export default function Products() {
  let { productsData, prices } = useContext(appContext);
  const {
    setQuantityManual,
    onClickAddItem,
    onClickRemoveItem,
  } = useContext(appContext);
  const navigate = useNavigate();
  const itens = localStorage.getItem('cart');

  if ('products' in localStorage) {
    productsData = JSON.parse(localStorage.getItem('products'));
  }

  if (prices !== '0,00') {
    localStorage.setItem('prices', prices);
  }

  if (itens.length === 2) {
    localStorage.setItem('prices', '0,00');
  }

  if ('prices' in localStorage) {
    prices = localStorage.getItem('prices');
  }

  return (
    (productsData.length === 0 ? null
      : (
        <div id="products-page">
          <Header initialName="Felipe Barboza" />
          <div className="all-products">
            <p id="produtos">Produtos</p>
            {productsData.map((product) => (
              <div key={ product.name } className="products">
                <div className="products-info">
                  <p>
                    {product.name}
                  </p>
                  <img
                    src={ product.urlImage }
                    alt={ product.name }
                  />
                  <p
                    id="price"
                    data-testid={ `customer_products__element-card-price-${product.id}` }
                  >
                    {` R$: ${product.price.replace('.', ',')}`}
                  </p>
                </div>
                <div className="quantity-info">
                  <button
                    className="rm-quantity"
                    value={ product.quantity }
                    id={ product.id }
                    type="button"
                    onClick={ () => onClickRemoveItem(product) }
                  >
                    <img className="remove" src={ remove } alt="remove item" />
                  </button>
                  <input
                    value={ product.quantity }
                    className="form__field"
                    id={ `input-${product.id}` }
                    type="number"
                    onChange={ (e) => setQuantityManual(product, e) }
                  />
                  <button
                    className="add-quantity"
                    type="button"
                    value={ product.quantity }
                    onClick={ () => onClickAddItem(product) }
                  >
                    <img className="add" src={ add } alt="add item" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <section>
            <p
              id="total"
              data-testid="customer_products__checkout-bottom-value"
            >
              { `Total do pedido: R$ ${prices}` }
            </p>
            <button
              data-testid="customer_products__button-cart"
              type="button"
              className="buttonVerCarrinho"
              onClick={ () => navigate('/customer/checkout') }
              disabled={ prices === '0,00' }
            >
              <img
                id="cart"
                src={ cart }
                alt="double check to go next page"
              />
            </button>
          </section>
        </div>
      )
    )
  );
}
