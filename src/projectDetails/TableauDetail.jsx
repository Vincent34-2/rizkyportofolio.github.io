import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Analisis Data Penjualan Pada PT. Telkomsel Tbk",
  category: "Bussiness Intellegence",
  heroImg: "/tableau.png",
  tagline:
    "Analisa Penjualan dan performa produk PT. Telkomsel Tbk menggunakan Tableau untuk mendukung pengambilan keputusan bisnis yang lebih baik.",
  year: "2026",
  stack: [
    "Microsoft Excel",
    "Tableau",
    "Data Visualization",
    "SQL",
    "Data Analysis",
    "Business Process Analysis"
  ],
  features: [
    "Identifikasi data penjualan periode tertentu untuk menganalisis tren dan performa produk.",
    "Pembuatan visualisasi interaktif menggunakan Tableau untuk mempermudah pemahaman data penjualan.",
    "Analisis performa produk berdasarkan kategori, wilayah, dan periode waktu untuk mendukung strategi bisnis.",
    "Analisis data penjualan untuk mengidentifikasi peluang peningkatan penjualan dan efisiensi operasional.",
  ],
  impact: [
    "Memberikan visualisasi data yang mempermudah untuk pengambilan keputusan.",
    "Membantu mengidentifikasi tren penjualan dan performa produk secara lebih efektif.",
    "Menyediakan wawasan yang dapat ditindaklanjuti untuk strategi pemasaran dan penjualan yang lebih baik.",
  ],
  links: {
    repo: "",
  },
};

export default function StarbucksItGovernanceDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}