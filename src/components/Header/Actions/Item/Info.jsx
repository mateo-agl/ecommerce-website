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
						this.props.item.attributes.map((att, i) => (
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
	}
}