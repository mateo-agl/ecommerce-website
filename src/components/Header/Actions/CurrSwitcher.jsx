import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import arrow from '../../../assets/arrow.svg';
import { changeCurrency } from '../../../redux/reducers/appReducer';
import { hide, switcherHandler } from '../../../redux/reducers/headerReducer';

export const CurrSwitcher = ({ currencies, currSwitch, currency }) => {
	const dispatch = useDispatch();
	useEffect(() => dispatch({ type: "GET_CURRENCIES" }), []);
	return (
		<div id="curr-switcher" tabIndex="-1" onBlur={() => dispatch(hide(currSwitch))}>
			<div
				className="btn"
				id="curr-btn"
				onClick={() => dispatch(switcherHandler())}
			>
				{currency + " "}
				<img
					alt="arrow icon"
					className={`arrow ${currSwitch ? 'up' : ''}`}
					src={arrow}
				/>
			</div>
			<ul
				className={ currSwitch ? 'visible' : 'invisible' }
				id="curr-dropdown"
			>
				{
					currencies.map((obj, i) => (
						<li
							className="curr btn"
							key={i}
							onClick={e => (
								dispatch(changeCurrency(e.target.textContent)),
								dispatch(switcherHandler())
							)}
						>
							{obj.symbol + ' ' + obj.label}
						</li>
					))
				}
			</ul>
		</div>
	);	
};
