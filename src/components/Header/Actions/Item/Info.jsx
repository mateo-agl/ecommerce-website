import React from "react";

export const Info = ({ item, getPrice, currency }) => {
	return (
		<div className="mc-item-info">
			<div className="mc-item-title">
				<label>{item.brand}</label>
				<label>{item.name}</label>
			</div>
			<label className="mc-item-price">
				{currency + (getPrice(item) * item.quantity).toFixed(2)}
			</label>
			<div className="mc-item-atts">
				{
					item.attributes.map((att, i) => (
						<div key={i}>
							<label>{att.name}</label>
							<div className="atts-cont">
								{
									att.items.map((item, u) => (
										<div
											className={ 
												`mc-item-att ${item.selected && (att.type === 'swatch' ? "selected-color" : "selected-att")}`
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