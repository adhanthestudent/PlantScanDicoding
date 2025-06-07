const LoginView = {
  getFormData() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    return { email, password };
  },

  bindSubmitHandler(handler) {
    const form = document.querySelector("#loginForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  },

  showLoading() {
    const btn = document.querySelector("#loginBtn");
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner"></span> Logging in...`;
  },

  hideLoading() {
    const btn = document.querySelector("#loginBtn");
    btn.disabled = false;
    btn.innerHTML = `Login`;
  },

  showSuccess() {
    this.showModal("Login berhasil!", "success");
    console.log("Redirecting in 1.5s...");
    setTimeout(() => {
      console.log("Redirect now!");
      window.location.href = "index.html";
    }, 1500);
  },

  showError(message) {
    this.showModal(`Login gagal: ${message}`, "error");
  },

  showModal(message, type = "info") {
    const modal = document.createElement("div");
    modal.className = `custom-alert ${type}`;
    modal.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(modal);
    setTimeout(() => modal.remove(), 3000);
  },
};

export { LoginView };
