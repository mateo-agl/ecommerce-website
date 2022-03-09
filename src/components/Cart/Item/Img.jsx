import React from 'react';
import arrow from '../../../assets/img-arrow.svg';

export default class Img extends React.Component {
	constructor (props) {
		super(props);
		this.state = { data: false };
	}

	render () {
		if (!this.state.data) return '';
		return (
			<div className="item-img">
				<img
					alt="product thumbnail"
					src={this.props.item.imgs[this.state.imgsIndexes[this.props.item.id]]}
				/>
				<img
					alt="right arrow"
					className="right-arrow"
					src={arrow}
					onClick={() => this.nextImg(this.props.item.imgs.length, this.props.item.id)}
				/>
				<img
					alt="left arrow"
					className="left-arrow"
					src={arrow}
					onClick={() => this.previousImg(this.props.item.id)}
				/>
			</div>
		);
	}

	nextImg (max, id) {
		if (this.state.imgsIndexes[id] + 1 < max) {
			const obj = this.state.imgsIndexes;
			obj[id] += 1;
			this.setState({ imgsIndexes: obj });
		}
	}

	previousImg (id) {
		if (this.state.imgsIndexes[id] > 0) {
			const obj = this.state.imgsIndexes;
			obj[id] -= 1;
			this.setState({ imgsIndexes: obj });
		}
	}

	componentDidMount () {
		const imgsIndexes = {};
		this.props.cart.map(item => imgsIndexes[item.id] = 0);
		this.setState({ imgsIndexes: imgsIndexes, data: true });
	}
}
