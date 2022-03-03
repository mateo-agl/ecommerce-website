import React from "react";
import cart from "../../assets/cart-icon2.svg";
import { Link } from "react-router-dom";
import { Field, Query, client } from "@tilework/opus";
import "./plp.css";

export class PLP extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hover: false,
            key: "",
            data: false
        }
    }
    render() {
        if (!this.state.data) return "";
        return(
            <main id="category-cont">
                <h1 id="category">{this.props.category}</h1>
                <div id="products-cont">
                    {
                        this.state.products.map(
                            (obj, i) =>
                            this.props.category === "all" ||
                            this.props.category === obj.category ? 
                                <div
                                    className="product"
                                    onMouseEnter={ () => this.mouseIn(i) }
                                    onMouseLeave={ () => this.mouseOut }
                                    key={i}
                                >
                                    <Link to={"/" + obj.id}>
                                        <div className="link"/>
                                    </Link>
                                    <div className="image-cont">
                                        <div className={
                                            !obj.inStock ? 
                                            "out-of-stock visible" : "out-of-stock"
                                            }
                                        >
                                            <span>OUT OF STOCK</span>
                                        </div>
                                        <img
                                            className="image"
                                            src={obj.gallery[0]}
                                            alt="product thumbnail"
                                        />
                                        {
                                            obj.inStock ?
                                            <div 
                                                className={
                                                    this.state.hover &&
                                                    this.state.key === i ?
                                                    "add-cart-btn visible" :
                                                    "add-cart-btn"
                                                }
                                                onClick={ () => 
                                                    this.props.addToCart(obj.id,
                                                        {
                                                            id: obj.id,
                                                            brand: obj.brand,
                                                            name: obj.name,
                                                            prices: obj.prices,
                                                            selectedAtts: obj.selectedAtts,
                                                            quantity: 1,
                                                            imgs: obj.gallery
                                                        }
                                                    ) }
                                            >
                                                <img 
                                                    src={cart}
                                                    alt="add to cart icon"
                                                />
                                            </div> : false
                                        }
                                    </div>
                                    <div className="content">
                                        <h5 className="name">{obj.brand + " " + obj.name}</h5>
                                        <label className="price">
                                            { this.props.currency + this.props.getPrice(obj) }
                                        </label>
                                    </div>
                                </div>
                            : false
                        )
                    }
                </div>
            </main>
        )
    }
    mouseIn(i) {
        this.setState({ hover: true, key: i });
    }

    mouseOut() {
        this.setState({ hover: false, key: "" });
    }

    componentDidMount() {
        this.fetchProducts().then(response => {
            const products = response.category.products.map(obj => {
                    return {
                        ...obj,
                        selectedAtts: obj.attributes.map(
                            att => att.items[0].value
                        )
                    }
                }
            )
            this.setState({
                products: products,
                data: true
            })}
        ).catch(e => console.error(e))
    }

    fetchProducts() {
        const productQuery = new Query("category")
        .addField(new Field("products", true)
            .addField("id")
            .addField("name")
            .addField("inStock")
            .addField("gallery", true)
            .addField("category")
            .addField(new Field("attributes", true)
                .addField("name")
                .addField(new Field("items", true)
                    .addField("value")
                )
            )
            .addField(new Field("prices", true)
                .addField(new Field("currency")
                    .addField("symbol")
                )
                .addField("amount")
            )
            .addField("brand")
        );
        return client.post(productQuery);
    }
}