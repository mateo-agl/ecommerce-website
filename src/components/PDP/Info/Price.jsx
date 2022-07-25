import React from 'react';

export const Price = ({ getPrice, currency, state }) => {
	return (
		<div id="price-cont">
			<label>PRICE:</label>
			<p id="art-price">
				{ currency + getPrice(state) }
			</p>
		</div>
	);
};
