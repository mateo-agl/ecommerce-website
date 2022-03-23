import React from 'react';
import arrow from '../../../assets/arrow.svg';
import { currencies } from '../../../data.js';

export default class CurrSwitcher extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			currencies: currencies
		};
	}

	render () {
		return (
			<div id="curr-switcher">
				<div
					id="curr-btn"
					onClick={ () => this.props.switcherHandler() }
				>
					{this.props.currency}
					<img
						alt="arrow icon"
						className={
							this.state.switch
								? 'arrow-up'
								: ''
						}
						id="dropdown-icon"
						src={arrow}
					/>
				</div>
				<ul
					className={ this.props.switch ? 'visible' : 'invisible' }
					id="curr-dropdown"
				>
					{
						this.state.currencies.map(
							(obj, i) =>
								<li
									className="curr"
									key={i}
									onClick={this.props.changeCurrency}
								>
									{obj.symbol + ' ' + obj.label}
								</li>
						)
					}
				</ul>
			</div>
		);
	}
}
