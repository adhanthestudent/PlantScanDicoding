import { auth } from "../../../src/firebase/config"; // Pastikan path benar
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export async function registerUser(email, password) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
}
