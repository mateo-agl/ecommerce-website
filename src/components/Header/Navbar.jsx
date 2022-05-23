import React from 'react';
import { categories } from '../../data.js';

export default class Navbar extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			categories: categories
		};
	}
	render () {
		return (
			<nav id="navbar">
				{
					this.state.categories.map(
						(obj, i) =>
							<label 
								className={
									obj.name === this.props.category
										? 'nav-item btn active'
										: 'nav-item btn'
								}
								key={i}
								onClick={e => {
									this.props.changeCategory(e);
									this.props.showMenu();
								}}
							>
								{ obj.name }
							</label>
					)
				}
			</nav>
		);
	}
}
