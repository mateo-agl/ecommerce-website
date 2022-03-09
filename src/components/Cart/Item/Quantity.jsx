import React from 'react';

export default class Quantity extends React.Component {
	render () {
		return (
			<div className="quantity-control">
				<span
					className="quantity-btn"
					onClick={ () => this.props.increase(this.props.i) }
				>+
				</span>
				<label className="quantity">{this.props.item.quantity}</label>
				<span
					className="quantity-btn"
					onClick={ () => this.props.decrease(this.props.i) }
				>-
				</span>
			</div>
		);
	}
}
