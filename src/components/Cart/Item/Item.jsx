import React from 'react';
import Img from './Img';
import Info from './Info';
import Quantity from './Quantity';

export default class Item extends React.Component {
	render () {
		return (
			<li className="cart-item">
				<div className="item-border" />
				<Info
					currency={this.props.currency}
					getPrice={this.props.getPrice}
					item={this.props.item}
				/>
				<Quantity
					decrease={this.props.decrease}
					i={this.props.i}
					increase={this.props.increase}
					item={this.props.item}
				/>
				<Img
					cart={this.props.cart}
					i={this.props.i}
					item={this.props.item}
				/>
			</li>
		);
	}
}
