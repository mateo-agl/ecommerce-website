import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
	data: false
};

const pdpSlice = createSlice({
	name: 'pdp',
	initialState,
	reducers: {
		changeImg (state, action) {
			if(window.innerWidth > 1024)
				return { ...state, mainImg: action.payload };
		},
    
		selectAttribute (state, action) {
			const { attIndex, itemIndex } = action.payload;
			state.attributes[attIndex].items.map((obj, i) => 
				obj.selected = i === itemIndex ? true : false
			);
		},
    
		setProductData(state, action) {
			return {
				...action.payload,
				mainImg: action.payload.gallery[0],
				data: true
			};
		}
	}
});

export const { changeImg, selectAttribute, setProductData } = pdpSlice.actions;
export default pdpSlice.reducer;