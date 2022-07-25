import React, { useEffect } from 'react';
import { Header, PLP, Cart, PDP } from './components';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from './redux/reducers/appReducer';

export const App = () => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(setCartItems()), []);
	const { currency } = useSelector(state => state.appReducer);

	const getPrice = (product) => {
		const price = product.prices.find(
			p => p.currency.symbol === currency
		);
		if (!price) return 0;
		return price.amount;
	};

	return (
		<div id="container">
			<Header getPrice={getPrice}/>
			<Routes>
				<Route path="/">
					<Route element={<PLP getPrice={getPrice}/>} index/>
					<Route element={<PDP getPrice={getPrice}/>} path=":id"/>
					<Route element={<Cart getPrice={getPrice}/>} path="cart"/>
				</Route>
			</Routes>
		</div>
	);
};
