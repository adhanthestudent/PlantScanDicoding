import "../../assets/styles/styles.css";
import { protectPage } from "../../../src/firebase/authGuard.js";
import {
  showLoader,
  hideLoader,
  enableLinkLoading,
} from "../../../src/scripts/pageLoader.js";

showLoader();
hideLoader();
enableLinkLoading();

protectPage();

let model;
const classes = [
  "DaunSehat1",
  "DaunSakit1",
  "DaunSehat2",
  "DaunSakit2",
  "Jamur",
  "Busuk",
  "Layut",
  "Segar",
  "Sehat",
  "Sakit",
  "DaunKering",
  "Berbintik",
  "Terserang1",
  "Terserang2",
  "Lecet",
  "Menguning",
  "DaunTua",
  "HijauSegar",
  "Kecoklatan",
  "DaunBaru",
  "Sempurna",
  "Rusak",
  "Retak",
  "Pucat",
  "Lendir",
  "Gugur",
  "PenyakitX",
  "PenyakitY",
  "Bersih",
  "Layu",
  "TimbulBintik",
  "KuningHijau",
  "Berjamur",
  "Terluka",
  "SehatHijau",
  "DaunMuda",
  "Terkelupas",
  "Berlubang",
];

// Mapping kelas ke kategori: Sehat atau Sakit
const classToCategory = {
  DaunSehat1: "Sehat",
  DaunSehat2: "Sehat",
  Segar: "Sehat",
  Sehat: "Sehat",
  HijauSegar: "Sehat",
  DaunBaru: "Sehat",
  Sempurna: "Sehat",
  Bersih: "Sehat",
  SehatHijau: "Sehat",
  DaunMuda: "Sehat",

  // Semua sisanya dianggap Sakit
  DaunSakit1: "Sakit",
  DaunSakit2: "Sakit",
  Jamur: "Sakit",
  Busuk: "Sakit",
  Layut: "Sakit",
  Sakit: "Sakit",
  DaunKering: "Sakit",
  Berbintik: "Sakit",
  Terserang1: "Sakit",
  Terserang2: "Sakit",
  Lecet: "Sakit",
  Menguning: "Sakit",
  DaunTua: "Sakit",
  Kecoklatan: "Sakit",
  Rusak: "Sakit",
  Retak: "Sakit",
  Pucat: "Sakit",
  Lendir: "Sakit",
  Gugur: "Sakit",
  PenyakitX: "Sakit",
  PenyakitY: "Sakit",
  Layu: "Sakit",
  TimbulBintik: "Sakit",
  KuningHijau: "Sakit",
  Berjamur: "Sakit",
  Terluka: "Sakit",
  Terkelupas: "Sakit",
  Berlubang: "Sakit",
};

async function loadModel() {
  try {
    model = await tf.loadLayersModel("/model/model.json", {});
    console.log("✅ Model berhasil dimuat.");
  } catch (err) {
    console.error("❌ Gagal memuat model:", err);
  }
}

function preprocessImage(image) {
  return tf.tidy(() => {
    return tf.browser
      .fromPixels(image)
      .resizeNearestNeighbor([128, 128])
      .toFloat()
      .div(255)
      .expandDims(); // [1, 128, 128, 3]
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const preview = document.getElementById("preview");
  const result = document.getElementById("result");
  const imageInput = document.getElementById("plant-image");
  const form = document.getElementById("identifier-form");
  const resetBtn = document.getElementById("resetImageBtn");

  loadModel();

  imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
      preview.style.display = "block";
      resetBtn.style.display = "inline-block"; // <-- Tampilkan tombol hapus
    };
    reader.readAsDataURL(file);
  });

  resetBtn.addEventListener("click", () => {
    imageInput.value = "";
    preview.src = "";
    preview.style.display = "none";
    result.textContent = "";
    resetBtn.style.display = "none"; // <-- Sembunyikan kembali
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    result.textContent = "⏳ Memproses gambar...";

    if (!model) {
      result.textContent = "❌ Model belum dimuat.";
      return;
    }

    const img = document.getElementById("preview");
    const tensor = preprocessImage(img);

    try {
      const prediction = await model.predict(tensor).data();

      const index = prediction.indexOf(Math.max(...prediction));
      const classLabel = classes[index] || "Tidak diketahui";
      const confidence = prediction[index];

      const label = classToCategory[classLabel] || "Tidak diketahui";

      result.className = `result-box ${label === "Sehat" ? "healthy" : "sick"}`;
      result.textContent = `🌱 Tanaman ${label} (${(confidence * 100).toFixed(
        2
      )}%)`;
    } catch (err) {
      console.error("❌ Error saat prediksi:", err);
      result.textContent = "❌ Gagal memprediksi gambar.";
    }
  });
});
