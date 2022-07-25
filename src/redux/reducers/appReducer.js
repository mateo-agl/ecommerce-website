import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currency: '$',
	category: 'all',
	cart: []
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		increase (state, action) {
			state.cart[action.payload].quantity += 1;
		},

		decrease (state, action) {
			if (state.cart[action.payload].quantity >= 2) {
				state.cart[action.payload].quantity -= 1;
			}
		},

		removeFromCart (state, action) {
			state.cart.splice(action.payload, 1);
			localStorage.setItem("cart", JSON.stringify(state.cart));
		},

		addToCart (state, action) {
			let cart = state.cart;
			const newProduct = action.payload;
			const prevProduct = cart.findIndex(product => 
				product.id === newProduct.id &&
				product.attributes.every((att, i) => 
					att.items.every((item, u) => 
						item.selected === newProduct.attributes[i].items[u].selected
					)
				)
			);
			if (prevProduct >= 0) {
				cart[prevProduct].quantity += 1;
			} else {
				newProduct.quantity = 1;
				cart.push(newProduct);
			}

			localStorage.setItem("cart", JSON.stringify(cart));
		},

		changeCategory (state, action) {
			return { ...state, category: action.payload };
		},

		changeCurrency (state, action) {
			return { ...state, currency: action.payload.split(' ')[0] };
		},

		setCartItems (state) {
			const savedItems = localStorage.getItem("cart");
			if (savedItems) {
				return { ...state, cart: JSON.parse(savedItems) };
			};
		}
	}
});

export const {
	increase,
	decrease,
	removeFromCart,
	addToCart,
	changeCategory,
	changeCurrency,
	setCartItems
} = appSlice.actions;
export default appSlice.reducer;