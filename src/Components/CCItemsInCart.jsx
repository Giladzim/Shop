import React, { Component } from 'react';
import CCItem from './CCItem';

export default class CCItemsInCart extends Component {
    
    render() {
        return (
            <div>
                 {
                this.props.itemsInCart.map((item)=>
                <CCItem key={item.id} item={item} removeFromCart={this.props.removeFromCart} isInShop={false}/>)
                }
            </div>
        );
    }
}


