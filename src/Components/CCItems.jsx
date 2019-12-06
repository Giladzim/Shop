import React, { Component } from 'react';
import CCItem from './CCItem';


export default class CCItems extends Component{
   
    render() {
        return (            
            <div>
                {
                this.props.itemsInShop.map((item)=>
                <CCItem key={item.id} item={item} addToCart={this.props.addToCart} isInShop={true}/>)
                }
            </div>
        );
    }
}



