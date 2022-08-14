import {gql, useQuery} from "@apollo/client";
import Qrkoodi from "./Qrkoodi";

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
                <Qrkoodi lokaatio={window.location}>

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