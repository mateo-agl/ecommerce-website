import React from 'react';

export default class Info extends React.Component {
	render () {
		return (
			<div className="item-info">
				<p className="item-brand">
					{this.props.item.brand}
				</p>
				<p className="item-name">
					{this.props.item.name}
				</p>
				<label className="item-price">
					{
						this.props.currency +
                    (this.props.getPrice(this.props.item) * this.props.item.quantity).toFixed(2)
					}
				</label>
				<div className="item-atts">
					{
						this.props.item.attributes.map(
							(att, i) =>
								<div key={i}>
									<label>{att.name}</label>
									<div className="cart-atts-cont">
										{
											att.type === 'swatch' ?
												att.items.map(
													(item, u) => 
														<div
															className={ 
																item.selected
																	? "cart-item-att selected-color"
																	: "cart-item-att"
															}
															key={u}
															style={{ background: item.value }}
														/>	
												)
												: att.type === 'text' ?
													att.items.map(
														(item, u) => 
															<div
																className={ 
																	item.selected
																		? "cart-item-att selected-att"
																		: "cart-item-att"
																}
																key={u}
															>
																{item.value}
															</div>
													)
													: null
										}
									</div>
								</div>
						)
					}
					{/* {
						this.props.item.selectedAtts.length > 0
							? this.props.item.selectedAtts.map(
								(att, i) =>
									att[0] === '#' && att.length === 7 ? 
										<div
											className="cart-selected-att"
											key={i}
											style={{ background: att }}
										/> : 
										<div className="cart-selected-att" key={i}>
											{att}
										</div>
							)
							: null
					} */}
				</div>
			</div>
		);
	}
}
