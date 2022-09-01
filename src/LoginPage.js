import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
    const { user, isAuthenticated, loginWithPopup, getAccessTokenWithPopup } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);


    const getUserMetadata = async () => {
        const domain = "dev-gcafviue.us.auth0.com";

        if (!isAuthenticated) {

            try {
                const accessToken = await getAccessTokenWithPopup({
                    audience: `http://31.222.229.198:8080/v1/graphql`,
                    scope: "read:current_user",
                });

                await setUserMetadata(accessToken)

                localStorage.setItem("accessToken", accessToken)


            } catch (e) {
                console.log(e.message);
            }
        }
    }




if (isAuthenticated) {
    console.log(user)
}

if (!isAuthenticated) {
    return (
        <div>
            <button onClick={getUserMetadata}>Login</button>
        </div>
    )
}
};

export default LoginPage;