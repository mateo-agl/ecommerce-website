import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Cart } from '../../../assets/cart-icon2.svg';
import { addToCart } from '../../../redux/reducers/appReducer';

export const Image = ({ obj, hover, num, i }) => {
	const dispatch = useDispatch();
	return (
		<div className="image-cont">
			<div className={ !obj.inStock ? 'out-of-stock visible' : 'out-of-stock' }>
				<span>OUT OF STOCK</span>
			</div>
			<img
				alt="product thumbnail"
				className="image"
				src={obj.gallery[0]}
			/>
			{
				obj.inStock && 
					<Cart
						alt="add to cart icon"
						className={ `add-cart-btn ${hover && num === i && "visible"}` }
						onClick={ () => dispatch(
							addToCart({
								id: obj.id,
								brand: obj.brand,
								name: obj.name,
								prices: obj.prices,
								attributes: obj.attributes,
								imgs: obj.gallery
							})
						)}
					/>
			}
		</div>
	);
};
