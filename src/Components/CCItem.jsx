import React, { Component } from 'react';


export default class CCItem extends Component {


    render() {
        if(this.props.isInShop==true){
        return (
            <div  className="card">  
                <div className="cardImgDiv">
                    <img className="cardImg" src={this.props.item.image} alt={this.props.item.name} />
                </div>         
                <div>
                    <p>{this.props.item.name} for {this.props.item.price}$</p>
                </div>
                <div>
                    <button type="button" onClick={() => this.props.addToCart(this.props.item)} >Add to cart</button> 
                </div>
            </div>
        );}
        else{
            return(
                <div  className="card">         
                <div>
                    <p>{this.props.item.name} for {this.props.item.price}$</p>
                </div>
                <div>
                    <button type="button" onClick={() => this.props.removeFromCart(this.props.item)} >X</button> 
                </div>
            </div>
            );
        }
        
    }
}
