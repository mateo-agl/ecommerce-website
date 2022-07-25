import React from 'react';
import { Img } from './Item/Img';
import { Info } from './Item/Info';
import { Quantity } from './Item/Quantity';
import './cart.sass';
import { useSelector } from 'react-redux';

export const Cart = ({ getPrice }) => {
	const { cart, currency } = useSelector(state => state.appReducer);
	return (
		<div id="cart-page">
			<h1 id="cart">Cart</h1>
			<ul id="cart-page-items">
				{
					cart.map((item, i) => (
						<li className="cart-item" key={i}>
							<div className="item-border" />
							<Info currency={currency} getPrice={getPrice} item={item}/>
							<Quantity i={i} item={item}/>
							<Img cart={cart} i={i} item={item}/>
						</li>
					))
				}
			</ul>
		</div>
	);
};
