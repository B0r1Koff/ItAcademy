import React, { Component } from 'react';
import "./NewProduct.css"

class NewProduct extends Component {
    state = {
        url: "",
        name: "",
        price: "",
        urlError: "",
        nameError: "",
        priceError: ""
    }
        
    handleInputUrlChange = eo => {
        this.setState({url: eo.target.value});
    };

    handleInputNameChange = eo => {
        this.setState({name: eo.target.value});
    };

    handleInputPriceChange = eo => {
        this.setState({price: eo.target.value});
    };

  render() {

    return (
    <div className={!this.props.new ? "new-product-form-none" : "new-product-form"}>
      <div>Новый товар</div>

      <div className='add-str'>
        <p className='field'>URL: </p>
        <input type="text" value={this.state.url} onChange={this.handleInputUrlChange}/>
        <p className='err-message'>{this.state.urlError}</p>
      </div>

      <div className='add-str'>
        <p className='field'>Название: </p>
        <input type="text" value={this.state.name} onChange={this.handleInputNameChange}/>
        <p className='err-message'>{this.state.nameError}</p>
      </div>

      <div className='add-str'>
        <p className='field'>Цена: </p>
        <input type="text" value={this.state.price} onChange={this.handleInputPriceChange}/>
        <p className='err-message'>{this.state.priceError}</p>
      </div>

      <button className='delete-button' onClick={(e) => {
  
        e.stopPropagation()
        if(this.state.url === ""){
            this.setState({urlError: "Заполните поле!"})
        }
        if(this.state.name === ""){
            this.setState({nameError: "Заполните поле!"})
        }
        if(this.state.price === ""){
            this.setState({priceError: "Заполните поле!"})
        }
        if(this.state.url !== "" && this.state.name !== "" && this.state.price !== ""){
            this.props.editEnable()
            this.props.onAdd(
            { 
                "id": this.props.products.length+1, 
                "name": this.state.name, 
                "price": this.state.price, 
                "url": this.state.url 
            })
            this.props.newProductDisable()
            this.setState({url: ""});
            this.setState({name: ""});
            this.setState({price: ""});
        }
        
      }}>Сохранить</button>

      <button className='delete-button' onClick={(e) => {

        e.stopPropagation()
        this.props.onCancel()

      }}>Отмена</button>
      </div>
    );

  }
}

export default NewProduct;