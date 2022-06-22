import React from 'react';

export default class Info extends React.Component {
	render () {
		return (
			<div className="item-info">
				<p className="item-name-brand">
					<b>{this.props.item.brand}</b><br/>
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
						this.props.item.attributes.map((att, i) => (
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
	}
}
