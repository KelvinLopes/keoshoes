import React, { Component } from 'react';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { ProductList, DescriptionProduct } from './styles';

export default class ProductInfo extends Component{

  state = {
    productInfo: [],
    products: {},
    id: this.props.match.params.id
  }

  async componentDidMount() {

    const { id } = this.state;

    const products = localStorage.getItem('products');

    if(products) {
      this.setState({ products: JSON.parse(products) });
    }

    const response = await api.get(`products/${id}`);

    if(response ) {

      const products = response.data;
      this.setState({products})

      this.setState({

        productInfo: {
            image: products.image,
            title: products.title,
            description: products.description,
            priceFormatted: formatPrice(products.price)
        }

      });
    }

  }

  render(){

    const { productInfo } = this.state;

    return (
      <ProductList>
            <li key={productInfo.id}>
            <Link to="/">
              <MdArrowBack
              className="button-back"
              color="rgba(2, 137, 133, 1)"
              size="35"
               />
          </Link>
            <img src={productInfo.image}
            alt={productInfo.title}
            />

          <strong>{productInfo.title}</strong>
          <DescriptionProduct>
            <p>{productInfo.description}</p>
          </DescriptionProduct>
            <span>{productInfo.priceFormatted}</span>

            </li>
      </ProductList>
    );
  }
}
