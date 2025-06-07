const AboutView = {
  render(content) {
    const container = document.getElementById("aboutContainer");
    container.innerHTML = `
      <section class="about-section">
        <h2>${content.title}</h2>
        <p>${content.description}</p>
        <div class="gallery">
          ${content.images
            .map((src) => `<img src="${src}" alt="Tanaman" loading="lazy" />`)
            .join("")}
        </div>
      </section>
    `;
  },
};

export { AboutView };
