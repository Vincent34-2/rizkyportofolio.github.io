import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "E-Perpus SMPN 55 Jakarta",
  category: "Web Progamming",
  heroImg: "/eperpus.png",
  tagline:
    "Digitalisasi perpuskaan SMPN 55 Jakarta yang bertujuan untuk memudahkan mobilitas baik siswa maupun gudu di SMPN 55 Jakarta.",
  year: "2025",
  stack: [
    "UML",
    "Database",
    "MySQL",
    "CodeIgneter"
  ],
  features: [
    "Semua anggota SMPN 55 Jakarta dapat melakukan register, login, berdasarkan hak akses masing-masing",
    "Siswa dapat melakukan peminjaman buku, melihat daftar buku, dan melihat riwayat peminjaman buku.",
    "Admin dapat melakukan pengelolaan buku, melihat daftar buku, dan melihat riwayat peminjaman buku.",
    "Kepala sekolah dapat melihat laporan peminjaman buku, dan melihat daftar buku.",
  ],
  impact: [
    "Memberikan kemudahan dalam mengakses informasi buku yang tersedia di perpustakaan SMPN 55 Jakarta.",
    "Meningkatkan efisiensi proses peminjaman buku melalui sistem digital yang terintegrasi.",
    "Menyediakan data dan laporan yang akurat untuk pengambilan keputusan terkait pengelolaan perpustakaan.",
  ],
  links: {
    repo: "", 
  },
};

export default function BimbaCrmDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}