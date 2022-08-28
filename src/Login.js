import {Auth0Client} from "@auth0/auth0-spa-js";
import {useContext, useEffect, useState} from "react";
import {SigninContext} from "./App";

function Login() {
    const { user, setUser, token, setToken } = useContext(SigninContext)
    const [kirjaudu, setKirjaudu] = useState();

    const auth0 = new Auth0Client({
        domain: 'dev-gcafviue.us.auth0.com',
        client_id: 'jji85jy8omZYdyI8AuleTlrmd1fOY10G',
        cacheLocation: 'localstorage'
    });

    const funktio = async () => {

        const loginToken = await auth0.getTokenWithPopup({
            audience: 'http://31.222.229.198:8080/v1/graphql'
        }).then(async log => {
            console.log(log)

        })


        async function SetUserAsState() {
            const kayttaja = await auth0.getUser();
            console.log(kayttaja.email)
            setUser(kayttaja.email)
            setToken(loginToken)
        }

        await SetUserAsState();

    }

    return (
        <div>
        <button onClick={funktio}>Kirjaudu Sisään!</button>
        </div>
    )
}

export default Login;