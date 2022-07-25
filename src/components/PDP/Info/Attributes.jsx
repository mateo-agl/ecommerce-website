import React from 'react';
import { useDispatch } from 'react-redux';
import { selectAttribute } from '../../../redux/reducers/pdpReducer';

export const Attributes = ({ state }) => {
	const dispatch = useDispatch();
	return (
		<div id="attributes">
			{
				state.attributes.map(
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
															? 'text-att btn selected-att'
															: 'text-att btn'
													}
													key={u}
													onClick={ () => dispatch(selectAttribute({attIndex: i, itemIndex: u})) }
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
																? 'color-att btn selected-color'
																: 'color-att btn'
														}
														key={u}
														style={{ background: item.value }}
														onClick={ () => dispatch(selectAttribute({attIndex: i, itemIndex: u})) }
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
};
