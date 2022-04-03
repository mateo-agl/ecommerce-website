import React from 'react';
import cart from '../../../assets/cart-icon.svg';
import { Link } from 'react-router-dom';
import Item from './Item/Item';

export default class Minicart extends React.Component {
	render () {
		return (
			<div id="minicart-cont">
				<div
					id="minicart-btn"
					onClick={ () => this.props.miniCartHandler() }
				>
					<img alt="cart icon" src={cart}/>
					<div
						className={
							this.props.cart.length > 0
								? 'visible'
								: 'invisible'
						}
						id="quantity-badge"
					>
						{this.getTotalQuantity()}
					</div>
				</div>
				<div
					className={ this.props.overlay ? 'visible' : 'invisible' }
					id="minicart"
				>
					<div>
						<label id="my-bag">My bag</label>
						<label>{', ' + this.props.cart.length + ' items'}</label>
					</div>
					<ul id="minicart-items">
						{
							this.props.cart.map(
								(item, i) =>
									<Item
										currency={this.props.currency}
										decrease={this.props.decrease}
										getPrice={this.props.getPrice}
										i={i}
										increase={this.props.increase}
										item={item}
										key={i}
										removeFromCart={this.props.removeFromCart}
									/>
							)
						}
					</ul>
					<div className="mc-bottom">
						<div id="mc-total-cont">
							<label id="mc-total-label">Total</label>
							<label id="mc-total-amount">{this.getTotalAmount()}</label>
						</div>
						<div id="dropdown-btns">
							<Link id="view-bag" to="/cart">
								<span>VIEW BAG</span>
							</Link>
							<span id="checkout">CHECKOUT</span>
						</div>
					</div>
				</div>
			</div>
		);
	}

	getTotalQuantity () {
		let total = 0;
		this.props.cart.map(obj => total += obj.quantity);
		return total;
	}

	getTotalAmount () {
		let total = 0;

		this.props.cart.map(
			obj => {
				const amount = this.props.getPrice(obj) * obj.quantity;
				return total += amount;
			}
		);
		return this.props.currency + total.toFixed(2);
	}
}
