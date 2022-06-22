import React from 'react';
import Img from './Item/Img';
import Info from './Item/Info';
import Quantity from './Item/Quantity';
import './cart.sass';

export class Cart extends React.Component {
	render () {
		return (
			<div id="cart-page">
				<h1 id="cart">Cart</h1>
				<ul id="cart-page-items">
					{
						this.props.cart.map((item, i) => (
							<li className="cart-item" key={i}>
								<div className="item-border" />
								<Info
									currency={this.props.currency}
									getPrice={this.props.getPrice}
									item={item}
								/>
								<Quantity
									decrease={this.props.decrease}
									i={i}
									increase={this.props.increase}
									item={item}
								/>
								<Img
									cart={this.props.cart}
									i={i}
									item={item}
								/>
							</li>
						))
					}
				</ul>
			</div>
		);
	}
}
