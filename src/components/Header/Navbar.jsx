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
										? 'nav-item active'
										: 'nav-item'
								}
								key={i}
								onClick={this.props.changeCategory}
							>
								{ obj.name }
								<div
									className={
										obj.name === this.props.category
											? 'border'
											: ''
									}
								/>
							</label>
					)
				}
			</nav>
		);
	}
}
