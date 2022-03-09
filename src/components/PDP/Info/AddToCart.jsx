import React from 'react';

export default class AddToCart extends React.Component {
	render () {
		return (
			<div id={
				this.props.state.inStock
					? 'pdp-atc-btn'
					: 'no-stock'
			}
			onClick={ () =>
				this.props.addToCart(this.props.state.id,
					{
						id: this.props.state.id,
						brand: this.props.state.brand,
						name: this.props.state.name,
						prices: this.props.state.prices,
						attributes: this.props.state.attributes,
						imgs: this.props.state.gallery
					}) }
			>
				<span id="atc-label">ADD TO CART</span>
			</div>
		);
	}
}
