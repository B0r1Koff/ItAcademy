import React, { Component } from 'react';
import "./Product.css"

class Product extends Component {

  deleteProduct = () => {
    if (window.confirm('Вы уверены, что хотите удалить товар?')) {
      this.props.onDelete(this.props.product);
    }
  };

  render() {

    return (
      <div className={`product${this.props.isSelected ? '-selected' : ''}`} onClick={() => this.props.onSelect(this.props.product)}>
        <img src={this.props.product.url} className='image'/>
        <span>{this.props.product.name}</span>
        <span>{this.props.product.price} руб</span>
        
        <button className={`delete-button${!this.props.editable ? '-disabled' : ''}`} onClick={(e) => {

          e.stopPropagation()
          this.deleteProduct()
          
        }}>Удалить</button>

        <button className={`delete-button${!this.props.editable ? '-disabled' : ''}`} onClick={(e) => {

          e.stopPropagation()
          this.props.onEdit(this.props.product)

        }}>Редактировать</button>
      </div>
    );

  }
}

export default Product;