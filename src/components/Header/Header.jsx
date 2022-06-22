import React from 'react';
import brand from '../../assets/brand-icon.svg';
import { Link } from 'react-router-dom';
import './header.sass';
import Navbar from './Navbar';
import CurrSwitcher from './Actions/CurrSwitcher';
import Minicart from './Actions/Minicart';

export class Header extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			overlay: false,
			switch: false,
			show: false
		};
		this.showMenu = this.showMenu.bind(this);
		this.miniCartHandler = this.miniCartHandler.bind(this);
		this.switcherHandler = this.switcherHandler.bind(this);
	}
	
	render () {
		const { currency, cart, category } = this.props.state;
		return (
			<header id="navbar-cont">
				<div 
					className="ham-btn"
					onClick={this.showMenu}
				>
					<i className={this.state.show ? "hamburger active" : "hamburger"}/>
				</div>
				<div className={this.state.show ? "mobile-menu show" : "mobile-menu"}>
					<Navbar
						category={category}
						changeCategory={this.props.changeCategory}
						showMenu={this.showMenu}
					/>
				</div>
				<Link to="/">
					<img
						alt="brand icon"
						id="brand-icon"
						src={brand}
					/>
				</Link>
				<div id="actions">
					<CurrSwitcher
						changeCurrency={this.props.changeCurrency}
						currency={currency}
						switch={this.state.switch}
						switcherHandler={this.switcherHandler}
					/>
					<Minicart
						cart={cart}
						currency={currency}
						decrease={this.props.decrease}
						getPrice={this.props.getPrice}
						increase={this.props.increase}
						item={this.props.item}
						miniCartHandler={this.miniCartHandler}
						overlay={this.state.overlay}
						removeFromCart={this.props.removeFromCart}
					/>
				</div>
				<div
					className={this.state.overlay ? 'visible' : 'invisible'} 
					id="rectangle-2"
					onClick={() => this.miniCartHandler()}
				/>
			</header>
		);
	}

	showMenu () {
		if (window.innerWidth < 1024) {
			this.setState({ show: !this.state.show });
			document.querySelector("body").className = !this.state.show ? "overflow-hidden" : "";
		}
	}

	miniCartHandler () {
		this.setState({ overlay: !this.state.overlay });
	}

	switcherHandler () {
		this.setState({ switch: !this.state.switch });
	}
};
