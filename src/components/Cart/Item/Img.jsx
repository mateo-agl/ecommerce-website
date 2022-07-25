import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Arrow } from '../../../assets/img-arrow.svg';
import { nextImg, previousImg, setImgs } from '../../../redux/reducers/cartReducer';

export const Img = ({ cart, item }) => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(setImgs(cart)), []);
	const { imgsIndexes } = useSelector(state => state.cartReducer);
	return (
		<div className="item-img">
			<img
				alt="product thumbnail"
				src={item.imgs[imgsIndexes[item.id]]}
			/>
			<Arrow
				alt="right arrow"
				className="right-arrow"
				onClick={() => dispatch(nextImg({max: item.imgs.length, id: item.id}))}
			/>
			<Arrow
				alt="left arrow"
				className="left-arrow"
				onClick={() => dispatch(previousImg(item.id))}
			/>
		</div>
	);
};
