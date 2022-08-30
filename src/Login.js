import {Auth0Client} from "@auth0/auth0-spa-js";
import {useContext, useEffect, useState} from "react";
import {SigninContext} from "./App";
import Profile from "./Profile";

function Login() {
    const { user, setUser, token, setToken } = useContext(SigninContext)
    const [kirjaudu, setKirjaudu] = useState();

    const auth0 = new Auth0Client({
        domain: 'dev-gcafviue.us.auth0.com',
        client_id: 'jji85jy8omZYdyI8AuleTlrmd1fOY10G'
    });



    async function getKayttaja() {
        if (await auth0.getUser()) {
            setUser(auth0.getUser())
        }
    }


    const funktio = async () => {

     return (<Profile></Profile>)


    }

    return (
        <div>
        <button onClick={funktio}>Kirjaudu Sisään!</button>
        </div>
    )
}

export default Login;