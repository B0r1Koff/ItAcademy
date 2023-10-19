import React, { Component } from 'react';
import Product from '../Product/Product';
import './Shop.css'

class Shop extends Component {

  state = {
    selectedProduct: null,
    products: this.props.products
  };  

  selectProduct = (product) => {
    this.setState({ selectedProduct: product });
  };

  render() {

    return (
      <div>
        <div className='shop-name'>{this.props.name}</div>
        <div className="product-list">
          {this.state.products.map((product) => (

            <Product
              key = {product.id}
              product = {product}
              isSelected = {product === this.state.selectedProduct}
              onSelect = {this.selectProduct}
            />

          ))}
        </div>
      </div>
    );

  }
}

export default Shop;