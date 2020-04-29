import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

function Cart( { cart, total, removeFromCart, updateAmountRequest}) {

  function increment(product){
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <>
        <Link to="/">
        <MdArrowBack
        className="button-back"
        color="rgba(2, 137, 133, 1)"
        size="35"
        title="Ver mais modelos"
        />
        </Link>
      </>
      <ProductTable>
        <thead>

          <tr>

            <th />
            <th className="th-product">PRODUTO</th>
            <th className="th-product">QTD</th>
            <th className="th-product">SUBTOTAL</th>
            <th />
          </tr>

        </thead>
        <tbody>
          { cart.map(product => (
            <tr key={product.id}>
              <td>
                <img
                src={product.image}
                alt={product.title}
                />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color="rgba(71, 93, 243, 1)" />
                  </button>

                    <input type="number" readOnly value={product.amount} />

                  <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color="rgba(71, 93, 243, 1)" />
                  </button>

                </div>
              </td>
            <td>
              <strong>{product.subtotal}</strong>
            </td>
            <td>
              <button type="button" onClick={() => removeFromCart(product.id) }>
                  <MdDelete size={20} color="rgba(71, 93, 243, 1)" />
              </button>
            </td>
          </tr>
          )) }
        </tbody>
       </ProductTable>

       <footer>
         <button type="button">Finalizar pedido</button>

         <Total>
           <span>TOTAL</span>
          <strong className="total">{total}</strong>
         </Total>
       </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0)),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Cart);
