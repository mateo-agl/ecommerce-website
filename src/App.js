import React from 'react';
import { Header, PLP, Cart, PDP } from './components';
import { Routes, Route } from 'react-router-dom';

export class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			currency: '$',
			category: 'all',
			cart: []
		};
		this.getPrice = this.getPrice.bind(this);
		this.increase = this.increase.bind(this);
		this.decrease = this.decrease.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
		this.changeCategory = this.changeCategory.bind(this);
		this.changeCurrency = this.changeCurrency.bind(this);
	}

	render () {
		return (
			<div id="container">
				<Header
					cart={this.state.cart}
					category={this.state.category}
					changeCategory={this.changeCategory}
					changeCurrency={this.changeCurrency}
					currency={this.state.currency}
					decrease={this.decrease}
					getPrice={this.getPrice}
					increase={this.increase}
					removeFromCart={this.removeFromCart}
				/>
				<Routes>
					<Route path="/">
						<Route element={
							<PLP
								addToCart={this.addToCart}
								category={this.state.category}
								currency={this.state.currency}
								getPrice={this.getPrice}
							/>
						} index
						/>
						<Route element={
							<PDP
								addToCart={this.addToCart}
								cart={this.state.cart}
								currency={this.state.currency}
								getPrice={this.getPrice}
							/>
						} path=":id"
						/>
						<Route element={
							<Cart
								cart={this.state.cart}
								currency={this.state.currency}
								decrease={this.decrease}
								getPrice={this.getPrice}
								increase={this.increase}
							/>
						} path="cart"
						/>
					</Route>
				</Routes>
			</div>
		);
	}

	getPrice (obj) {
		const price = obj.prices.find(
			p =>
				p.currency.symbol === this.state.currency
		);
		if (!price) return 0;
		return price.amount;
	}

	increase (i) {
		const cart = this.state.cart;

		cart[i].quantity += 1;

		this.setState({
			cart: cart
		});
	}

	decrease (i) {
		const cart = this.state.cart;

		if (cart[i].quantity >= 2) {
			cart[i].quantity -= 1;

			this.setState({
				cart: cart
			});
		}
	}

	removeFromCart (i) {
		const cart = this.state.cart;
		cart.splice(i, 1);
		this.setState({ cart: cart });
	}

	addToCart (id, newProduct) {
		const cart = this.state.cart;
		const prevProduct = cart.find(product => 
			product.id === id &&
			product.attributes.every((att, i) => 
				att.items.every((item, u) => 
					item.selected === newProduct.attributes[i].items[u].selected
				)
			)
		);
		if (prevProduct) {
			prevProduct.quantity += 1;
		} else {
			newProduct.quantity = 1;
			cart.push(JSON.parse(JSON.stringify(newProduct)));
		}
		this.setState({ cart: cart });
	}

	changeCategory (e) {
		const category = e.target.textContent;

		this.setState({
			category: category
		});
	}

	changeCurrency (e) {
		const curr = e.target.textContent.split(' ')[0];

		this.setState({ currency: curr });
	}
}
