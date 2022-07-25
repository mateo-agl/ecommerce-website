import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	hover: false,
	num: '', 
	products: [],
	data: false
};

const plpSlice = createSlice({
	name: 'plp',
	initialState,
	reducers: {
		mouseIn(state, action) {
			return { ...state, num: action.payload, hover: true };
		},
    
		mouseOut(state) {
			return { ...state, num: '', hover: false };
		},

		setProducts(state, action) {
			return { ...state, products: action.payload, data: true };
		}
	}
});

export const { mouseIn, mouseOut, setProducts } = plpSlice.actions;
export default plpSlice.reducer;