import React from 'react';
import brand from '../../assets/brand-icon.svg';
import { Link } from 'react-router-dom';
import './header.css';
import Navbar from './Navbar';
import Actions from './Actions/Actions';

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
		window.onclick = (e) => {
			const currBtn = document.querySelector('#curr-btn');
			const minicart = document.querySelector('#minicart-cont');
			if (!e.path.includes(currBtn) && this.state.switch) {
				this.switcherHandler();
			} else if (!e.path.includes(minicart) && this.state.overlay) {
				this.miniCartHandler();
			}
		};
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
						category={this.props.category}
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
				<Actions
					cart={this.props.cart}
					changeCurrency={this.props.changeCurrency}
					currency={this.props.currency}
					decrease={this.props.decrease}
					getPrice={this.props.getPrice}
					increase={this.props.increase}
					miniCartHandler={this.miniCartHandler}
					overlay={this.state.overlay}
					removeFromCart={this.props.removeFromCart}
					switch={this.state.switch}
					switcherHandler={this.switcherHandler}
				/>
				<div
					className={
						this.state.overlay
							? 'visible'
							: 'invisible'
					}
					id="rectangle-2"
				/>
			</header>
		);
	}

	showMenu () {
		if (window.innerWidth < 1024) {
			this.setState({ show: !this.state.show });
			if (!this.state.show) {
				document.querySelector("body").className = "overflow-hidden";
			} else {
				document.querySelector("body").className = "";
			}
		}
	}

	miniCartHandler () {
		this.setState({ overlay: !this.state.overlay });
	}

	switcherHandler () {
		this.setState({ switch: !this.state.switch });
	}
}
