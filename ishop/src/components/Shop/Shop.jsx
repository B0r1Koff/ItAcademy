import React, { Component } from 'react';
import Product from '../Product/Product';
import EditField from '../EditField/EditField';
import NewProduct from '../NewProduct/NewProduct';
import './Shop.css'

class Shop extends Component {

  state = {
    selectedProductId: 0,
    editableProdictId: 0,
    editable: true,
    new: false,
    products: this.props.products
  };  

  selectProduct = (product) => {
    if(this.state.editable){
      this.setState({ selectedProductId: product.id });
    }
  };

  deleteProduct = (productToDelete) => {
    const updatedProducts = this.state.products.filter(
      (product) => product !== productToDelete
    );

  this.setState({ products: updatedProducts });
  };

  editProduct = (productToEdit) => {
    this.setState({ editableProdictId: productToEdit.id });
    this.setState({ selectedProductId: productToEdit.id });
  };

  saveProduct = (productId, product) => {
    const newList = this.state.products.slice()
    newList[productId] = product
    this.setState({products: newList})
    this.cancelEdit()
  }

  cancelEdit = () => {
    this.setState({ editableProdictId: 0 });
    this.setState({ selectedProductId: 0 });
    this.setState({ editable: true})
    this.setState({ new: false})
  }

  editDisable = () => {
    this.setState({editable: false})
  }

  editEnable = () => {
    this.setState({editable: true})
  }

  newProductDisable = () => {
    this.setState({new: false})
  }

  newProductEnable = () => {
    this.setState({new: true})
  }

  addProduct = (newProduct) => {
    const updatedArray = [...this.state.products]
    updatedArray.push(newProduct)
    this.setState({products: updatedArray})
  }

  render() {

    return (
      <div className='shop'>
        <div className='shop-name'>{this.props.name}</div>
        <button className='new-product-button' onClick={(e) => 
        {
          e.stopPropagation()
          this.cancelEdit()
          this.newProductEnable()
          this.editDisable()

        }}>Новый товар</button>
          <div className='shop-page'>
            <div className="product-list">
              {this.state.products.map((product) => (

                <Product
                  key = {product.id}
                  product = {product}
                  isSelected = {product.id === this.state.selectedProductId}
                  editable = {this.state.editable}
                  onSelect = {this.selectProduct}
                  onDelete = {this.deleteProduct}
                  onEdit = {this.editProduct}
                />

              ))}
            </div>

            <EditField
              key = {this.state.editableProdictId}
              id = {this.state.editableProdictId}
              selectedId = {this.state.selectedProductId}
              products = {this.state.products}
              onSave = {this.saveProduct}
              onCancel = {this.cancelEdit}
              editDisable = {this.editDisable}
              editEnable = {this.editEnable}
            />

            <NewProduct 
              new = {this.state.new}
              onCancel = {this.cancelEdit}
              products = {this.state.products}
              onAdd = {this.addProduct}
              editEnable = {this.editEnable}
              newProductDisable = {this.newProductDisable}
            />
          </div>
      </div>
    );

  }
}

export default Shop;