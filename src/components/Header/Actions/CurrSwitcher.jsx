import axios from 'axios';
import React from 'react';
import arrow from '../../../assets/arrow.svg';

export default class CurrSwitcher extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			data: false
		};

		this.hide = this.hide.bind(this);
	}

	render () {
		if(!this.state.data) return "";
		return (
			<div id="curr-switcher" tabIndex="-1" onBlur={this.hide}>
				<div
					className="btn"
					id="curr-btn"
					onClick={this.props.switcherHandler}
				>
					{this.props.currency + " "}
					<img
						alt="arrow icon"
						className={`arrow ${this.props.switch ? 'up' : ''}`}
						src={arrow}
					/>
				</div>
				<ul
					className={ this.props.switch ? 'visible' : 'invisible' }
					id="curr-dropdown"
				>
					{
						this.state.currencies.map((obj, i) => (
							<li
								className="curr btn"
								key={i}
								onClick={e => (
									this.props.changeCurrency(e),
									this.props.switcherHandler()
								)}
							>
								{obj.symbol + ' ' + obj.label}
							</li>
						))
					}
				</ul>
			</div>
		);
	}

	hide() {
		this.props.switch && this.props.switcherHandler();
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
