import { useMemo, useState } from 'react';
import { Gsap, GsapPresence } from '../utils/gsapAnimate';
import { Plus, Calendar, Building2, Sparkles, ArrowUpRight, Camera } from 'lucide-react';

const experiences = [
  {
    company: 'PT. Sari Kopi Indonesia (Starbucks)',
    role: 'Barista Part Time',
    period: 'Maret 2025 - April 2026',
    impact: 'Memberikan pelayanan pelanggan dan menjaga kelancaran operasional gerai.',
    stack: ['Customer Service', 'Point of Sales', 'Teamwork', 'F&B Operations'],
    description: [
      'Memberikan pelayanan pelanggan sesuai standar perusahaan dengan fokus pada kepuasan pelanggan.',
      'Mengelola transaksi dan memastikan akurasi pencatatan penjualan harian.',
      'Bekerja sama dengan tim untuk menjaga kelancaran operasional gerai dalam lingkungan kerja yang cepat dan dinamis.',
      'Menangani permintaan dan keluhan pelanggan secara profesional serta memberikan solusi yang tepat.',
      'Memastikan kepatuhan terhadap standar operasional, kebersihan, dan kualitas produk.',
    ],
  },
  {
    company: 'PT. Indomarco Prismatama',
    role: 'Store Junior Leader',
    period: 'Maret 2022 - September 2024',
    impact: 'Dipromosikan dalam 8 bulan; mengelola operasional toko, administrasi, dan koordinasi tim.',
    stack: ['Store Management', 'Inventory Control', 'Leadership', 'Reporting'],
    description: [
      'Dipromosikan dari Store Crew menjadi Store Junior Leader dalam waktu 8 bulan berdasarkan kinerja, kedisiplinan, dan kemampuan dalam mendukung operasional toko.',
      'Mengawasi pelaksanaan operasional toko serta memastikan aktivitas harian berjalan sesuai standar perusahaan.',
      'Mengelola administrasi toko, pengendalian persediaan barang, dan penyusunan laporan operasional.',
      'Mengoordinasikan tim untuk mencapai target pelayanan pelanggan dan efektivitas operasional.',
      'Menangani permasalahan operasional dan memberikan solusi untuk menjaga kelancaran aktivitas toko.',
    ],
  },
  {
    company: 'PT. SKW',
    role: 'Administrator',
    period: 'Januari 2021 - Oktober 2021',
    impact: 'Mengelola data administrasi, validasi dokumen, dan laporan operasional perusahaan.',
    stack: ['Data Entry', 'Microsoft Excel', 'Administration', 'Data Validation'],
    description: [
      'Mengelola dan memverifikasi data administrasi perusahaan secara akurat.',
      'Melakukan input, pembaruan, dan pengolahan data menggunakan Microsoft Excel.',
      'Menyusun laporan operasional dan dokumentasi perusahaan.',
      'Memastikan kelengkapan serta validitas data dan dokumen.',
      'Berkoordinasi dengan berbagai departemen untuk mendukung kebutuhan operasional.',
    ],
  },
];

function getStartYear(period) {
  const match = period.match(/\b20\d{2}\b/);
  return match ? Number(match[0]) : null;
}

const ExperienceItem = ({ experience, isExpanded, onToggle, index }) => {
  const isCurrent = /sekarang/i.test(experience.period) || /present/i.test(experience.period);

  return (
    <article className="relative min-w-0">
      <div className="absolute left-[15px] top-0 h-full w-px bg-black/[0.08]" />

      <div className="relative pl-8 min-w-0">
        <span className={`absolute left-[10px] top-8 h-[11px] w-[11px] rounded-full border ${isExpanded ? 'border-lime-500 bg-lime-500' : 'border-black/25 bg-[#FAF9F6]'}`} />

        <button
          onClick={onToggle}
          type="button"
          className="w-full max-w-full rounded-[6px] border border-black/[0.08] bg-white text-left px-5 md:px-7 py-6 md:py-7 hover:border-black/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-300"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-black/45 border border-black/[0.1] px-2.5 py-1 rounded-[2px] inline-flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {experience.period}
                </span>
                {isCurrent && (
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] bg-lime-400 text-black px-2.5 py-1 rounded-[2px]">
                    Active Now
                  </span>
                )}
              </div>

              <h3 className="text-[24px] md:text-[30px] lg:text-[34px] font-black uppercase tracking-[-0.02em] leading-[0.95] text-black">
                {experience.role}
              </h3>

              <p className="mt-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-black/45 inline-flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                {experience.company}
              </p>

              <p className="mt-5 text-sm md:text-[15px] font-light leading-relaxed text-black/60 max-w-3xl">
                {experience.impact}
              </p>
            </div>

            <Gsap.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-1 w-10 h-10 shrink-0 rounded-full border flex items-center justify-center ${isExpanded ? 'border-black bg-black text-white' : 'border-black/20 text-black/60'}`}
            >
              <Plus className="w-4.5 h-4.5" strokeWidth={1.8} />
            </Gsap.div>
          </div>
        </button>

        <GsapPresence>
          {isExpanded && (
            <Gsap.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.22, ease: 'easeOut' },
              }}
              className="overflow-hidden"
            >
              <div className="mt-2 ml-0 rounded-[6px] border border-black/[0.08] bg-[#F7F7F3] px-5 md:px-7 py-5 md:py-6">
                <ul className="space-y-3 max-w-3xl">
                  {experience.description.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-black/60 font-light text-sm md:text-[15px] leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/30 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-black/[0.08] flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[9.5px] md:text-[10px] uppercase tracking-[0.14em] text-black/68 border border-black/[0.1] bg-white px-2.5 py-1 rounded-[2px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Gsap.div>
          )}
        </GsapPresence>
      </div>
    </article>
  );
};

const ProfessionalExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const statCards = useMemo(() => {
    const roles = experiences.length;
    const activeNow = experiences.filter((item) => /sekarang/i.test(item.period) || /present/i.test(item.period)).length;
    const organizations = new Set(experiences.map((item) => item.company)).size;
    const startYears = experiences.map((item) => getStartYear(item.period)).filter(Boolean);
    const firstYear = startYears.length ? Math.min(...startYears) : new Date().getFullYear();

    return [
      { label: 'Total Roles', value: String(roles).padStart(2, '0') },
      { label: 'Active Now', value: String(activeNow).padStart(2, '0') },
      { label: 'Since', value: String(firstYear) },
      { label: 'Organizations', value: String(organizations).padStart(2, '0') },
    ];
  }, []);

  return (
    <section id="experience-section" className="pt-20 md:pt-24 pb-24 md:pb-32 w-full relative bg-[#FAF9F6] overflow-hidden overflow-x-clip">
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute right-0 top-20 w-[460px] h-[460px] bg-black/[0.025] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-3 mb-14 md:mb-16">
          <span className="w-[6px] h-[6px] rounded-full bg-lime-500 shrink-0" />
          <span className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em] text-black/32">
            03 - Experience
          </span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-14 items-start min-w-0">
          
          {/* ════ LEFT COLUMN / ASIDE ════ */}
          <aside className="lg:sticky lg:top-24 min-w-0">
            <h2 className="text-[34px] sm:text-[46px] lg:text-[56px] font-black uppercase tracking-[-0.03em] leading-[0.95] text-black">
              Professional
              <br />
              Experience
            </h2>

            <p className="mt-5 text-[14px] md:text-[15px] font-light leading-[1.8] text-black/60 max-w-[320px]">
              Pengalaman kerja lebih dari 3 tahun dalam operasional, administrasi, dan pelayanan pelanggan. Setiap peran telah membentuk kemampuan komunikasi, koordinasi tim, problem solving, dan adaptasi yang baik dalam lingkungan kerja yang dinamis.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2.5">
              {statCards.map((stat) => (
                <div key={stat.label} className="border border-black/[0.09] bg-white rounded-[4px] px-3.5 py-3.5">
                  <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-black/38">{stat.label}</p>
                  <p className="mt-1.5 text-[22px] leading-none font-black tracking-tight text-black">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-black/42">
              <Sparkles className="w-3.5 h-3.5" />
              <p className="font-mono text-[9px] uppercase tracking-[0.16em]">Career timeline - expand each role</p>
            </div>

            {/* ── ABSTRACT PHOTO GALLERY (LEFT SIDE - 3 PHOTOS) ── */}
            <div className="mt-12 pt-8 border-t border-black/[0.06] relative w-full mb-12 lg:mb-0">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-lime-400/[0.06] rounded-full blur-[60px] pointer-events-none -z-10" />

              <div className="flex items-center gap-3 mb-8">
                <Camera className="w-4 h-4 text-black/30" />
                <span className="font-mono text-[9px] md:text-[10.5px] uppercase tracking-[0.2em] font-bold text-black/40">
                  Behind The Scenes : Starbucks
                </span>
              </div>

              {/* Kolase Kiri (Cukup 3 Foto agar rapi) */}
              <div className="relative w-full pb-[100%] max-w-[360px] mx-auto md:mx-0">
                
                {/* Gambar 1 */}
                <div className="absolute top-0 left-0 w-[55%] rotate-[-4deg] group hover:z-[60] transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                  <div className="bg-[#FAF9F6] p-2 pb-7 md:p-2.5 md:pb-9 rounded-[2px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-black/5 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                    <div className="aspect-[3/4] overflow-hidden bg-black/5 rounded-[1px]">
                      <img src="/sb1.jpeg" alt="Starbucks BTS 1" className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                  </div>
                </div>

                {/* Gambar 2 */}
                <div className="absolute top-[15%] right-0 w-[60%] rotate-[5deg] group hover:z-[60] transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                  <div className="bg-[#FAF9F6] p-2 pb-7 md:p-2.5 md:pb-9 rounded-[2px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-black/5 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                    <div className="aspect-[4/3] overflow-hidden bg-black/5 rounded-[1px]">
                      <img src="/sb2.jpeg" alt="Starbucks BTS 2" className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                  </div>
                </div>

                {/* Gambar 3 */}
                <div className="absolute bottom-0 left-[15%] w-[50%] rotate-[-3deg] group hover:z-[60] transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                  <div className="bg-[#FAF9F6] p-2 pb-7 md:p-2.5 md:pb-9 rounded-[2px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-black/5 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                    <div className="aspect-[1/1] overflow-hidden bg-black/5 rounded-[1px]">
                      <img src="/sb3.jpeg" alt="Starbucks BTS 3" className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            {/* ── END ABSTRACT PHOTO GALLERY (LEFT) ── */}
          </aside>
          
          {/* ════ RIGHT COLUMN / TIMELINE ITEMS ════ */}
          <div className="relative space-y-3 min-w-0 overflow-x-clip pb-10">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.company + experience.role}
                experience={experience}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={() => setExpandedIndex((current) => (current === index ? null : index))}
              />
            ))}

            <div className="pl-9 pt-2 z-20 relative">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/28 inline-flex items-center gap-1.5">
                End of timeline
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>

            {/* ── ABSTRACT PHOTO GALLERY (RIGHT SIDE - 4 PHOTOS) ── */}
            {/* Gallery kedua ini diletakkan persis di bawah "End of timeline" */}
            <div className="mt-16 relative w-full h-[350px] sm:h-[450px] max-w-[550px]">
              
              {/* Latar Belakang Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-lime-400/[0.04] rounded-full blur-[60px] pointer-events-none -z-10" />

              {/* Gambar 4 */}
              <div className="absolute top-0 left-[5%] w-[45%] md:w-[38%] rotate-[-5deg] group hover:z-[60] transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="bg-[#FAF9F6] p-2 pb-7 md:p-2.5 md:pb-9 rounded-[2px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-black/5 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                  <div className="aspect-[4/5] overflow-hidden bg-black/5 rounded-[1px]">
                    <img src="/sb4.png" alt="Starbucks BTS 4" className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                </div>
              </div>

              {/* Gambar 5 */}
              <div className="absolute top-[12%] right-[5%] w-[50%] md:w-[42%] rotate-[4deg] group hover:z-[60] transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="bg-[#FAF9F6] p-2 pb-7 md:p-2.5 md:pb-9 rounded-[2px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-black/5 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                  <div className="aspect-[16/11] overflow-hidden bg-black/5 rounded-[1px]">
                    <img src="/cp1.png" alt="Starbucks BTS 5" className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                </div>
              </div>

              {/* Gambar 6 */}
              <div className="absolute bottom-[8%] left-[18%] w-[42%] md:w-[35%] rotate-[3deg] group hover:z-[60] transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="bg-[#FAF9F6] p-2 pb-7 md:p-2.5 md:pb-9 rounded-[2px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-black/5 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                  <div className="aspect-[3/4] overflow-hidden bg-black/5 rounded-[1px]">
                    <img src="/cp2.png" alt="Starbucks BTS 6" className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                </div>
              </div>

              {/* Gambar 7 */}
              <div className="absolute bottom-0 right-[15%] w-[38%] md:w-[32%] rotate-[-4deg] group hover:z-[60] transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="bg-[#FAF9F6] p-2 pb-7 md:p-2.5 md:pb-9 rounded-[2px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-black/5 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                  <div className="aspect-[1/1] overflow-hidden bg-black/5 rounded-[1px]">
                    <img src="/cp3.png" alt="Starbucks BTS 7" className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                </div>
              </div>

            </div>
            {/* ── END ABSTRACT PHOTO GALLERY (RIGHT) ── */}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;