import React from 'react';
import './style.css';

function Header() {
  const role = localStorage.getItem('role');

  const customer = (
    <>
      <li>
        <a
          href="/customer/products"
          className="button-header"
          type="button"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </a>
      </li>
      <li>
        <a
          href="/customer/orders"
          className="button-header"
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Pedidos
        </a>
      </li>
    </>
  );

  const seller = (
    <li>
      <a
        href="/seller/orders"
        className="button-header"
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Pedidos
      </a>
    </li>
  );

  const administrator = (
    <li>
      <a
        href="/admin/manage"
        className="button-header"
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Gerenciar
      </a>
    </li>
  );

  return (
    <header className="header-container">
      <nav>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
        <ul className="nav-list">
          { role === 'customer' ? customer : null }
          { role === 'seller' ? seller : null }
          { role === 'administrator' ? administrator : null }
          <li>
            <a
              href="/"
              onClick={ () => localStorage.clear() }
            >
              Sair
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
