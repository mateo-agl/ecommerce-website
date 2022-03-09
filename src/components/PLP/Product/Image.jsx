import React from 'react';
import cart from '../../../assets/cart-icon2.svg';

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
					this.props.obj.inStock ? 
						<div
							className={
								this.props.hover &&
                        this.props.num === this.props.i
									? 'add-cart-btn visible'
									: 'add-cart-btn'
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
						>
							<img
								alt="add to cart icon"
								src={cart}
							/>
						</div> :
						false
				}
			</div>
		);
	}
}
