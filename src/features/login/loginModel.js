import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../src/firebase/config";

export async function loginUser(email, password) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
}
