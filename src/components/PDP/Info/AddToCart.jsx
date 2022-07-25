import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/reducers/appReducer';

export const AddToCart = ({ state }) => {
	const dispatch = useDispatch();
	return (
		<div className={
			state.inStock
				? 'pdp-atc btn visible'
				: 'pdp-atc btn invisible'
		}
		onClick={ () => dispatch(
			addToCart({
				id: state.id,
				brand: state.brand,
				name: state.name,
				prices: state.prices,
				attributes: state.attributes,
				imgs: state.gallery
			}) 
		)}
		>
			<span id="atc-label">ADD TO CART</span>
		</div>
	);
};
