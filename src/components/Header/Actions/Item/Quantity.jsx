import React from "react";
import { useDispatch } from "react-redux";
import { decrease, increase } from "../../../../redux/reducers/appReducer";

export const Quantity = ({ i, quantity }) => {
	const dispatch = useDispatch();
	return (
		<div className="mc-quant-control">
			<span
				className="mc-quant-btn"
				onClick={ () => dispatch(increase(i)) }
			>+
			</span>
			<label className="mc-quant-num">{quantity}</label>
			<span
				className="mc-quant-btn"
				onClick={ () => dispatch(decrease(i)) }
			>-
			</span>
		</div>
	);
};