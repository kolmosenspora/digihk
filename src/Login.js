import {Auth0Client} from "@auth0/auth0-spa-js";
import {useContext, useEffect} from "react";
import {SigninContext} from "./App";

function Login() {
    const { user, setUser} = useContext(SigninContext)

    const auth0 = new Auth0Client({
        domain: 'dev-gcafviue.us.auth0.com',
        client_id: 'jji85jy8omZYdyI8AuleTlrmd1fOY10G'
    });


    const funktio = async () => {
        await auth0.loginWithRedirect({
            redirect_uri: 'http://localhost:3000/'
        });
        const useri = await auth0.getUser();
        console.log(useri);
    }



    return (
        <button onClick={funktio}>Jee</button>
    )
}

export default Login;