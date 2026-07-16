import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Aplikasi Absensi Karyawan Berbasis GPS",
  category: "Mobile Programming",
  heroImg: "/Hris.png", // Pastikan path gambar ini sesuai dengan struktur folder Anda (misalnya "/Hris.png" jika ada di folder public)
  tagline:
    "Aplikasi absensi karyawan berbasis Android yang mengimplementasikan fitur GPS Location untuk memvalidasi lokasi secara presisi dan terintegrasi dengan database secara real-time.",
  year: "2025",
  stack: [
    "Flutter",
    "Dart",
    "GPS Location Service",
    "REST API",
    "Android"
  ],
  features: [
    "Implementasi GPS Location untuk memvalidasi lokasi presisi karyawan saat absensi masuk dan pulang.",
    "Sistem autentikasi pengguna dan pencatatan data kehadiran secara real-time.",
    "Integrasi aplikasi dengan database (melalui REST API) untuk penyimpanan data pengguna, lokasi, dan riwayat absensi.",
    "Perancangan antarmuka pengguna (UI) yang responsif dan mudah digunakan untuk meningkatkan pengalaman pengguna."
  ],
  impact: [
    "Meningkatkan kedisiplinan dan akurasi data dengan memastikan absensi hanya valid jika dilakukan di lokasi yang telah ditentukan.",
    "Memudahkan proses monitoring kehadiran oleh HRD melalui pencatatan riwayat absensi yang tersentralisasi.",
    "Mengurangi potensi kecurangan absensi berkat validasi lokasi GPS langsung dari perangkat karyawan."
  ],
  links: {
    repo: "", 
  },
};

export default function GpsAttendanceAppDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}