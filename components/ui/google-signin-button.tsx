import { Button } from "react-native";
import { signInWithGoogle } from "@/auth";

export default function LoginScreen() {
  return <Button title="Sign in with Google" onPress={signInWithGoogle} />;
}
