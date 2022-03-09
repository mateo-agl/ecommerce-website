import React from "react";

export default class Info extends React.Component {
	render() {
		return (
			<div className="mc-item-info">
				<div className="mc-item-title">
					<label>{this.props.item.brand}</label>
					<label>{this.props.item.name}</label>
				</div>
				<label className="mc-item-price">
					{this.props.currency + (this.props.getPrice(this.props.item) * this.props.item.quantity).toFixed(2)}
				</label>
				<div className="mc-item-atts">
					{
						this.props.item.attributes.map(
							(att, i) =>
								<div key={i}>
									<label>{att.name}</label>
									<div className="atts-cont">
										{
											att.type === 'swatch' ?
												att.items.map(
													(item, u) => 
														<div
															className={ 
																item.selected
																	? "mc-item-color selected-color"
																	: "mc-item-color"
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
																		? "mc-item-att selected-att"
																		: "mc-item-att"
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
				</div>
			</div>
		);
	}
}