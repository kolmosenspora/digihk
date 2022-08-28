import './App.css';
import { gql, useMutation } from '@apollo/client';
import React, {useContext, useState} from "react";
import {SigninContext} from "./App";

function TallennaTuote() {

    const ADD_TODO = gql`
  mutation MyMutation($type: String!, $lisatietoja: String!, $malli: String!, $vapaateksti: String!, $yritys: String!) {
  insert_tyokone(objects: {id: $type, lisatietoja: $lisatietoja, malli: $malli, vapaateksti: $vapaateksti, yritys: $yritys}) {
    returning {
      id
    }
  }
}`;

    const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

    const { setUserName, user } = useContext(SigninContext)
    const saveTuote = () => {
        addTodo({variables: {type: tuotenimi, lisatietoja: lisatietoja, malli: malli, vapaateksti: vapaateksti, yritys: user}}).then(r => console.log(r));
        setUserName('alku')
     }

     const [tuotenimi, setTuotenimi] = useState('');
     const [lisatietoja, setlisatietoja] = useState('');
     const [malli, setmalli] = useState('');
     const [vapaateksti, setvapaateksti] = useState('');


  return (

    <div className="App-body">

        <p>Lisää uusi laite</p>
        <input placeholder={"Sarjanumero"} onChange={event => setTuotenimi(event.target.value)}></input>
        <input placeholder={"Malli"} onChange={event => setmalli(event.target.value)}></input>
        <input placeholder={"lisatietoja"} onChange={event => setlisatietoja(event.target.value)}></input>
        <input placeholder={"Vapaateksti"} onChange={event => setvapaateksti(event.target.value)}></input>
        <button onClick={saveTuote}>Tallenna</button>
    </div>
  );

}

export default TallennaTuote;
