import React from "react";
import { Field, Query, client } from "@tilework/opus";
import "./pdp.css";

export class PDP extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: false }
    }
    render() {
        if (!this.state.data) return "";
        return (
            <article id="product-desc">
                <div id="imgs-col">
                    {
                        this.state.gallery.map(
                            (img, i) =>
                            <div 
                                className="imgs" 
                                onClick={ () => this.changeImg(img) }
                                key={i}>
                                <img
                                    src={img} 
                                    alt={"product photo #" + i} 
                                />
                                <div className="imgs-rectangle"/>
                            </div>
                        )
                    }
                </div>
                <div id="content">
                    <div id="main-img">
                        <img 
                            src={ this.state.mainImg }
                            alt="product" 
                        />
                    </div>
                    <div id="info">
                        <h2 id="pdp-title">{this.state.brand}</h2>
                        <p id="subtitle">{this.state.name}</p>
                        <div id="attributes">
                            {
                                this.state.attributes.map(
                                    (obj, i) => 
                                    <section className="att" key={i}>
                                        <label className="att-name">{obj.name}</label>
                                        <div className="att-btns">
                                            {
                                                obj.type === "text" ?
                                                obj.items.map(
                                                    (item, u) => 
                                                    <span
                                                        className={
                                                            this.state.selectedAtts[i] === item.value ?
                                                                "text-btn selected-att" :
                                                                    "text-btn"
                                                            }
                                                        onClick={ () => this.selectAttribute(item, i) }
                                                        key={u}>
                                                        {item.value}
                                                    </span>
                                                ) : 
                                                obj.type === "swatch" ?
                                                obj.items.map(
                                                    (item, u) => 
                                                    <span 
                                                        className={
                                                            this.state.selectedAtts[i] === item.value ?
                                                                "color-btn selected-color" :
                                                                    "color-btn"
                                                            }
                                                        style={{ background: item.value }}
                                                        onClick={ () => this.selectAttribute(item, i) }
                                                        key={u}
                                                    />
                                                ) : null
                                            }
                                        </div>
                                    </section>
                                )
                            }
                        </div>
                        <div id="price-cont">
                            <label>PRICE:</label>
                            <p id="art-price">
                                { this.props.currency + this.props.getPrice(this.state) }
                            </p>
                        </div>
                        <div 
                            id={
                                this.state.inStock ?
                                "pdp-atc-btn" :
                                "no-stock"
                            }
                            onClick={ () => 
                                this.props.addToCart(this.state.id,
                                {
                                    id: this.state.id,
                                    brand: this.state.brand,
                                    name: this.state.name,
                                    prices: this.state.prices,
                                    selectedAtts: this.state.selectedAtts.slice(),
                                    quantity: 1,
                                    imgs: this.state.gallery
                                }) }
                        >
                            <span id="atc-label">ADD TO CART</span>
                        </div>
                        <div id="description" dangerouslySetInnerHTML={
                            {__html: this.state.description}
                            }
                        />
                    </div>
                </div>
            </article>
        )
    }
    changeImg(img) {
        this.setState({ mainImg: img })
    }

    selectAttribute(item, i) {
        let newSelec = this.state.selectedAtts;
        newSelec[i] = item.value;
        this.setState({ selectedAtts: newSelec })
    }

    componentDidMount() {
        const arg = window.location.pathname.split('/')[1];

        this.fetchPdpData(arg).then(response => {
            const defaultSelec =  response.product.attributes.map(
                (att) => att.items[0].value
            )

            this.setState({
                ...response.product,
                mainImg: response.product.gallery[0],
                selectedAtts: defaultSelec,
                data: true
            })
        }
        ).catch(e => console.error(e));
    }

    fetchPdpData(arg) {
        const pdpData = new Query("product")
        .addArgument('id', 'String!', arg)
        .addField("id")
        .addField("name")
        .addField("gallery", true)
        .addField("description")
        .addField("inStock")
        .addField(new Field("attributes", true)
            .addField("name")
            .addField("type")
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
        .addField("brand");
        return client.post(pdpData);
    }
}