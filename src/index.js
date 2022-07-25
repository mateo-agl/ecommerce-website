import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.js';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import appReducer from './redux/reducers/appReducer';
import plpReducer from './redux/reducers/plpReducer';
import pdpReducer from './redux/reducers/pdpReducer';
import cartReducer from './redux/reducers/cartReducer';
import headerReducer from './redux/reducers/headerReducer';
import mySaga from './redux/sagas.js';
import './index.sass';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: { appReducer, plpReducer, pdpReducer, headerReducer, cartReducer },
	middleware: [...getDefaultMiddleware(), sagaMiddleware ]
});

sagaMiddleware.run(mySaga);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
