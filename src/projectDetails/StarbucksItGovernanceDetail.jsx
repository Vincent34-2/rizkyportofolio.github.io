import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Analisis Tata Kelola TI SDM Starbucks",
  category: "Audit Sistem Informasi",
  heroImg: "/audit.png",
  tagline:
    "Evaluasi dan analisis tata kelola teknologi informasi pada sistem manajemen Sumber Daya Manusia (SDM) Starbucks menggunakan framework standar industri COBIT 2019.",
  year: "2025",
  stack: [
    "COBIT 2019",
    "Capability Level Assessment",
    "Gap Analysis",
    "Audit Sistem Informasi",
    "Data Analysis",
    "Business Process Analysis"
  ],
  features: [
    "Identifikasi proses bisnis dan layanan teknologi informasi yang esensial dalam mendukung pengelolaan SDM.",
    "Pelaksanaan Capability Level Assessment berdasarkan domain COBIT 2019 yang relevan untuk mengukur tingkat kematangan saat ini.",
    "Analisis kesenjangan (gap analysis) antara kondisi operasional saat ini dengan target kapabilitas yang diharapkan perusahaan.",
    "Penyusunan rekomendasi perbaikan tata kelola TI untuk meningkatkan efektivitas dan efisiensi sistem.",
    "Penyusunan laporan hasil evaluasi komprehensif sebagai landasan pengambilan keputusan manajerial."
  ],
  impact: [
    "Memberikan visibilitas yang jelas kepada manajemen mengenai tingkat kematangan sistem TI SDM yang berjalan.",
    "Membantu menyelaraskan (alignment) penggunaan teknologi informasi dengan tujuan bisnis strategis Starbucks.",
    "Menyediakan panduan rekomendasi yang dapat ditindaklanjuti (actionable) untuk meminimalisasi risiko IT."
  ],
  links: {
    repo: "",
  },
};

export default function StarbucksItGovernanceDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}