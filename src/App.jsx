import React from 'react';
import './App.css';
import { Item, itemsList} from './item.js'
import CCShop from './Components/CCShop.jsx';

var itemsInCart = [];

function App() {
  
  return (
    <div className="App">
      <CCShop itemsList={itemsList} itemsInCart={itemsInCart}/>
    </div>
  );
}

export default App;
