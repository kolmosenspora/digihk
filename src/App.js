import React, {useContext, useEffect, useState} from "react";
import NaytaTuotteet from "./NaytaTuotteet";
import TallennaTuote from "./TallennaTuote";
import { createContext } from "react";
import NaytaYksiTuote from "./NaytaYksiTuote";
import TuoteAville from "./TuoteAville";
import Login from "./Login";
import Profile from "./Profile";
export const SigninContext = createContext({})

function App() {
    const [sivu, setSivu] = React.useState('alku')
    const [displayProfile, setDisplayProfile] = React.useState("tunnus")
    const [user, setUser] = React.useState('null')
    const [token, setToken] = React.useState();

    useEffect(() => {
        if (window.location.pathname.includes('tuotenumero')) {
            setSivu(window.location.search);
        }
    }, []);


    const whichPage = () => {

    if (user === 'null') {return (<Login></Login>)}

    if (sivu === 'alku') return (<NaytaTuotteet></NaytaTuotteet>)

    if (sivu === 'lisaa') return (<TallennaTuote></TallennaTuote>)

    if (sivu === 'naytatuote') return (<NaytaYksiTuote></NaytaYksiTuote>)

    if (sivu.includes('?')) return (<TuoteAville></TuoteAville>)

}


return (
    <div>
        <header className={"App-header"}>Huoltokirjat</header>
        <SigninContext.Provider
            value={{ userName: sivu, setUserName: setSivu, displayProfile, setDisplayProfile, user, setUser, token, setToken }}
        >
            <h1>Kirjautuneena: {user}</h1>
            {whichPage()}
        </SigninContext.Provider>
        <footer className={"App-footer"}>
            <a href={"/"}>Etusivu</a>
            <button onClick={event => setSivu('lisaa')}>Lisää uusi laite</button>
            </footer>
    </div>


)
}
export default App