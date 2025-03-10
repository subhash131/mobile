import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import {
  getAuth,
  signInWithCredential,
  GoogleAuthProvider,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./lib/firebase.config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function signInWithGoogle() {
  try {
    const redirectUri = AuthSession.makeRedirectUri();

    const authUrl =
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=YOUR_CLIENT_ID.apps.googleusercontent.com&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `response_type=token id_token&` +
      `scope=${encodeURIComponent("email profile")}`;

    const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUri);

    if (result.type === "success") {
      // Parse the URL to get the tokens
      const url = result.url;
      const params = new URLSearchParams(url.split("#")[1]);
      const accessToken = params.get("access_token");
      const idToken = params.get("id_token");

      if (idToken) {
        const credential = GoogleAuthProvider.credential(idToken, accessToken);
        const userCredential = await signInWithCredential(auth, credential);
        return userCredential;
      }
    }

    return null;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
}
