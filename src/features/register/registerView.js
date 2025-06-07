const RegisterView = {
  getFormData() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    return { email, password };
  },

  bindSubmitHandler(handler) {
    const form = document.querySelector("#registerForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  },

  showLoading() {
    const btn = document.querySelector("#registerBtn");
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner"></span> Mendaftar...`;
  },

  hideLoading() {
    const btn = document.querySelector("#registerBtn");
    btn.disabled = false;
    btn.innerHTML = `Daftar`;
  },

  showSuccess() {
    this.showModal("Pendaftaran berhasil! Silakan login.", "success");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  },

  showError(message) {
    this.showModal(`Pendaftaran gagal: ${message}`, "error");
  },

  showModal(message, type = "info") {
    const modal = document.createElement("div");
    modal.className = `custom-alert ${type}`;
    modal.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(modal);

    setTimeout(() => {
      modal.remove();
    }, 3000);
  },
};

export { RegisterView };
