import React, { Suspense } from 'react';              //Так должен выглядеть index.js
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/App';
import store from './store/index';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import Spinner from './components/spinner/Spinner';
import './components/style/style.scss'
import './i18n';


// i18next
// .use(initReactI18next)
// .use(LanguageDetector)
// .use(HttpApi)
// .init({
//   supportedLngs: ['en','ru','pl'],
//   fallbackLng: "en",
//   detection: {
//     order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
//     caches: ['cookie']
//   },
//   backend: {
//    loadPath: '/assets/locales/{{lng}}/translation.json',
//   },
  

// });


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