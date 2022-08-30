import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, loginWithPopup } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);

    useEffect(() => {
        const getUserMetadata = async () => {
            const domain = "dev-gcafviue.us.auth0.com";

            try {
                const accessToken = await loginWithPopup({
                    audience: `http://31.222.229.198:8080/v1/graphql`,
                    scope: "read:current_user",
                });



                console.log(accessToken)
            } catch (e) {
                console.log(e.message);
            }
        };

        getUserMetadata();
    }, [loginWithPopup, user?.sub]);

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <h3>User Metadata</h3>
                {userMetadata ? (
                    <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                ) : (
                    "No user metadata defined"
                )}
            </div>
        )
    );
};

export default Profile;