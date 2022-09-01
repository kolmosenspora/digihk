import React from 'react';
import { Auth0Client } from '@auth0/auth0-spa-js';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({

    uri: 'http://localhost:8080/v1/graphql',

    cache: new InMemoryCache(),

});


root.render(
  <React.StrictMode>
      <Auth0Provider
          domain="dev-gcafviue.us.auth0.com"
          clientId="jji85jy8omZYdyI8AuleTlrmd1fOY10G"
          redirectUri={window.location.origin}
          audience="http://31.222.229.198:8080/v1/graphql"
          scope="read:current_user update:current_user_metadata"
      >
      <ApolloProvider client={client}>
          <App ></App>
      </ApolloProvider>
      </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
