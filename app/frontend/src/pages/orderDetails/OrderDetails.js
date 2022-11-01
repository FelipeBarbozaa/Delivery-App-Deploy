/* eslint-disable react/jsx-max-depth */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import getSaleById from '../../api/saleById';
import './teste.css';

function OrderDetails() {
  const EIGHT = 8;
  const TEN = 10;
  const prices = localStorage.getItem('prices');
  const [disabled, setDisabled] = useState(false);
  const [date, setDate] = useState();
  const [sale, setSale] = useState([]);
  const cart = JSON.parse(localStorage.getItem('cart'));
  const dataTest = 'customer_order_details__element-order-';
  const { id } = useParams();

  useEffect(() => {
    const getSale = async () => {
      const token = localStorage.getItem('token');
      const saleInfo = await getSaleById(token, id);
      return saleInfo;
    };
    getSale().then((response) => setSale(response));
  }, [id]);

  useEffect(() => {
    if (sale.length !== 0) {
      const [date1, date2] = sale.saleDate.split('-');
      const date3 = sale.saleDate.slice(EIGHT, TEN);
      setDate(`${date3}/${date2}/${date1}`);
    }
  }, [sale]);

  return (
    (sale.length === 0 ? <h1>Nenhum pedido encontrado</h1>
      : (
        <div className="details">
          <Header initialName="Felipe" />
          <div className="order-details">
            <div>
              <div>
                <h4
                  data-testid={ `${dataTest}details-label-order-id` }
                >
                  { `ID: ${id}` }
                </h4>
                <h4
                  data-testid={ `${dataTest}details-label-delivery-status` }
                  className="order-status"
                >
                  { `Status: ${sale.status}` }
                  {/* disabled ? Entregue : pendente */}
                </h4>
              </div>
              <h4>
                { `Vendedor: ${sale.seller.name}`}
              </h4>
              <h4>
                { `Data do pedido: ${date}`}
              </h4>
              <h1
                className="preco-total"
              >
                Preço total:
                {' '}
                <span className="green">
                  R$
                  {' '}
                  { prices.toString().replace('.', ',') }
                </span>
              </h1>
            </div>
            <table className="details-content-table">
              <thead className="thead-order-details">
                <tr>
                  <th>Item</th>
                  <th>Descrição</th>
                  <th>Quantidade</th>
                  <th>Valor</th>
                  <th>Sub.total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr
                    key={ item.name }
                  >
                    <td
                      data-testid={
                        `customer_order_details__element-order-table-item-number-${index}`
                      }
                    >
                      {index + 1}
                    </td>
                    <td
                      data-testid={
                        `customer_order_details__element-order-table-name-${index}`
                      }
                    >
                      {item.name}
                    </td>
                    <td
                      data-testid={
                        `customer_order_details__element-order-table-quantity-${index}`
                      }
                    >
                      {item.quantity}
                    </td>
                    <td
                      data-testid={
                        `customer_order_details__element-order-table-unit-price-${index}`
                      }
                    >
                      { `R$${item.price}`}
                    </td>
                    <td
                      data-testid={
                        `customer_order_details__element-order-table-sub-total-${index}`
                      }
                    >
                      { (item.quantity * item.price).toFixed(2) }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            onClick={ () => setDisabled(true) }
            disabled={ !disabled }
            className="btn draw-border"
          >
            Marcar como entregue
          </button>
        </div>))
  );
}
export default OrderDetails;
