import React from 'react';

export default class Price extends React.Component {
	render () {
		return (
			<div id="price-cont">
				<label>PRICE:</label>
				<p id="art-price">
					{ this.props.currency + this.props.getPrice(this.props.state) }
				</p>
			</div>
		);
	}
}
