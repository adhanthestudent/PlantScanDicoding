import { requireAuth } from "./scripts/auth.js";
import "./assets/styles/styles.css";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config.js"; // Pastikan path benar
import { protectPage } from "../src/firebase/authGuard.js";
import {
  showLoader,
  hideLoader,
  enableLinkLoading,
} from "../src/scripts/pageLoader.js";

showLoader();
hideLoader();
enableLinkLoading();

protectPage();

document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
    }
  });

  // 🚪 Tombol Logout
  const logoutBtn = document.querySelector("#logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      try {
        await signOut(auth);
        window.location.href = "login.html";
      } catch (error) {
        console.error("Gagal logout:", error.message);
      }
    });
  }
});

requireAuth(); // Akan redirect ke login.html jika belum login
