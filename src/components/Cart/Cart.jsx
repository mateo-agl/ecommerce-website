import React from "react";
import arrow from "../../assets/img-arrow.svg";
import './cart.css';

export class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: false }
    }
    render() {
        if(!this.state.data) return "";
        return(
            <div id="cart-page">
                <h1 id="cart">Cart</h1>
                <ul id="cart-page-items">
                    {
                        this.props.cart.map(
                            (item, i) =>
                            <li 
                                className="cart-item"
                                key={i}
                            >
                                <div className="item-border"></div>
                                <div className="item-info">
                                    <p className="item-brand">
                                        {item.brand}
                                    </p>
                                    <p className="item-name">
                                        {item.name}
                                    </p>
                                    <label className="item-price">
                                        {
                                            this.props.currency
                                            +
                                            (this.props.getPrice(item) * item.quantity).toFixed(2)
                                        }
                                    </label>
                                    <div className="item-atts">
                                        {
                                            item.selectedAtts.length > 0 ?
                                            item.selectedAtts.map(
                                                (att, i) =>
                                                att[0] === "#" && att.length === 7 ? 
                                                    <div
                                                        className="cart-selected-att"
                                                        key={i}
                                                        style={{ background: att }}
                                                    /> :
                                                    <div className="cart-selected-att" key={i}>
                                                        {att}
                                                    </div>
                                            ) : null
                                        }
                                    </div>
                                </div>
                                <div className="quantity-control">
                                    <span 
                                        className="quantity-btn" 
                                        onClick={ () => this.props.increase(i) }
                                    >+</span>
                                    <label className="quantity">{item.quantity}</label>
                                    <span 
                                        className="quantity-btn"
                                        onClick={ () => this.props.decrease(i) }
                                    >-</span>
                                </div>
                                <div className="item-img">
                                    <img
                                        src={item.imgs[this.state.imgsIndexes[item.id]]}
                                        alt="product thumbnail"
                                    />
                                    <img 
                                        className="right-arrow"
                                        src={arrow}
                                        alt="right arrow"
                                        onClick={() => this.nextImg(item.imgs.length, item.id)}
                                    />
                                    <img 
                                        className="left-arrow"
                                        src={arrow}
                                        alt="left arrow"
                                        onClick={() => this.previousImg(item.id)}
                                    />
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
    nextImg(max, id) {
        if(this.state.imgsIndexes[id] + 1 < max) {
            let obj = this.state.imgsIndexes;
            obj[id] += 1;
            this.setState({ imgsIndexes: obj })
        }
    }

    previousImg(id) {
        if(this.state.imgsIndexes[id] > 0) {
            let obj = this.state.imgsIndexes;
            obj[id] -= 1;
            this.setState({ imgsIndexes: obj })
        }
    }

    componentDidMount() {
        const imgsIndexes = {};
        this.props.cart.map(item => imgsIndexes[item.id] = 0)
        this.setState({ imgsIndexes: imgsIndexes, data: true })
    }
}