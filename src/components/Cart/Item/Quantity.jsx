import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../../../redux/reducers/appReducer';

export const Quantity = ({ i, item }) => {
	const dispatch = useDispatch();
	return (
		<div className="quantity-control">
			<span
				className="quantity btn"
				onClick={ () => dispatch(increase(i)) }
			>+
			</span>
			<label className="quantity">{item.quantity}</label>
			<span
				className="quantity btn"
				onClick={ () => dispatch(decrease(i)) }
			>-
			</span>
		</div>
	);
};
