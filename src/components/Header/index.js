import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { MdShoppingBasket } from  'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({cartSize}) {
  console.log(cartSize);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes"/>
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket size={36} color="rgba(18, 100, 180, 1)" />
        </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
 }))(Header);
