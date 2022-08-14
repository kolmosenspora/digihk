import './App.css';
import { gql, useQuery } from '@apollo/client';
import NaytaYksiTuote from "./NaytaYksiTuote";
import {useContext} from "react";
import {SigninContext} from "./App";



function NaytaTuotteet() {
    const { userName, setUserName, setDisplayProfile } = useContext(SigninContext)

    const GET_TUOTTEET = gql`
  query MyQuery {
  tyokone {
    id
  }
}
`;

    const { loading, error, data } = useQuery(GET_TUOTTEET);




    const naytaTuote = (tyokone) => {
        setUserName("naytatuote")
        setDisplayProfile(tyokone)
    }


    let listItems = "";
    if (data){
         listItems = data.tyokone.map((tyokone) =>
             <li key={tyokone.id}>
             <div>
                 {tyokone.id}
                 <button onClick={event => naytaTuote(tyokone.id)}>Näytä sisältö</button>
             </div>
             </li>);


    }




return (
    <div>
        <h1>Näytä tuotteet</h1>
        <ul>{listItems}</ul>
        <button onClick={event => setUserName('lisaa')}>Vaihda Sivu</button>
    </div>


)

}

export default NaytaTuotteet;