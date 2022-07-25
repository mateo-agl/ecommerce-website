import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	overlay: false,
	switch: false,
	show: false,
	currencies: [],
	categories: []
};

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		showMenu (state) {
			if (window.innerWidth < 1024) {
				document.querySelector("body").className = !state.show ? "overflow-hidden" : "";
				return { ...state, show: !state.show };
			}
		},
    
		miniCartHandler (state) {
			return { ...state, overlay: !state.overlay };
		},
    
		switcherHandler (state) {
			return { ...state, switch: !state.switch };
		},
        
		hide(state) {
			if(state.switch) {
				return { ...state, switch: false };
			}
		},
    
		setCurrencies(state, action) {
			return { ...state, currencies: action.payload };
		},

		setCategories(state, action) {
			return { ...state, categories: action.payload };
		},
	}
});

export const { 
	showMenu,
	miniCartHandler,
	switcherHandler,
	setCategories,
	hide,
	setCurrencies
} = headerSlice.actions;
export default headerSlice.reducer;