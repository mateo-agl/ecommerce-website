import axios from "axios";

const getCategories = () => {
	const url = process.env.NODE_ENV === "development"
		? "http://localhost:8080/categories"
		: "/categories";
	return axios.get(url);
};

const getProducts = () => {
	const url = process.env.NODE_ENV === "development"
		? "http://localhost:8080/products"
		: "/products";
	return axios.get(url);
};

const getProductData = () => {
	const id = window.location.pathname.split('/')[1];
	const url = process.env.NODE_ENV === "development"
		? `http://localhost:8080/products?id=${id}`
		: `/products?id=${id}`;
	return axios.get(url);
};

const getCurrencies = () => {
	const url = process.env.NODE_ENV === "development"
		? "http://localhost:8080/currencies"
		: "/currencies";
	return axios.get(url);
};

export { getCategories, getProducts, getProductData, getCurrencies };