import React from "react";

export default class Quantity extends React.Component {
	render() {
		return (
			<div className="mc-quant-control">
				<span
					className="mc-quant-btn"
					onClick={ () => this.props.increase(this.props.i) }
				>+
				</span>
				<label className="mc-quant-num">{this.props.quantity}</label>
				<span
					className="mc-quant-btn"
					onClick={ () => this.props.decrease(this.props.i) }
				>-
				</span>
			</div>
		);
	}
}