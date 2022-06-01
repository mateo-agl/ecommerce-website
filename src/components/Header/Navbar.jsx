import axios from 'axios';
import React from 'react';

export default class Navbar extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			data: false
		};
	}
	render () {
		if (!this.state.data) return "";
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
	componentDidMount() {
		const url = process.env.NODE_ENV === "development"
			? "http://localhost:8080/categories"
			: "/categories";
		axios.get(url)
			.then(res => this.setState({ categories: res.data, data: true }))
			.catch(err => console.error(err));
	}
};
