import React, { useEffect } from 'react';
import './pdp.sass';
import { Images } from './Images.jsx';
import { Price } from './Info/Price';
import { Attributes } from './Info/Attributes';
import { AddToCart } from './Info/AddToCart';
import { Description } from './Info/Description';
import { useDispatch, useSelector } from 'react-redux';

export const PDP = ({ getPrice }) => {
	const { pdpReducer, appReducer } = useSelector(state => state);
	const dispatch = useDispatch();
	useEffect(() => dispatch({ type: "GET_PRODUCT_DATA" }), []);
	return (
		pdpReducer.data && 
		<article id="product-desc">
			<div id="content">
				<Images gallery={pdpReducer.gallery}/>
				<div id="main-img">
					<img
						alt="product"
						src={ pdpReducer.mainImg }
					/>
				</div>
				<div id="info">
					<h2 id="pdp-title">{pdpReducer.brand}</h2>
					<p id="subtitle">{pdpReducer.name}</p>
					<Attributes state={pdpReducer}/>
					<Price
						currency={appReducer.currency}
						getPrice={getPrice}
						state={pdpReducer}
					/>
					<AddToCart state={pdpReducer}/>
					<Description description={pdpReducer.description}/>
				</div>
			</div>
		</article>
	);
};