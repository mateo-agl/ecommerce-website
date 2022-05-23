import React from "react";
import Quantity from "./Quantity.jsx";
import Info from "./Info.jsx";
import Img from "./Img.jsx";
import deleteIcon from '../../../../assets/close.svg';

export default class Item extends React.Component {
	render() {
		return (
			<li className="minicart-item">
				<Info
					currency={this.props.currency}
					getPrice={this.props.getPrice}
					item={this.props.item}
				/>
				<Quantity
					decrease={this.props.decrease}
					i={this.props.i}
					increase={this.props.increase}
					quantity={this.props.item.quantity}
				/>
				<Img
					img={this.props.item.imgs[0]}
				/>
				<img
					alt="delete icon"
					className="delete btn"
					src={deleteIcon}
					onClick={() => this.props.removeFromCart(this.props.i)}
				/>
			</li>
		);
	}
}