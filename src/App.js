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


    console.log(window.location.pathname)

    useEffect(() => {
        if (window.location.pathname.includes('tuotenumero')) {
            setUserName(window.location.search);
        }
    }, []);

const mikaSivu = () => {

    if (userName === 'alku') return (<NaytaTuotteet></NaytaTuotteet>)

    if (userName === 'lisaa') return (<TallennaTuote></TallennaTuote>)

    if (userName === 'naytatuote') return (<NaytaYksiTuote></NaytaYksiTuote>)

    if (userName.includes('?')) return (<TuoteAville></TuoteAville>)


}

return (


    <div>
        <SigninContext.Provider
            value={{ userName, setUserName, displayProfile, setDisplayProfile }}
        >

            {mikaSivu()}

        </SigninContext.Provider>
    </div>


)
}
export default App