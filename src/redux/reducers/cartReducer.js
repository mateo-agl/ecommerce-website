import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
	imgsIndexes: {},
	data: false
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		nextImg (state, action) {
			if (state.imgsIndexes[action.payload.id] < action.payload.max-1) {
				state.imgsIndexes[action.payload.id] += 1;
			}
		},
    
		previousImg (state, action) {
			if (state.imgsIndexes[action.payload] > 0) {
				state.imgsIndexes[action.payload] -= 1;
			}
		},
    
		setImgs (state, action) {
			action.payload.map(item => state.imgsIndexes[item.id] = 0);
			state.data = true;
		}
	}
});

export const { nextImg, previousImg, setImgs } = cartSlice.actions;
export default cartSlice.reducer;