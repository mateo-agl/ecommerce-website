import React from 'react';
import Price from './Price';
import Attributes from './Attributes';
import AddToCart from './AddToCart';
import Description from './Description';

export default class Info extends React.Component {
	render () {
		return (
			<div id="info">
				<h2 id="pdp-title">{this.props.state.brand}</h2>
				<p id="subtitle">{this.props.state.name}</p>
				<Attributes
					selectAttribute={this.props.selectAttribute}
					state={this.props.state}
				/>
				<Price
					currency={this.props.currency}
					getPrice={this.props.getPrice}
					state={this.props.state}
				/>
				<AddToCart
					addToCart={this.props.addToCart}
					state={this.props.state}
				/>
				<Description
					description={this.props.state.description}
				/>
			</div>
		);
	}
}
