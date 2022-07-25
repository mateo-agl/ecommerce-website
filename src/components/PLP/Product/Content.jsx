import React from 'react';

export const Content = ({ obj, getPrice, currency }) => {
	return (
		<div className="content">
			<h5 className="name">
				{ obj.brand + ' ' + obj.name }
			</h5>
			<label className="price">
				{ currency + getPrice(obj) }
			</label>
		</div>
	);
};
