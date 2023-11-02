import React, { Component } from 'react';
import "./EditField.css"

class EditField extends Component {
    state = {
        url: this.props.id === 0 ? "" : this.props.products[this.props.id-1].url,
        name: this.props.id === 0 ? "" : this.props.products[this.props.id-1].name,
        price: this.props.id === 0 ? "" : this.props.products[this.props.id-1].price,
        urlError: "",
        nameError: "",
        priceError: ""
    }
        
    handleInputUrlChange = eo => {
        this.setState({url: eo.target.value});
        this.props.editDisable()
    };

    handleInputNameChange = eo => {
        this.setState({name: eo.target.value});
        this.props.editDisable()
    };

    handleInputPriceChange = eo => {
        this.setState({price: eo.target.value});
        this.props.editDisable()
    };
  
    render() {
  
      return (
        
        this.props.id === this.props.selectedId ?

        <div className={this.props.id === 0 ? "edit-field-none" : "edit-field"}>
            <div className='edit-input'>
                <input type="text" value={this.state.url} onChange={this.handleInputUrlChange}/>
                <p className='err-message'>{this.state.urlError}</p>
            </div>

            <div className='edit-input'>
                <input type="text" value={this.state.name} onChange={this.handleInputNameChange}/>
                <p className='err-message'>{this.state.nameError}</p>
            </div>

            <div className='edit-input'>
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
                this.props.onSave(this.props.id-1, 
                { 
                    "id": this.props.id, 
                    "name": this.state.name, 
                    "price": this.state.price, 
                    "url": this.state.url 
                })
            }
            
          }}>Сохранить</button>

          <button className='delete-button' onClick={(e) => {
  
            e.stopPropagation()
            this.props.onCancel()
  
          }}>Отмена</button>
        </div>

        :

        <div>
            <div className='card-str'>
                <p>id: </p>
                <input type="text" value={this.props.products[this.props.selectedId-1].id}/>
            </div>
            <div className='card-str'>
                <p>url: </p>
                <input type="text" value={this.props.products[this.props.selectedId-1].url}/>
            </div>
            <div className='card-str'>
                <p>name: </p>
                <input type="text" value={this.props.products[this.props.selectedId-1].name}/>
            </div>
            <div className='card-str'>
                <p>price: </p>
                <input type="text" value={this.props.products[this.props.selectedId-1].price}/>
            </div>
        </div>
      );
  
    }
  }
  
  export default EditField;