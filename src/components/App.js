import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';
import Header from './Header';
import EmailList from '../containers/EmailListContainer';
import Footer from './Footer';
import '../stylesheets/main.scss';

export const StatelessApp = () => {
  return (
    <div className="askcharlie-app-container">
      <Header title="askCharlie" />
      <EmailList />
      <Footer title="askCharlie - Footer" copyrightText="© 2017 Sebastian Magne;" />
    </div>
  );
};

const store = createStore(reducers, applyMiddleware(
  logger,
));

export const App = () => {
  return (
    <Provider store={store}>
      <StatelessApp />
    </Provider>
  );
};
