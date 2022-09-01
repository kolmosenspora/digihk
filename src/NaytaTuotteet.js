import './App.css';
import { gql, useQuery } from '@apollo/client';
import {useContext} from "react";
import {SigninContext} from "./App";
import {useAuth0} from "@auth0/auth0-react";

function NaytaTuotteet() {
    const { userName, setUserName, setDisplayProfile } = useContext(SigninContext)
    const { user } = useAuth0();


    const GET_TUOTTEET = gql`
query MyQuery($yritys: String!) {
  tyokone(where: {yritys: {_eq: $yritys}}) {
    id
    lisatietoja
    malli
    vapaateksti
    yritys
    voltit
    tyyppi
    teho
    paino
    ostopvm
    merkki
    hertz
    ce
    ampeeri
  }
}
`;

    const yritys = user.email;

    const { loading, error, data } = useQuery(GET_TUOTTEET, {
        variables: { yritys: yritys },
    });

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
                 <h3>Malli: {tyokone.malli}</h3>
                 <h3>Merkki: {tyokone.merkki}</h3>
                 <h3>Omistaja: {tyokone.yritys}</h3>
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