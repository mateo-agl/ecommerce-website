import { call, put } from "redux-saga/effects";
import { setCategories, setCurrencies } from "../reducers/headerReducer";
import { setProductData } from "../reducers/pdpReducer";
import { setProducts } from "../reducers/plpReducer";
import { getCategories, getProducts, getProductData, getCurrencies } from "../requests/requests";

function* handleGetCategories() {
	try {
		const response = yield call(getCategories);
		const { data } = response;
		yield put(setCategories(data));
	} catch (error) {
		console.error(error);
	}
}

function* handleGetProducts() {
	try {
		const response = yield call(getProducts);
		const { data } = response;
		yield put(setProducts(data));
	} catch (error) {
		console.error(error);
	}
}

function* handleGetProductData() {
	try {
		const response = yield call(getProductData);
		const { data } = response;
		yield put(setProductData(data));
	} catch (error) {
		console.error(error);
	}
}

function* handleGetCurrencies() {
	try {
		const response = yield call(getCurrencies);
		const { data } = response;
		yield put(setCurrencies(data));
	} catch (error) {
		console.error(error);
	}
}

export {
	handleGetCategories,
	handleGetProducts,
	handleGetProductData,
	handleGetCurrencies
};