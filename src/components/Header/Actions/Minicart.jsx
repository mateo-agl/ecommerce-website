import React from 'react';
import cartIcon from '../../../assets/cart-icon.svg';
import { Link } from 'react-router-dom';
import { Quantity } from "./Item/Quantity.jsx";
import { Info } from "./Item/Info.jsx";
import { Img } from "./Item/Img.jsx";
import deleteIcon from '../../../assets/close.svg';
import { miniCartHandler } from '../../../redux/reducers/headerReducer';
import { removeFromCart } from '../../../redux/reducers/appReducer';
import { useDispatch } from 'react-redux';

export const Minicart = ({ getPrice, cart, currency, overlay }) => {
	const dispatch = useDispatch();
	
	const getTotalQuantity = () => {
		let total = 0;
		cart.map(obj => total += obj.quantity);
		return total;
	};

	const getTotalAmount = () => {
		let total = 0;

		cart.map(obj => {
			const amount = getPrice(obj) * obj.quantity;
			return total += amount;
		});
		return currency + total.toFixed(2);
	};
	
	return (
		<div id="minicart-cont">
			<div
				className="btn"
				id="minicart-btn"
				onClick={() => dispatch(miniCartHandler())}
			>
				<img alt="cart icon" src={cartIcon}/>
				<div
					className={cart.length > 0 ? 'visible' : 'invisible'}
					id="quantity-badge"
				>
					{ getTotalQuantity() }
				</div>
			</div>
			<div
				className={ overlay ? 'visible' : 'invisible' }
				id="minicart"
			>
				<div>
					<label><b>My bag</b>{`, ${cart.length} items`}</label>
				</div>
				<ul id="minicart-items">
					{
						cart.map((item, i) => (
							<li className="minicart-item" key={i}>
								<Info currency={currency} getPrice={getPrice} item={item}/>
								<Quantity i={i} quantity={item.quantity}/>
								<Img img={item.imgs[0]}/>
								<img
									alt="delete icon"
									className="delete btn"
									src={deleteIcon}
									onClick={() => dispatch(removeFromCart(i))}
								/>
							</li>
						))
					}
				</ul>
				<div className="mc-bottom">
					<div id="mc-total-cont">
						<label id="mc-total-label">Total</label>
						<label id="mc-total-amount">{ getTotalAmount() }</label>
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
};