import React, {useContext, useEffect, useState} from "react";
import NaytaTuotteet from "./NaytaTuotteet";
import TallennaTuote from "./TallennaTuote";
import { createContext } from "react";
import NaytaYksiTuote from "./NaytaYksiTuote";
import TuoteAville from "./TuoteAville";
import LoginPage from "./LoginPage";
import {useAuth0} from "@auth0/auth0-react";
export const SigninContext = createContext({})

function App() {
    const { user, isAuthenticated } = useAuth0();
    const [sivu, setSivu] = React.useState('alku')
    const [displayProfile, setDisplayProfile] = React.useState("tunnus")
    const [token, setToken] = React.useState();

    useEffect(() => {
        if (window.location.pathname.includes('tuotenumero')) {
            setSivu(window.location.search);
        }

        if (isAuthenticated) {
            localStorage.setItem("username", user.email)
        }
    }, [user]);


    const whichPage = () => {

    if (!isAuthenticated) {return (<LoginPage></LoginPage>)}

    if (sivu === 'alku') return (<NaytaTuotteet></NaytaTuotteet>)

    if (sivu === 'lisaa') return (<TallennaTuote></TallennaTuote>)

    if (sivu === 'naytatuote') return (<NaytaYksiTuote></NaytaYksiTuote>)

    if (sivu.includes('?')) return (<TuoteAville></TuoteAville>)

}



return (
    <div>
        <header className={"App-header"}>Huoltokirjat</header>
        <SigninContext.Provider
            value={{ userName: sivu, setUserName: setSivu, displayProfile, setDisplayProfile, token, setToken }}
        >
            {user? <h1>Kirjautuneena: {user.email}</h1> : ""}
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