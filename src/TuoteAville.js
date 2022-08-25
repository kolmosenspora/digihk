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
    tekija
    tyyppi
    ostopvm
    teho
    ampeeri
    paino
    voltit
    ce
           
  }
    dopmittaus(where: {id: {_eq: $type}}) {
    lisatietoja
    paivamaara
    tekija
    suodattimet                      
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
                <div>
                    <h1>Huollot:</h1>

                <ul>
                    {data.huolto.map((huolto => {
                        return (
                            <li key={huolto.monesko}>
                                <div className={"App-body-laite"}>
                                    <p>Tiedot: {huolto.lisatietoja}</p>
                                    <p>Päivämäärä: {huolto.paivamaara}</p>
                                    <p>Huoltaja: {huolto.tekija}</p>
                                    <p>Onko suodattimet vaihdettu?: {huolto.suodattimet}</p>
                                </div>
                            </li>
                        )
                    }))}



                </ul>
                </div>
            )
        }
    }

    const onkoDop = () => {
        console.log("tuli ekaan")
        if (data.huolto[0]) {

            console.log("kuoli tokaan")
            return (
                <div>
                    <h1>Dop Mittaukset:</h1>

                    <ul>
                        {data.dopmittaus.map((dopmittaus => {
                            return (
                                <li key={dopmittaus.monesko}>
                                    <div className={"App-body-laite"}>
                                        <h1>Tiedot: {dopmittaus.lisatiedot}</h1>
                                        <p>Päivämäärä: {dopmittaus.paivamaara}</p>
                                        <p>Huoltaja: {dopmittaus.tekija}</p>
                                    </div>
                                </li>
                            )
                        }))}



                    </ul>
                </div>
            )
        }
    }

    if (data) {

        console.log("dataa!" + data)

        return (
            <div>
                <div className={"App-body-laite"}>
                    <div>
                        <h1>Laitteen tiedot:</h1>
                    </div>
                    <p>Sarjanumero: {data.tyokone[0].id}</p>
                    <p>Malli: {data.tyokone[0].malli}</p>
                    <p>Valmistaja: {data.tyokone[0].merkki}</p>
                    <p>Omistaja: {data.tyokone[0].yritys}</p>

                    <p>Tyyppi: {data.tyokone[0].tyyppi}</p>
                    <p>Osto pvm: {data.tyokone[0].ostopvm}</p>
                    <p>Teho: {data.tyokone[0].teho}</p>
                    <p>A: {data.tyokone[0].ampeeri}</p>
                    <p>Paino: {data.tyokone[0].paino}</p>
                    <p>Voltit: {data.tyokone[0].voltit}</p>
                    <p>Ce: {data.tyokone[0].ce}</p>

                    <div>

                    </div>
                    <h2>Vapaateksti:</h2>
                    <textarea about={"Vapaateksti"} >{data.tyokone[0].vapaateksti}</textarea>

                    <h2>Lisätietoja:</h2>
                    <textarea about={"Lisätietoja"} >{data.tyokone[0].lisatietoja}</textarea>
                </div>

                {onkoHuolotto()}

                {onkoDop()}




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