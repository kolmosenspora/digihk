import React from 'react';
import { Auth0Client } from '@auth0/auth0-spa-js';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from "./App";
import Login from "./Login";

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({

    uri: 'http://localhost:8080/v1/graphql',

    cache: new InMemoryCache(),

});


root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App ></App>
      </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
