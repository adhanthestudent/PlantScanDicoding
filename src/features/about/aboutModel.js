import plant1 from "../../assets/images/plant1.jpg";
import plant2 from "../../assets/images/plant2.jpg";
import plant3 from "../../assets/images/plant3.jpg";

export function getAboutContent() {
  return {
    title: "Tentang Plant Base Identifier",
    description: `
      Plant Base Identifier adalah platform berbasis AI yang dirancang untuk membantu pengguna mengidentifikasi penyakit pada tanaman secara cepat dan akurat.
      Kami percaya bahwa teknologi dapat membantu menjaga kesehatan tanaman dan meningkatkan hasil panen secara berkelanjutan.
    `,
    images: [plant1, plant2, plant3],
  };
}
