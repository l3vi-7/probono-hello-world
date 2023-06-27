// Component for login with google with firebase

import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "@spectrum-web-components/theme/theme-light.js";
import "@spectrum-web-components/theme/express/theme-light.js";
import "@spectrum-web-components/theme/scale-medium.js";
import "@spectrum-web-components/theme/express/scale-medium.js";
import { Theme } from "@swc-react/theme";
import { Button } from "@swc-react/button";

export const LoginPage: React.FC = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives
        // you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        // print out the credential and user

        console.log("credential: ", credential);
        console.log("user: ", user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        // print out the error

        console.log("errorCode: ", errorCode);
        console.log("errorMessage: ", errorMessage);
        console.log("email: ", email);
        console.log("credential: ", credential);
      });
  }

  return (
    <div>
      <Theme theme="spectrum" scale="medium" color="light">
        <Button style={{ width: "130px" }} onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </Theme>
    </div>
  );
};
