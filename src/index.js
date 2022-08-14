import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TallennaTuote from './TallennaTuote';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import NaytaTuotteet from "./NaytaTuotteet";
import NaytaYksiTuote from "./NaytaYksiTuote";
import App from "./App";
import {Route, Router, Routes} from "react-router-dom";
import TuoteAville from "./TuoteAville";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
