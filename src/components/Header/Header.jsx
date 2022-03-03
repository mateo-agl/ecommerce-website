import React from "react";
import brand from '../../assets/brand-icon.svg';
import cart from '../../assets/cart-icon.svg';
import arrow from '../../assets/arrow.svg';
import { Link } from "react-router-dom";
import { Query, client } from "@tilework/opus";
import deleteIcon from "../../assets/close.svg";
import './header.css';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: false,
            overlay: false,
            data: false
        }
    }
    render() {
        if (!this.state.data) return "";

        window.onclick = (e) => {
            const currCont = document.querySelector("#curr-switcher");
            return !e.path.includes(currCont) ?
                        this.state.switch ?
                            this.switchCurrency()
                        : null
                    : null
        }
        return (
            <header id="navbar-cont">
                <nav id="navbar">
                    {
                        this.state.categories.map(
                            (obj, i) => 
                            <label 
                                onClick={this.props.changeCategory} 
                                key={i} 
                                className={
                                        obj.name === this.props.category ?
                                        'nav-item active' : 'nav-item'
                                    }
                            >
                                { obj.name }
                                <div 
                                    className={
                                            obj.name === this.props.category ?
                                            'border' : ''
                                        }
                                    />
                            </label>
                        )
                    }
                </nav>
                <Link to="/">
                    <img
                        id="brand-icon"
                        src={brand}
                        alt="brand icon"
                    />
                </Link>
                <div id="actions">
                    <div id="curr-switcher">
                        <div
                            id="curr-btn"
                            onClick={ () => this.switchCurrency() }
                        >
                            {this.props.currency}
                            <img
                                id="dropdown-icon"
                                className={
                                    this.state.switch ?
                                    "arrow-up" :
                                    ""
                                }
                                src={arrow}
                                alt="arrow icon"/>
                        </div>
                        <ul 
                            id="curr-dropdown"
                            className={ this.state.switch ? "visible" : "invisible" }>
                            {
                                this.state.currencies.map(
                                    (obj, i) =>
                                    <li 
                                        key={i}
                                        className="curr"
                                        onClick={this.props.changeCurrency}
                                    >
                                        {obj.symbol + ' ' + obj.label}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div id="minicart-cont">
                        <div
                            id="minicart-btn"
                            onClick={ () => this.miniCartHandler() }
                        >
                            <img src={cart} alt="cart icon"/>
                            <div 
                                id="quantity-badge" 
                                className={
                                    this.props.cart.length > 0 ?
                                        "visible" : "invisible"
                                }
                            >
                                {this.getTotalQuantity()}
                            </div>
                        </div>
                        <div 
                            id="minicart"
                            className={ this.state.overlay ? "visible" : "invisible" }
                        >                            
                            <div>
                                <label id="my-bag">My bag</label>
                                <label>{", " + this.props.cart.length + " items"}</label>
                            </div>
                            <ul id="minicart-items">
                                {
                                    this.props.cart.map(
                                        (item, i) =>
                                        <li 
                                            className="minicart-item"
                                            key={i}
                                        >
                                            <div className="mc-item-info">
                                                <div className="mc-item-title">
                                                    <label>
                                                        {item.brand}
                                                    </label>
                                                    <label>
                                                        {item.name}
                                                    </label>
                                                </div>
                                                <label className="mc-item-price">
                                                    {
                                                        this.props.currency
                                                        +
                                                        (this.props.getPrice(item) * item.quantity).toFixed(2)
                                                    }
                                                </label>
                                                <div className="mc-item-atts">
                                                    {
                                                        item.selectedAtts.length > 0 ?
                                                        item.selectedAtts.map(
                                                            (att, i) =>
                                                            att[0] === "#" && att.length === 7 ? 
                                                                <div
                                                                    className="mc-item-att"
                                                                    key={i}
                                                                    style={{ background: att }}
                                                                /> :
                                                                <div className="mc-item-att" key={i}>
                                                                    {att}
                                                                </div>
                                                        ) : null
                                                    }
                                                </div>
                                            </div>
                                            <div className="mc-quant-control">
                                                <span 
                                                    className="mc-quant-btn" 
                                                    onClick={ () => this.props.increase(i) }
                                                >+</span>
                                                <label className="mc-quant-num">{item.quantity}</label>
                                                <span 
                                                    className="mc-quant-btn"
                                                    onClick={ () => this.props.decrease(i) }
                                                >-</span>
                                            </div>
                                            <div className="mc-item-img">
                                                <img src={item.imgs[0]} alt={"product thumbnail"} />
                                            </div>
                                            <img 
                                                className="delete"
                                                src={deleteIcon}
                                                alt="delete icon"
                                                onClick={() => this.props.removeFromCart(i)}
                                            />
                                        </li>
                                    )
                                }
                            </ul>
                            <div id="mc-total-cont">
                                <label id="mc-total-label">Total</label>        
                                <label id="mc-total-amount">{this.getTotalAmount()}</label>
                            </div>
                            <div id="dropdown-btns">
                                <Link id="view-bag" to="/cart">
                                    <span>VIEW BAG</span>
                                </Link>
                                <span id="checkout">CHECKOUT</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="rectangle-2"
                    className={
                        this.state.overlay ?
                        "visible" : "invisible"
                    }
                />
            </header>
        )
    }
    getTotalQuantity() {
        let total = 0;
        this.props.cart.map(obj => total += obj.quantity)
        return total;
    }

    miniCartHandler() {
        this.setState({ overlay: !this.state.overlay })
    }

    switchCurrency() {
        this.setState({ switch: !this.state.switch })
    }

    getTotalAmount() {
        let total = 0;

        this.props.cart.map(
            (obj) => {
                const amount = this.props.getPrice(obj) * obj.quantity;
                total += amount;
            }   
        )
        return this.props.currency + total.toFixed(2);
    }

    componentDidMount() {
        this.fetchCategories().then(response => 
            this.setState({
                categories: response.categories
            })  
        ).catch(e => console.error(e));
    
        this.fetchCurrencies().then(response =>
            this.setState({
                currencies: response.currencies,
                data: true
            })
        ).catch(e => console.error(e));
    }

    fetchCategories() {
        const categoryQuery = new Query("categories", true)
        .addField("name");
    
        return client.post(categoryQuery);
    }
      
    fetchCurrencies() {
        const currQuery = new Query("currencies", true)
        .addField("label")
        .addField("symbol");
    
        return client.post(currQuery);
    }
}