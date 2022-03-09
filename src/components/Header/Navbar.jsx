import React from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../queries.js';

export default class Navbar extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			data: false
		};
	}

	render () {
		if (!this.state.data) return '';
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

	componentDidMount () {
		fetchCategories().then(response =>
			this.setState({
				categories: response.categories,
				data: true
			})
		).catch(e => console.error(e));
	}
}
