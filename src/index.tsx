import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient( {
  uri: 'https://us1.prisma.sh/jachiike-c-madubuko/portfolio/dev'
} );

const render = () => {

  ReactDOM.render(
    <React.StrictMode>
      <AppContainer>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <App />
          </Provider>
        </ApolloProvider>
      </AppContainer>
    </React.StrictMode>,
    document.getElementById( 'root' )
  );

}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
render();
serviceWorker.unregister();

if ( module.hot ) {
  module.hot.accept( './App', () => {
    render();
  } );
}