import React, {useContext, useEffect, useState} from "react";
import NaytaTuotteet from "./NaytaTuotteet";
import TallennaTuote from "./TallennaTuote";
import { createContext } from "react";
import NaytaYksiTuote from "./NaytaYksiTuote";
import {Route, Router, Routes} from "react-router-dom";
import TuoteAville from "./TuoteAville";
export const SigninContext = createContext({})

function App() {
    const [userName, setUserName] = React.useState('alku')
    const [displayProfile, setDisplayProfile] = React.useState("tunnus")

    useEffect(() => {
        if (window.location.pathname.includes('tuotenumero')) {
            setUserName(window.location.search);
        }
    }, []);

const whichPage = () => {

    if (userName === 'alku') return (<NaytaTuotteet></NaytaTuotteet>)

    if (userName === 'lisaa') return (<TallennaTuote></TallennaTuote>)

    if (userName === 'naytatuote') return (<NaytaYksiTuote></NaytaYksiTuote>)

    if (userName.includes('?')) return (<TuoteAville></TuoteAville>)

}

return (
    <div>
        <header className={"App-header"}>Huoltokirjat</header>
        <SigninContext.Provider
            value={{ userName, setUserName, displayProfile, setDisplayProfile }}
        >
            {whichPage()}
        </SigninContext.Provider>
        <footer className={"App-footer"}>
            <a href={"/"}>Etusivu</a>
            <button onClick={event => setUserName('lisaa')}>Lisää uusi laite</button>
            </footer>
    </div>


)
}
export default App