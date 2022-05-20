import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.js';
import { BrowserRouter } from 'react-router-dom';
import './index.sass';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename='ecommerce-website'>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
