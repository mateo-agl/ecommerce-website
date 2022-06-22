import React from 'react';
import './pdp.sass';
import Images from './Images.jsx';
import Price from './Info/Price';
import Attributes from './Info/Attributes';
import AddToCart from './Info/AddToCart';
import Description from './Info/Description';
import axios from 'axios';

export class PDP extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			data: false
		};
		this.changeImg = this.changeImg.bind(this);
		this.selectAttribute = this.selectAttribute.bind(this);
	}
	
	render () {
		if (!this.state.data) return "";
		return (
			<article id="product-desc">
				<div id="content">
					<Images
						changeImg={this.changeImg}
						gallery={this.state.gallery}
					/>
					<div id="main-img">
						<img
							alt="product"
							src={ this.state.mainImg }
						/>
					</div>
					<div id="info">
						<h2 id="pdp-title">{this.state.brand}</h2>
						<p id="subtitle">{this.state.name}</p>
						<Attributes
							selectAttribute={this.selectAttribute}
							state={this.state}
						/>
						<Price
							currency={this.props.currency}
							getPrice={this.props.getPrice}
							state={this.state}
						/>
						<AddToCart
							addToCart={this.props.addToCart}
							state={this.state}
						/>
						<Description
							description={this.state.description}
						/>
					</div>
				</div>
			</article>
		);
	}

	changeImg (img) {
		window.innerWidth > 1024
			? this.setState({ mainImg: img })
			: false;
	}

	selectAttribute (att, itemIndex) {
		att.items.map((obj, i) => 
			i === itemIndex
				? att.items[i].selected = true
				: att.items[i].selected = false
		);
		this.setState({ attributes: this.state.attributes });
	}

	componentDidMount() {
		const id = window.location.pathname.split('/')[1];
		const url = process.env.NODE_ENV === "development"
			? `http://localhost:8080/products?id=${id}`
			: `/products?id=${id}`;
		axios.get(url)
			.then(res => this.setState({
				...res.data,
				mainImg: res.data.gallery[0],
				data: true
			}))
			.catch(err => console.error(err));
	}
}