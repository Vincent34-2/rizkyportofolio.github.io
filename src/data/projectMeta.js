export const PROJECT_META = [
  {
    id: 1,
    slug: "gps-attendance-app",
    title: "Aplikasi Absensi Karyawan Berbasis GPS",
    category: "Mobile Programming",
    color: "bg-lime-400",
    img: "/Hrisawal.PNG",
  },
  {
    id: 2,
    slug: "eperpus",
    title: "Perancangan E-Perpus SMPN 55 Jakarta",
    category: "Web Progamming",
    color: "bg-purple-400",
    img: "/Sampuleperpus.png",
  },
  {
    id: 3,
    slug: "starbucks-it-governance",
    title: "Analisis Tata Kelola TI SDM Starbucks",
    category: "Audit Sistem Informasi",
    color: "bg-orange-400",
    img: "/awalaudit.png",
  },
  {
    id: 4,
    slug: "tableau",
    title: "Analisis Data Penjualan Pada PT. Telkomsel Tbk",
    category: "Business Intellegence",
    color: "bg-lime-400",
    img: "/awaltableau.png",
  },

  
  
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});