import './App.css';
import { gql, useQuery } from '@apollo/client';
import NaytaYksiTuote from "./NaytaYksiTuote";
import {useContext, useEffect} from "react";
import {SigninContext} from "./App";



function NaytaTuotteet() {
    const { userName, setUserName, setDisplayProfile } = useContext(SigninContext)

    const GET_TUOTTEET = gql`
query MyQuery {
  tyokone {
    id
    lisatietoja
    malli
    vapaateksti
    yritys
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
             <div className={"App-kortti"} onClick={event => naytaTuote(tyokone.id)}>
                 <h3>Sarjanumero: {tyokone.id}</h3>
                 <h3>Merkki: {tyokone.merkki}</h3>
                 <h3>Malli: {tyokone.malli}</h3>

             </div>
             </li>);


    }




return (
    <div className={"App-body"}>
        <h1>Kaikki huoltokirjat:</h1>
        <ul>{listItems}</ul>
    </div>


)

}

export default NaytaTuotteet;