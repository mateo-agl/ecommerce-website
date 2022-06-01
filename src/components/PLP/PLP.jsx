import React from 'react';
import Product from './Product/Product.jsx';
import axios from 'axios';
import './plp.sass';

export class PLP extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
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
						this.state.products.map(
							(obj, i) =>
								this.props.category === 'all' ||
							this.props.category === obj.category
									? <Product
										addToCart={this.props.addToCart}
										currency={this.props.currency}
										getPrice={this.props.getPrice}
										i={i}
										key={i}
										obj={obj}
									  />
									: false
						)
					}
				</div>
			</main>
		);
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