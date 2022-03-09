import React from 'react';

export default class Component extends React.Component {
	render () {
		return (
			<div className="content">
				<h5 className="name">
					{this.props.obj.brand + ' ' + this.props.obj.name}
				</h5>
				<label className="price">
					{ this.props.currency + this.props.getPrice(this.props.obj) }
				</label>
			</div>
		);
	}
}
