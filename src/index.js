import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({

    uri: 'http://localhost:8080/v1/graphql',

    cache: new InMemoryCache(),

});


root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <App></App>
      </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
