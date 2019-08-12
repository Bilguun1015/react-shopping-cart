import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	//const [error, setError] = useState(false)
	
	const addItem = item => {
		const isInTheCart = cart.includes(item)
		if(isInTheCart){
			alert('You already have the item in your cart')
		} else {
			setCart([...cart, item]);
		}
		
	};

	const removeItem = id => {
		console.log(id)
		setCart(cart.filter(each => each.id !== id))
	}
	 return (
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart, removeItem}}>
				<div className="App">
					<Navigation cart={{cart, removeItem}} />

					{/* Routes */}
					<Route exact path="/" component = {Products} />

					<Route path="/cart" component = {ShoppingCart}/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
