import './App.css';
import {gql, useMutation, useQuery} from '@apollo/client';
import {useContext} from "react";
import {SigninContext} from "./App";
import TallennaHuolto from "./TallennaHuolto";

function NaytaYksiTuote() {
    const { displayProfile } = useContext(SigninContext)


    const GET_TUOTE = gql`
query MyQuery($type: String!) {
  tyokone(where: {id: {_eq: $type}}) {
    id
    lisatietoja
    malli
    vapaateksti
    yritys
  }
  huolto(where: {id: {_eq: $type}}) {
    lisatiedot
    paivamaara
  }
}
`;

//   const GET_HUOLLOT = gql`
//uery MyQuery($type: String!) {
//   huolto(where: {id: {_eq: $type}}) {
//   lisatiedot
//   paivamaara
// }
//
//;



    const type = displayProfile;



    const { loading, error, data } = useQuery(GET_TUOTE, {
        variables: { type },
    });

 //   const { loading1, error1, data1 } = useQuery(GET_HUOLLOT, {
 //       variables: { type },
 //   });



    if (data) {
        console.log(data.huolto[0].lisatiedot)

        return (
            <div>
            <div>
                <h1>Näytä yksi tuote</h1>
                <h2>Tuote nimi = {data.tyokone[0].id}</h2>
                <h2>Tuote malli = {data.tyokone[0].malli}</h2>
                <h2>yritys = {data.tyokone[0].yritys}</h2>
                <h2>Vapaateksti = {data.tyokone[0].vapaateksti}</h2>
                <h2>Lisatietoja = {data.tyokone[0].lisatietoja}</h2>
            </div>

                <div>Laitteen huollot!</div>
                <ul>
                    {data.huolto.map((huolto => {
                        return (
                        <li key={huolto.monesko}>
                            <div>
                                <h1>{huolto.lisatiedot}</h1>
                            </div>
                        </li>
                        )
                    }))}



            </ul>


            <div>
                <TallennaHuolto>

                </TallennaHuolto>
            </div>
            </div>
        )
    }

    return(

        <div>
            <h1>Näytä yksi tuote</h1>
        </div>
    )
}

export default NaytaYksiTuote;
