import React from 'react';
import { ReactComponent as Cart } from '../../../assets/cart-icon2.svg';

export default class Image extends React.Component {
	render () {
		return (
			<div className="image-cont">
				<div className={
					!this.props.obj.inStock
						? 'out-of-stock visible'
						: 'out-of-stock'
				}
				>
					<span>OUT OF STOCK</span>
				</div>
				<img
					alt="product thumbnail"
					className="image"
					src={this.props.obj.gallery[0]}
				/>
				{
					this.props.obj.inStock && 
						<Cart
							alt="add to cart icon"
							className={
								`add-cart-btn ${this.props.hover && this.props.num === this.props.i && "visible"}`
							}
							onClick={ () =>
								this.props.addToCart(this.props.obj.id,
									{
										id: this.props.obj.id,
										brand: this.props.obj.brand,
										name: this.props.obj.name,
										prices: this.props.obj.prices,
										attributes: this.props.obj.attributes,
										imgs: this.props.obj.gallery
									}
								) }
						/>
				}
			</div>
		);
	}
}
