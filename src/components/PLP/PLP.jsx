import React from 'react';
import Image from './Product/Image';
import Content from './Product/Content';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './plp.sass';

export class PLP extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			hover: false,
			num: '',
			data: false
		};
	}
	render () {
		if (!this.state.data) return "";
		return (
			<main id="category-cont">
				<h1 id="category">{this.props.category}</h1>
				<div id="products-cont">
					{
						this.state.products.map((obj, i) => (
							(this.props.category === "all" || this.props.category === obj.category) &&
							<div
								className="product"
								key={i}
								onMouseEnter={ () => this.mouseIn(i) }
								onMouseLeave={ () => this.mouseOut() }
							>
								<Link to={'/' + obj.id}>
									<div className="link"/>
								</Link>
								<Image
									addToCart={this.props.addToCart}
									hover={this.state.hover}
									i={i}
									num={this.state.num}
									obj={obj}
								/>
								<Content
									currency={this.props.currency}
									getPrice={this.props.getPrice}
									obj={obj}
								/>
							</div>
						))
					}
				</div>
			</main>
		);
	}

	mouseIn (i) {
		this.setState({ hover: true, num: i });
	}

	mouseOut () {
		this.setState({ hover: false, num: '' });
	}

	componentDidMount() {
		const url = process.env.NODE_ENV === "development"
			? "http://localhost:8080/products"
			: "/products";
		axios.get(url)
			.then(res => this.setState({ products: res.data, data: true }))
			.catch(err => console.error(err));
	}
};