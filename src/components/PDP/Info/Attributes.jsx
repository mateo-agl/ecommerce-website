import React from 'react';

export default class Attributes extends React.Component {
	render () {
		return (
			<div id="attributes">
				{
					this.props.state.attributes.map(
						(obj, i) =>
							<section className="att" key={i}>
								<label className="att-name">{obj.name}</label>
								<div className="att-btns">
									{
										obj.type === 'text'
											? obj.items.map(
												(item, u) =>
													<span
														className={
															item.selected
																? 'text-btn selected-att'
																: 'text-btn'
														}
														key={u}
														onClick={ () => this.props.selectAttribute(obj, u) }
													>
														{item.value}
													</span>
											)
											: obj.type === 'swatch'
												? obj.items.map(
													(item, u) =>
														<span
															className={
																item.selected
																	? 'color-btn selected-color'
																	: 'color-btn'
															}
															key={u}
															style={{ background: item.value }}
															onClick={ () => this.props.selectAttribute(obj, u) }
														/>
												)
												: null
									}
								</div>
							</section>
					)
				}
			</div>
		);
	}
}
