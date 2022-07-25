import React from 'react';

export const Info = ({ item, getPrice, currency }) => {
	return (
		<div className="item-info">
			<p className="item-name-brand">
				<b>{item.brand}</b><br/>
				{item.name}
			</p>
			<label className="item-price">
				{ currency + (getPrice(item) * item.quantity).toFixed(2) }
			</label>
			<div className="item-atts">
				{
					item.attributes.map((att, i) => (
						<div key={i}>
							<label>{att.name}</label>
							<div className="cart-atts-cont">
								{
									att.items.map((item, u) => (
										<div
											className={ 
												`cart-item-att ${item.selected && (att.type === 'swatch' ? "selected-color" : "selected-att")}`
											}
											key={u}
											style={{ background: att.type === "swatch" && item.value }}
										>
											{att.type === "text" && item.value}
										</div>
									))
								}
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
};
