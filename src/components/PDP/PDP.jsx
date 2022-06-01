import React from 'react';
import './pdp.sass';
import Images from './Images.jsx';
import Info from './Info/Info.jsx';
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
					<Info
						addToCart={this.props.addToCart}
						currency={this.props.currency}
						getPrice={this.props.getPrice}
						selectAttribute={this.selectAttribute}
						state={this.state}
					/>
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