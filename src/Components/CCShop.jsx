import React, { Component } from 'react';
import CCItemsInCart from './CCItemsInCart';
import CCItems from './CCItems';

export default class CCShop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsInShop: this.props.itemsList,
            itemsInCart: this.props.itemsInCart,
            totalPrice: 0
        }
    }

    render() {
        return (
            <div id="container">
                <div id="header">

                    <img id="shopSign" src="https://blogs.alphagraphics.com/blog/carmel-indiana-us605/wp-content/uploads/sites/23/2016/03/funny-store-signs-3-for-3.jpg" alt="Welcome to our shop" />
                    <h2 id="headline">Welcome to our shop!</h2>
                </div>

                <div id="Shop">

                    <CCItems itemsInShop={this.state.itemsInShop} addToCart={this.addToCart} />
                </div>
                <div id="Cart">
                    <h3> Items in cart:</h3>

                    {this.state.itemsInCart.length == 0 &&
                        <h5>
                            You didnt select any item.
                         </h5>
                    }

                    <CCItemsInCart itemsInCart={this.state.itemsInCart} removeFromCart={this.removeFromCart} />
                    <h4>Total Price: {this.state.totalPrice}</h4>

                </div>
            </div>
        )
    }

    addToCart = (item) => {
        let tempPrice = this.state.totalPrice + item.price;
        let tempCartList = this.state.itemsInCart;
        tempCartList.push(item);
        let tempShopList = this.state.itemsInShop;
        tempShopList = tempShopList.filter(i => i !== item);
        
        this.setState({
            itemsInCart: tempCartList,
            itemsInShop: tempShopList,
            totalPrice: tempPrice
        })
    }
    removeFromCart = (item) => {
        let tempPrice = this.state.totalPrice - item.price;
        let tempCartList = this.state.itemsInCart;
        tempCartList = tempCartList.filter(i => i !== item);
        let tempShopList = this.state.itemsInShop;
        tempShopList.push(item);
        this.setState({
            itemsInCart: tempCartList,
            itemsInShop: tempShopList,
            totalPrice: tempPrice
        })
    }
}

