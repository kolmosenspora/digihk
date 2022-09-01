import './App.css';
import { gql, useMutation } from '@apollo/client';
import React, {useContext, useState} from "react";
import {SigninContext} from "./App";
import {useAuth0} from "@auth0/auth0-react";

function TallennaTuote() {
    const { user } = useAuth0();


    const ADD_TODO = gql`
  mutation MyMutation($type: String!, $lisatietoja: String!, $malli: String!, $vapaateksti: String!, $yritys: String!) {
  insert_tyokone(objects: {id: $type, lisatietoja: $lisatietoja, malli: $malli, vapaateksti: $vapaateksti, yritys: $yritys}) {
    returning {
      id
    }
  }
}`;

    const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

    const yritys = user.email;

    const { setUserName } = useContext(SigninContext)
    const saveTuote = () => {
        addTodo({variables: {type: tuotenimi, lisatietoja: lisatietoja, malli: malli, vapaateksti: vapaateksti, yritys: yritys}}).then(r => console.log(r));
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
