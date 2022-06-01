import axios from 'axios';
import React from 'react';
import arrow from '../../../assets/arrow.svg';

export default class CurrSwitcher extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			data: false
		};
	}

	render () {
		if(!this.state.data) return "";
		return (
			<div id="curr-switcher">
				<div
					className="btn"
					id="curr-btn"
					onClick={ () => this.props.switcherHandler() }
				>
					{this.props.currency + " "}
					<img
						alt="arrow icon"
						className={
							this.props.switch
								? 'arrow-up'
								: ''
						}
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
									className="curr btn"
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
	componentDidMount() {
		const url = process.env.NODE_ENV === "development"
			? "http://localhost:8080/currencies"
			: "/currencies";
		axios.get(url)
			.then(res => this.setState({ currencies: res.data, data: true }))
			.catch(err => console.error(err));
	}
};
