import React from 'react';
import { useDispatch } from 'react-redux';
import { changeImg } from '../../redux/reducers/pdpReducer';

export const Images = ({ gallery }) => {
	const dispatch = useDispatch();
	return (
		<div id="imgs-col">
			{
				gallery.map(
					(img, i) =>
						<div
							className="imgs"
							key={i}
							onClick={ () => dispatch(changeImg(img)) }
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
};
