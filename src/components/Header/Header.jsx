import React from 'react';
import brand from '../../assets/brand-icon.svg';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { CurrSwitcher } from './Actions/CurrSwitcher';
import { Minicart } from './Actions/Minicart';
import { miniCartHandler, showMenu } from '../../redux/reducers/headerReducer';
import './header.sass';
import { useDispatch, useSelector } from 'react-redux';

export const Header = ({ getPrice }) => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();
	const { currency, cart, category } = state.appReducer;
	const { currencies, categories, overlay, show } = state.headerReducer;
	
	return (
		<header id="navbar-cont">
			<div className="ham-btn" onClick={() => dispatch(showMenu())}>
				<i className={show ? "hamburger active" : "hamburger"}/>
			</div>
			<div className={show ? "mobile-menu show" : "mobile-menu"}>
				<Navbar categories={categories} category={category} />
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
					currSwitch={state.headerReducer.switch}
					currencies={currencies}
					currency={currency}
				/>
				<Minicart
					cart={cart}
					currency={currency}
					getPrice={getPrice}
					overlay={overlay}
				/>
			</div>
			<div
				className={overlay ? 'visible' : 'invisible'} 
				id="rectangle-2"
				onClick={() => dispatch(miniCartHandler())}
			/>
		</header>
	);
};
