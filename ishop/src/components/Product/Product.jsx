import React, { Component } from 'react';
import "./Product.css"

class Product extends Component {

  render() {

    return (
      <div className={`product${this.props.isSelected ? '-selected' : ''}`} onClick={() => this.props.onSelect(this.props.product)}>
        <img src={this.props.product.url} className='image'/>
        <span>{this.props.product.name}</span>
        <span>{this.props.product.price} руб</span>
        
        <button className='delete-button'>Удалить</button>
      </div>
    );

  }
}

export default Product;