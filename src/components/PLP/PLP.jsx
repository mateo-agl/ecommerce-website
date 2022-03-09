import React from 'react';
import { fetchProducts } from '../../queries.js';
import Product from './Product/Product.jsx';
import './plp.css';

export class PLP extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			data: false
		};
	}

	render () {
		if (!this.state.data) return '';
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

	componentDidMount () {
		fetchProducts().then(response => {
			const products = response.category.products.map(obj => {
				return {
					...obj,
					attributes: obj.attributes.map(
						att => {
							const items = [];
							att.items.map(
								(item, i) => i === 0
									? items.push({...item, selected: true})
									: items.push({...item, selected: false})
							);
							return { ...att, items };
						}
					)
				};
			}
			);
			this.setState({
				products: products,
				data: true
			});
		}
		).catch(e => console.error(e));
	}
}
