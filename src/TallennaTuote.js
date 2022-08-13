import logo from './logo.svg';
import './App.css';
import { gql, useMutation } from '@apollo/client';
import {useState} from "react";

function TallennaTuote() {

    const ADD_TODO = gql`
  mutation MyMutation($type: String!) {
  insert_tyokone(objects: {id: $type}) {
    returning {
      id
    }
  }
}`;

    const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);


    const saveTuote = () => {
        addTodo({variables: {type: tuotenimi}}).then(r => console.log(r));
     }

    const [tuotenimi, setTuotenimi] = useState('');

    const tallennaTuoteTietokantaan = () => {

    }

  return (

    <div className="App">

        <p>Jee</p>

        <input placeholder={"Tuotteen nimi"} onChange={event => setTuotenimi(event.target.value)}></input>

        <button onClick={saveTuote}>Tallenna</button>
    </div>
  );

}

export default TallennaTuote;
