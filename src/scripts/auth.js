// src/scripts/auth.js
import { auth } from "../../src/firebase/config.js";
import { onAuthStateChanged } from "firebase/auth";

export function requireAuth() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
    }
    // else, user is logged in — no redirect needed
  });
}
