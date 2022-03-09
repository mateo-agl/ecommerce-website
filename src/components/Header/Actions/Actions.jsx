import React from 'react';
import CurrSwitcher from './CurrSwitcher';
import Minicart from './Minicart';

export default class Actions extends React.Component {
	constructor (props) {
		super(props);
		this.state = { dropdown: false };
	}

	render () {
		return (
			<div id="actions">
				<CurrSwitcher
					changeCurrency={this.props.changeCurrency}
					currency={this.props.currency}
					switch={this.props.switch}
					switcherHandler={this.props.switcherHandler}
				/>
				<Minicart
					cart={this.props.cart}
					currency={this.props.currency}
					decrease={this.props.decrease}
					getPrice={this.props.getPrice}
					i={this.props.i}
					increase={this.props.increase}
					item={this.props.item}
					miniCartHandler={this.props.miniCartHandler}
					overlay={this.props.overlay}
					removeFromCart={this.props.removeFromCart}
				/>
			</div>
		);
	}
}
