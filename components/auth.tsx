import React, { useState } from "react";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { Text } from "react-native";

const Auth = () => {
  const [userInfo, setUserInfo] = useState<any>();
  GoogleSignin.configure({
    scopes: [],
    // webClientId: "",
  });
  return (
    <>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={async () => {
          try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
            setUserInfo({ userInfo });
          } catch (e) {
            console.log(e);
            setUserInfo({ userInfo: e });
          }
        }}
      />
      <Text>{JSON.stringify(userInfo, null, 2)}</Text>
    </>
  );
};

export default Auth;
