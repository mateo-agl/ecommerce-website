import React from "react";

export const Img = props => {
	return (
		<div className="mc-item-img">
			<img alt={'product thumbnail'} src={props.img} />
		</div>
	);
};