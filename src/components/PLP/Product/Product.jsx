import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image.jsx';
import Content from './Content.jsx';

export default class Product extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			hover: false,
			num: ''
		};
	}

	render () {
		return (
			<div
				className="product"
				key={this.props.i}
				onMouseEnter={ () => this.mouseIn(this.props.i) }
				onMouseLeave={ () => this.mouseOut() }
			>
				<Link to={'/' + this.props.obj.id}>
					<div className="link"/>
				</Link>
				<Image
					addToCart={this.props.addToCart}
					hover={this.state.hover}
					i={this.props.i}
					num={this.state.num}
					obj={this.props.obj}
				/>
				<Content
					currency={this.props.currency}
					getPrice={this.props.getPrice}
					obj={this.props.obj}
				/>
			</div>
		);
	}

	mouseIn (i) {
		this.setState({ hover: true, num: i });
	}

	mouseOut () {
		this.setState({ hover: false, num: '' });
	}
}
