import { signOut } from "firebase/auth";
import { auth } from "../../src/firebase/config.js"; // Sesuaikan path

export function initLogoutHandler() {
  const logoutBtn = document.querySelector("#logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async (e) => {
      e.preventDefault(); // cegah href login.html langsung dipanggil
      try {
        await signOut(auth);
        window.location.href = "login.html";
      } catch (error) {
        console.error("Logout gagal:", error.message);
      }
    });
  }
}
