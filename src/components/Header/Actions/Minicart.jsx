import React from 'react';
import cart from '../../../assets/cart-icon.svg';
import { Link } from 'react-router-dom';
import Quantity from "./Item/Quantity.jsx";
import Info from "./Item/Info.jsx";
import Img from "./Item/Img.jsx";
import deleteIcon from '../../../assets/close.svg';

export default class Minicart extends React.Component {
	render () {
		return (
			<div id="minicart-cont">
				<div
					className="btn"
					id="minicart-btn"
					onClick={ () => this.props.miniCartHandler() }
				>
					<img alt="cart icon" src={cart}/>
					<div
						className={this.props.cart.length > 0 ? 'visible' : 'invisible'}
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
						<label><b>My bag</b>{`, ${this.props.cart.length} items`}</label>
					</div>
					<ul id="minicart-items">
						{
							this.props.cart.map((item, i) => (
								<li className="minicart-item" key={i}>
									<Info
										currency={this.props.currency}
										getPrice={this.props.getPrice}
										item={item}
									/>
									<Quantity
										decrease={this.props.decrease}
										i={i}
										increase={this.props.increase}
										quantity={item.quantity}
									/>
									<Img
										img={item.imgs[0]}
									/>
									<img
										alt="delete icon"
										className="delete btn"
										src={deleteIcon}
										onClick={() => this.props.removeFromCart(i)}
									/>
								</li>
							))
						}
					</ul>
					<div className="mc-bottom">
						<div id="mc-total-cont">
							<label id="mc-total-label">Total</label>
							<label id="mc-total-amount">{this.getTotalAmount()}</label>
						</div>
						<div id="dropdown-btns">
							<Link className="btn" id="view-bag" to="/cart">
								<span>VIEW BAG</span>
							</Link>
							<span className="btn" id="checkout">CHECKOUT</span>
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
