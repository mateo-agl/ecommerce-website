import React from "react";

export default class Img extends React.Component {
	render() {
		return (
			<div className="mc-item-img">
				<img alt={'product thumbnail'} src={this.props.img} />
			</div>
		);
	}
}