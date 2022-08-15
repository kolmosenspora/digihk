import './App.css';
import {gql, useMutation, useQuery} from '@apollo/client';
import {useContext, useState} from "react";
import {SigninContext} from "./App";
import TallennaHuolto from "./TallennaHuolto";

function NaytaYksiTuote() {
    const { displayProfile } = useContext(SigninContext)
    const [refresh, setRefresh] = useState(true);



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


    const onkoHuolotto = () => {
        console.log("tuli ekaan")
        if (data.huolto[0]) {

            console.log("kuoli tokaan")
        return (

            <ul>
                {data.huolto.map((huolto => {
                    return (
                        <li key={huolto.monesko}>
                            <div className={"App-body-laite"}>
                                <h1>{huolto.lisatiedot}</h1>
                                <h2>Tehty maanantaina 22.12.2021 kello 15.45</h2>
                                <h2>Huollon suoritti Anssi Peipponen</h2>
                            </div>
                        </li>
                    )
                }))}



            </ul>
        )
        }
    }

    if (data) {

        return (
            <div>
            <div className={"App-body-laite"}>
                <h2>Laitteen nimi: {data.tyokone[0].id}</h2>
                <h2>Laite malli: {data.tyokone[0].malli}</h2>
                <h2>yritys: {data.tyokone[0].yritys}</h2>
                <h2>Vapaateksti: {data.tyokone[0].vapaateksti}</h2>
                <h2>Lisatietoja: {data.tyokone[0].lisatietoja}</h2>
            </div>

                <h1>Laitteen Huollot:</h1>
                {onkoHuolotto()}



            <div>
                <TallennaHuolto>

                </TallennaHuolto>
            </div>

                <a href={"/tuotenumero?=" + data.tyokone[0].id}>Näytä QR koodi ja avin näkymä</a>
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
