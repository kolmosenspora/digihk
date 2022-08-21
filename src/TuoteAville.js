import {gql, useQuery} from "@apollo/client";
import Qrkoodi from "./Qrkoodi";
import TallennaHuolto from "./TallennaHuolto";

function TuoteAville() {

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
    console.log(window.location.search)

    let displayProfile = window.location.search.split('?=')[1];
    const type = displayProfile;

    console.log(displayProfile)



    const { loading, error, data } = useQuery(GET_TUOTE, {
        variables: { type },
    });

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

        console.log("dataa!" + data)

        return (
            <div>
                <div className={"App-body-laite"}>
                    <h2>Laitteen sarjanumero: {data.tyokone[0].id}</h2>
                    <h2>Malli: {data.tyokone[0].malli}</h2>
                    <h2>Valmistaja: {data.tyokone[0].yritys}</h2>
                    <h2>Omistaja: {data.tyokone[0].yritys}</h2>
                    <div>

                    </div>
                    <h2>Vapaateksti:</h2>
                    <textarea about={"Vapaateksti"} >{data.tyokone[0].vapaateksti}</textarea>

                    <h2>Lisätietoja:</h2>
                    <textarea about={"Lisätietoja"} >{data.tyokone[0].lisatietoja}</textarea>
                </div>

                <h1>Laitteen Huollot:</h1>
                {onkoHuolotto()}



                <Qrkoodi>

                </Qrkoodi>

            </div>
        )
    }
                return(
        <div>
            <h1>Toimii!</h1>
        </div>
    )

}

export default TuoteAville;