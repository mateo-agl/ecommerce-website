import React from "react";
import { Header, PLP, Cart, PDP } from "./components";
import { Routes, Route } from "react-router-dom";
import { client } from "@tilework/opus";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "$",
      category: "all",
      cart: []
    }
    this.getPrice = this.getPrice.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
  }
  render() {
    client.setEndpoint("http://localhost:4000/");
    return (
      <div id="container">
        <Header
          currency={this.state.currency}
          changeCurrency={this.changeCurrency}
          category={this.state.category}
          changeCategory={this.changeCategory}
          cart={this.state.cart}
          increase={this.increase}
          decrease={this.decrease}
          getPrice={this.getPrice}
          removeFromCart={this.removeFromCart}
        />
        <Routes>
          <Route path="/">
            <Route index element={
                <PLP
                  currency={this.state.currency}
                  category={this.state.category}
                  addToCart={this.addToCart}
                  getPrice={this.getPrice}
                />
              }
            />
            <Route path="/:id" element={
                <PDP 
                  currency={this.state.currency}
                  addToCart={this.addToCart}
                  getPrice={this.getPrice}
                  cart={this.state.cart}
                />
              }
            />
            <Route path="/cart" element={
                <Cart
                  currency={this.state.currency}
                  cart={this.state.cart}
                  increase={this.increase}
                  decrease={this.decrease}
                  getPrice={this.getPrice}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    );
  }

  getPrice(obj) {
    const price = obj.prices.find(
      p => 
      p.currency.symbol === this.state.currency
    )
    if (!price) return 0;
    return price.amount;
  }

  increase(i) {
    const cart = this.state.cart;

    cart[i].quantity += 1

    this.setState({
      cart: cart
    })
  }

  decrease(i) {
    const cart = this.state.cart;

    if(cart[i].quantity >= 2) {
      cart[i].quantity -= 1

      this.setState({
        cart: cart
      })
    }
  }

  removeFromCart(i) {
    let cart = this.state.cart;
    cart.splice(i, 1);
    this.setState({ cart: cart })
  }

  addToCart(id, product) {
    if(!this.state.cart.find(p => p.id === id)) {
      this.setState({ cart: [...this.state.cart, product] })
    }
  }

  changeCategory(e) {
    const category = e.target.textContent;

    this.setState({
      category: category
    })
  }

  changeCurrency(e) {
    const curr = e.target.textContent.split(" ")[0];

    this.setState({ currency: curr })
  }
}
