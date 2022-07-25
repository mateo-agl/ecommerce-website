import React, { useEffect } from 'react';
import { Content } from './Product/Content';
import { Image } from './Product/Image';
import { Link } from 'react-router-dom';
import './plp.sass';
import { useDispatch, useSelector } from 'react-redux';
import { mouseIn, mouseOut } from '../../redux/reducers/plpReducer';

export const PLP = ({ getPrice }) => {
	const { plpReducer, appReducer } = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => dispatch({type: "GET_PRODUCTS"}), []);

	return (
		<main id="category-cont">
			<h1 id="category">{appReducer.category}</h1>
			<div id="products-cont">
				{
					plpReducer.products.map((obj, i) => (
						(appReducer.category === "all" || appReducer.category === obj.category) &&
						<div
							className="product"
							key={i}
							onMouseEnter={ () => dispatch(mouseIn(i)) }
							onMouseLeave={ () => dispatch(mouseOut()) }
						>
							<Link to={'/' + obj.id}>
								<div className="link"/>
							</Link>
							<Image
								hover={plpReducer.hover}
								i={i}
								num={plpReducer.num}
								obj={obj}
							/>
							<Content
								currency={appReducer.currency}
								getPrice={getPrice}
								obj={obj}
							/>
						</div>
					))
				}
			</div>
		</main>
	);
};
