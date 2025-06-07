export function showLoader() {
  const loader = document.createElement("div");
  loader.id = "page-loader";
  loader.className = "loader-overlay";
  loader.innerHTML = `
    <div class="spinner"></div>
  `;
  document.body.appendChild(loader);
}

// Sembunyikan loader saat halaman selesai dimuat
export function hideLoader() {
  window.addEventListener("load", () => {
    const loader = document.getElementById("page-loader");
    if (loader) loader.style.display = "none";
  });
}

// Tambahkan efek loading saat klik link internal
export function enableLinkLoading() {
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href]");
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        if (
          href &&
          !href.startsWith("#") &&
          !this.hasAttribute("target") &&
          !this.getAttribute("href").includes("mailto:")
        ) {
          e.preventDefault();
          document.getElementById("page-loader").style.display = "flex";
          setTimeout(() => {
            window.location.href = href;
          }, 300);
        }
      });
    });
  });
}
