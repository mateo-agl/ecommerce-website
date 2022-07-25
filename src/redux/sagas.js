import { takeEvery } from "redux-saga/effects";
import {
	handleGetCategories,
	handleGetProducts,
	handleGetProductData,
	handleGetCurrencies
} from "./actionHandlers/handlers";

export function* mySaga() { 
	yield takeEvery("GET_PRODUCTS", handleGetProducts);
	yield takeEvery("GET_PRODUCT_DATA", handleGetProductData);
	yield takeEvery("GET_CATEGORIES", handleGetCategories);
	yield takeEvery("GET_CURRENCIES", handleGetCurrencies);
};

export default mySaga;