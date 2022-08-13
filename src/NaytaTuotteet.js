import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';
import {useState} from "react";
import {click} from "@testing-library/user-event/dist/click";


function NaytaTuotteet() {

    const GET_TUOTTEET = gql`
  query MyQuery {
  tyokone {
    id
  }
}
`;


    const { loading, error, data } = useQuery(GET_TUOTTEET);

    console.log(data)



    let listItems = "";
    if (data){
         listItems = data.tyokone.map((tyokone) =>
             <li key={tyokone.id}>
             <div>
                 {tyokone.id}
                 <button onClick={event => console.log(tyokone.id)}>Näytä sisältö</button>
             </div>
             </li>);
    }

return (
    <div>
        <h1>Näytä tuotteet</h1>
        <ul>{listItems}</ul>
    </div>


)

}

export default NaytaTuotteet;