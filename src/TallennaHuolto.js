import logo from './logo.svg';
import './App.css';
import { gql, useMutation } from '@apollo/client';
import React, {useContext, useState} from "react";
import {SigninContext} from "./App";

function TallennaTuote() {

    const ADD_TODO = gql`
mutation MyMutation($type: String!, $lisatietoja: String!) {
insert_huolto(objects: {id: $type, lisatiedot: $lisatietoja, paivamaara: "23-5-1992"}) {
    affected_rows
  }
   }`;

    const [addTuote, { data, loading, error }] = useMutation(ADD_TODO);

    const saveTuote = () => {
        addTuote({variables: {type: tuotenimi, lisatietoja: lisatietoja}}).then(r => console.log(r));
    }


    const { displayProfile } = useContext(SigninContext)
    const tuotenimi = displayProfile;

    const [lisatietoja, setlisatietoja] = useState('');

  return (

    <div className="App">
        <h1>Huolto: </h1>
        <p>Tallenna huolto! </p>
        <input placeholder={"lisatietoja"} onChange={event => setlisatietoja(event.target.value)}></input>
        <button onClick={saveTuote}>Tallenna</button>
    </div>
  );

}

export default TallennaTuote;
