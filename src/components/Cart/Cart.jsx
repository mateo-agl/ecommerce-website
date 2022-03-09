import React from 'react';
import Item from './Item/Item.jsx';
import './cart.css';

export class Cart extends React.Component {
	render () {
		return (
			<div id="cart-page">
				<h1 id="cart">Cart</h1>
				<ul id="cart-page-items">
					{
						this.props.cart.map(
							(item, i) =>
								<Item
									cart={this.props.cart}
									currency={this.props.currency}
									decrease={this.props.decrease}
									getPrice={this.props.getPrice}
									i={i}
									increase={this.props.increase}
									item={item}
									key={i}
								/>
						)
					}
				</ul>
			</div>
		);
	}
}
