import React, { Component } from 'react';
import Product from '../Product/Product';
import EditField from '../EditField/EditField';
import NewProduct from '../NewProduct/NewProduct';
import './Shop.css'

class Shop extends Component {

  state = {
    selectedProductId: 0,
    info: false,
    editable: true,
    new: false,
    products: this.props.products
  };  

  selectProduct = (product) => {
    if(this.state.editable){
      this.setState({ selectedProductId: product.id });
      if(!this.state.info){
        this.setState({ info: true });
      }
    }
  };

  deleteProduct = (productToDelete) => {
    const updatedProducts = this.state.products.filter(
      (product) => product !== productToDelete
    );

  this.setState({ products: updatedProducts });
  };

  editProduct = (productToEdit) => {
    this.setState({ selectedProductId: productToEdit.id });
    this.setState({ info: false })
  };

  saveProduct = (productId, product) => {
    const newList = this.state.products.slice()
    newList[productId] = product
    this.setState({products: newList})
    this.cancelEdit()
  }

  cancelEdit = () => {
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
          this.setState({ info: false})

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

            <div className='cards'>

            <EditField
              key = {this.state.selectedProductId}
              id = {this.state.selectedProductId}
              product = {this.state.selectedProductId === 0 ? this.state.products[0] : this.state.products[this.state.selectedProductId-1]}
              info = {this.state.info}
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
      </div>
    );

  }
}

export default Shop;