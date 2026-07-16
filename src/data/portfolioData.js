// ─── Portfolio Data (single source of truth for site content) ────
//
// This is the LIVE data the site renders and the AI assistant reads. It is
// imported by `src/services/aiContext.js` and `src/components/ChatWidget.jsx`.
//
// CUSTOMIZING: edit the values below with your own details. For a clean,
// fully-commented starter template (with guidance on every field), see
// `src/data/examplePortfolioData.js`. See also `docs/customization.md`.
//
// FIELDS TO EDIT:
//   profile.name / role / bio / location / email / socials  → your identity
//   experience[]   → your work / organization / education history
//   techStack[]    → your skills, grouped by `category`
//   projects[]     → short project summaries (keep `slug` in sync with
//                    projectMeta.js + projectDetailsData.js)
//   achievements[] → awards / hackathons (optional)
//   capabilities[] → high-level specializations

export const PORTFOLIO_DATA = {
    profile: {
        name: "Rizky Dwi Isniyanto", //[cite: 1]
        role: "System Information Student & System Analyst", //[cite: 1]
        bio: "Mahasiswa Semester 6 Sistem Informasi (IPK 4.00) dengan minat kuat pada pengembangan sistem, analisis bisnis, dan tata kelola TI. Berpengalaman mengerjakan proyek berbasis web, mobile, CRM, dan COBIT 5, serta memiliki pengalaman kerja profesional lebih dari 3 tahun dalam operasional, administrasi, dan pelayanan pelanggan.", //[cite: 1]
        location: "Duren Sawit, Jakarta Timur, Indonesia", //[cite: 1]
        email: "isniyanto34@gmail.com", //[cite: 1]
        socials: {
            linkedin: "https://linkedin.com/in/rizkydwiisniyanto", //[cite: 1]
            github: "" // Kosongkan jika belum ada link GitHub di CV
        }
    },
    experience: [
        {
            title: "Barista Part Time - PT. Sari Kopi Indonesia (Starbucks)", //[cite: 1]
            period: "Maret 2025 - April 2026", //[cite: 1]
            description: [
                "Memberikan pelayanan pelanggan sesuai standar perusahaan dengan fokus pada kepuasan pelanggan.", //[cite: 1]
                "Mengelola transaksi dan memastikan akurasi pencatatan penjualan harian.", //[cite: 1]
                "Menangani permintaan dan keluhan pelanggan secara profesional serta memberikan solusi yang tepat.", //[cite: 1]
                "Memastikan kepatuhan terhadap standar operasional, kebersihan, dan kualitas produk." //[cite: 1]
            ]
        },
        {
            title: "Store Junior Leader - PT. Indomarco Prismatama", //[cite: 1]
            period: "Maret 2022 - September 2024", //[cite: 1]
            description: [
                "Dipromosikan dari Store Crew menjadi Store Junior Leader dalam waktu 8 bulan berdasarkan kinerja dan kedisiplinan.", //[cite: 1]
                "Mengawasi pelaksanaan operasional toko serta memastikan aktivitas harian berjalan sesuai standar perusahaan.", //[cite: 1]
                "Mengelola administrasi toko, pengendalian persediaan barang, dan penyusunan laporan operasional.", //[cite: 1]
                "Mengoordinasikan tim untuk mencapai target pelayanan pelanggan dan efektivitas operasional." //[cite: 1]
            ]
        },
        {
            title: "Administrator - PT. SKW", //[cite: 1]
            period: "Januari 2021 - Oktober 2021", //[cite: 1]
            description: [
                "Mengelola dan memverifikasi data administrasi perusahaan secara akurat.", //[cite: 1]
                "Melakukan input, pembaruan, dan pengolahan data menggunakan Microsoft Excel.", //[cite: 1]
                "Menyusun laporan operasional dan dokumentasi perusahaan.", //[cite: 1]
                "Berkoordinasi dengan berbagai departemen untuk mendukung kebutuhan operasional." //[cite: 1]
            ]
        },
        {
            title: "Undergraduate Student (S1 Sistem Informasi) - Universitas Nusa Mandiri", //[cite: 1]
            period: "2023 - Sekarang", //[cite: 1]
            description: [
                "Mempertahankan IPK 4.00 hingga semester 6.", //[cite: 1]
                "Mempelajari analisis dan perancangan sistem, pengelolaan basis data, serta pengembangan aplikasi berbasis web." //[cite: 1]
            ]
        }
    ],
    techStack: [
        { name: "PHP", category: "Language" }, //[cite: 1]
        { name: "Dart", category: "Language" }, //[cite: 1]
        { name: "HTML/CSS", category: "Frontend" }, //[cite: 1]
        { name: "JavaScript", category: "Frontend" }, //[cite: 1]
        { name: "Flutter", category: "Mobile" }, //[cite: 1]
        { name: "CodeIgniter 3", category: "Framework" }, //[cite: 1]
        { name: "MySQL", category: "Database" }, //[cite: 1]
        { name: "SQL", category: "Database" }, //[cite: 1]
        { name: "REST API", category: "Backend" }, //[cite: 1]
        { name: "UML", category: "System Analysis" }, //[cite: 1]
        { name: "COBIT 5", category: "IT Governance" }, //[cite: 1]
        { name: "CRM", category: "Business Analysis" }, //[cite: 1]
        { name: "Microsoft Excel", category: "Tools" }, //[cite: 1]
        { name: "Microsoft Office", category: "Tools" } //[cite: 1]
    ],
    projects: [
        {
            slug: "gps-attendance-app", 
            title: "Aplikasi Absensi Karyawan Berbasis GPS", //[cite: 1]
            category: "Mobile Programming", //[cite: 1]
            description: "Mengembangkan aplikasi Android dengan Flutter yang mengimplementasikan fitur GPS Location untuk memvalidasi absensi secara real-time dan terintegrasi REST API." //[cite: 1]
        },
        {
            slug: "bimba-crm",
            title: "Penerapan CRM BIMBA AIUEO Kemayoran", //[cite: 1]
            category: "System Analysis & Design", //[cite: 1]
            description: "Menganalisis proses bisnis penerimaan siswa baru dan merancang strategi CRM dengan UML untuk meningkatkan efektivitas pemasaran." //[cite: 1]
        },
        {
            slug: "starbucks-it-governance",
            title: "Analisis Tata Kelola TI SDM Starbucks", //[cite: 1]
            category: "IT Governance", //[cite: 1]
            description: "Mengevaluasi sistem manajemen SDM menggunakan framework COBIT 5, mencakup penilaian tingkat kapabilitas dan gap analysis." //[cite: 1]
        }
    ],
    achievements: [
        {
            title: "Promoted to Store Junior Leader", //[cite: 1]
            project: "PT. Indomarco Prismatama", //[cite: 1]
            description: "Dipromosikan dari Store Crew dalam waktu 8 bulan berkat kinerja, kedisiplinan, dan kemampuan manajerial operasional toko yang baik.", //[cite: 1]
            team: "Individual", 
            track: "Career Progression",
            techStack: ["Leadership", "Time Management", "Problem Solving", "Customer Service"], //[cite: 1]
            links: {} 
        }
    ],
    capabilities: [
        "System Analysis & Design (UML)", //[cite: 1]
        "IT Governance (COBIT 5)", //[cite: 1]
        "Web & Mobile Application Development", //[cite: 1]
        "Database Management (MySQL)", //[cite: 1]
        "Business Process & CRM Analysis", //[cite: 1]
        "Data Administration & Processing", //[cite: 1]
        "Leadership & Team Collaboration" //[cite: 1]
    ]
};