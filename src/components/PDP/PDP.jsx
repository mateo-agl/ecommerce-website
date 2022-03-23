import React from 'react';
import { products } from '../../data.js';
import './pdp.css';
import Images from './Images.jsx';
import Info from './Info/Info.jsx';

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
		this.setState({ mainImg: img });
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
		const id = window.location.pathname.split('/')[2];
		
		if(id) {
			const product = products.find(p => p.id === id);

			const defaultSelec = product.attributes.map(
				att => {
					const items = [];
					att.items.map(
						(item, i) => i === 0
							? items.push({...item, selected: true})
							: items.push({...item, selected: false})
					);
					return { ...att, items };
				}
			);

			this.setState({
				...product,
				attributes: defaultSelec,
				mainImg: product.gallery[0],
				data: true
			});
		}
	}
}