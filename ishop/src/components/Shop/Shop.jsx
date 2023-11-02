import React, { Component } from 'react';
import Product from '../Product/Product';
import './Shop.css'

class Shop extends Component {

  state = {
    selectedProductId: 0,
    products: this.props.products
  };  

  selectProduct = (product) => {
    this.setState({ selectedProductId: product.id });
  };

  saveProduct = (productId, product) => {
    const newList = this.state.products.slice()
    newList[productId] = product
    this.setState({products: newList})
  }  //ishop2

  deleteProduct = (productToDelete) => {
    const updatedProducts = this.state.products.filter(
      (product) => product !== productToDelete
    );

  this.setState({ products: updatedProducts });
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
              isSelected = {product.id === this.state.selectedProductId}
              onSelect = {this.selectProduct}
              onDelete = {this.deleteProduct}
            />

          ))}
        </div>
      </div>
    );

  }
}

export default Shop;