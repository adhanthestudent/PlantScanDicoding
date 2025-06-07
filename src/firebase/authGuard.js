import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../src/firebase/config.js";

export function protectPage() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
    }
  });
}
