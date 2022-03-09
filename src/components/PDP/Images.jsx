import React from 'react';

export default class Images extends React.Component {
	render () {
		return (
			<div id="imgs-col">
				{
					this.props.gallery.map(
						(img, i) =>
							<div
								className="imgs"
								key={i}
								onClick={ () => this.props.changeImg(img) }
							>
								<img
									alt={'product photo #' + i}
									src={img}
								/>
								<div className="imgs-rectangle"/>
							</div>
					)
				}
			</div>
		);
	}
}
