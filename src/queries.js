import { Field, Query, client } from '@tilework/opus';

client.setEndpoint('http://localhost:4000/');

const fetchCategories = () => {
	const categoryQuery = new Query('categories', true)
		.addField('name');

	return client.post(categoryQuery);
};

const fetchCurrencies = () => {
	const currQuery = new Query('currencies', true)
		.addField('label')
		.addField('symbol');

	return client.post(currQuery);
};

const fetchPdpData = (arg) => {
	const pdpData = new Query('product')
		.addArgument('id', 'String!', arg)
		.addField('id')
		.addField('name')
		.addField('gallery', true)
		.addField('description')
		.addField('inStock')
		.addField(new Field('attributes', true)
			.addField('id')
			.addField('name')
			.addField('type')
			.addField(new Field('items', true)
				.addField('value')
			)
		)
		.addField(new Field('prices', true)
			.addField(new Field('currency')
				.addField('symbol')
			)
			.addField('amount')
		)
		.addField('brand');
	return client.post(pdpData);
};

const fetchProducts = () => {
	const productQuery = new Query('category')
		.addField(new Field('products', true)
			.addField('id')
			.addField('name')
			.addField('inStock')
			.addField('gallery', true)
			.addField('category')
			.addField(new Field('attributes', true)
				.addField('id')
				.addField('name')
				.addField('type')
				.addField(new Field('items', true)
					.addField('value')
				)
			)
			.addField(new Field('prices', true)
				.addField(new Field('currency')
					.addField('symbol')
				)
				.addField('amount')
			)
			.addField('brand')
		);
	return client.post(productQuery);
};

export { fetchCategories, fetchCurrencies, fetchPdpData, fetchProducts };
