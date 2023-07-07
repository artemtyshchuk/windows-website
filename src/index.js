import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/App';
import store from './store/index';
import Spinner from './components/spinner/Spinner';
import './components/style/style.scss'
import './i18n';


ReactDOM.render(
	<Suspense fallback={<Spinner/>} >
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
	</Suspense>,
	document.getElementById('root')
);