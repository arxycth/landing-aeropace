import {
  ArrowRight,
  Check,
  ChevronDown,
  CloudSun,
  Download,
  Gauge,
  HeartPulse,
  MapPin,
  Menu,
  Play,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Timer,
  Wind,
  X,
  Zap,
} from "lucide-react";

const GITHUB_URL = "https://github.com/USERNAME/pacerApp";

const DOWNLOAD_URL =
  "https://github.com/USERNAME/pacerApp/releases/latest/download/AeroPace.apk";

function GitHubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.69-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#19a9df] text-lg font-black text-white shadow-[0_8px_20px_rgba(25,169,223,0.22)]">
        A
      </div>

      <div>
        <p className="text-[17px] font-extrabold tracking-[-0.03em] text-[#111827]">
          AeroPace
        </p>
      </div>
    </div>
  );
}

function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[320px] rounded-[38px] border-[7px] border-[#101827] bg-[#f7f9fc] p-2 shadow-[0_30px_70px_rgba(15,23,42,0.15)] ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#101827]" />
      <div className="overflow-hidden rounded-[29px]">
        {children}
      </div>
    </div>
  );
}

function HomePhone() {
  return (
    <PhoneFrame>
      <div className="min-h-[590px] bg-[#f7f9fc] px-4 pb-5 pt-8 text-[#101827]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#159dcc]">
              AEROPACE
            </p>

            <h3 className="mt-1 text-[20px] font-extrabold tracking-[-0.04em]">
              Halo, Pelari
            </h3>

            <p className="mt-0.5 text-[9px] font-medium text-[#6b7280]">
              Siap untuk lari hari ini?
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e4e7ec] bg-white">
            <Smartphone className="h-4 w-4 text-[#182131]" />
          </div>
        </div>

        <div className="mt-5 rounded-[22px] bg-[#0f172a] p-5 text-white shadow-[0_15px_35px_rgba(15,23,42,0.12)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#16c79a]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/75">
                Pace rekomendasi
              </span>
            </div>

            <div className="rounded-full bg-[#17365b] px-2.5 py-1 text-[8px] font-bold text-[#61c4ef]">
              Zona aerobik
            </div>
          </div>

          <div className="mt-5 flex items-end gap-1">
            <span className="text-[50px] font-black leading-none tracking-[-0.06em]">
              6:42
            </span>

            <span className="mb-1 text-[15px] font-semibold text-white/55">
              /km
            </span>
          </div>

          <p className="mt-3 max-w-[210px] text-[9px] leading-4 text-white/55">
            Pace yang disarankan berdasarkan profil dan kondisi lingkungan saat
            ini.
          </p>

          <div className="my-5 h-px bg-white/10" />

          <div className="flex items-center justify-between text-[8px]">
            <div>
              <p className="uppercase tracking-[0.12em] text-white/40">
                Target HR min
              </p>
              <p className="mt-1 text-sm font-bold">151 BPM</p>
            </div>

            <div className="h-1 w-20 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[72%] rounded-full bg-[#29afe3]" />
            </div>

            <div className="text-right">
              <p className="uppercase tracking-[0.12em] text-white/40">
                Target HR max
              </p>
              <p className="mt-1 text-sm font-bold">164 BPM</p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <h4 className="text-[16px] font-extrabold tracking-[-0.02em]">
              Kondisi Sekarang
            </h4>
            <p className="mt-0.5 flex items-center gap-1 text-[8px] text-[#8993a3]">
              <MapPin className="h-3 w-3" />
              Lokasi Anda
            </p>
          </div>

          <CloudSun className="h-6 w-6 text-[#19a9df]" />
        </div>

        <div className="mt-3 rounded-[18px] border border-[#e2e6eb] bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e3f5fc]">
              <CloudSun className="h-5 w-5 text-[#159dcc]" />
            </div>

            <div>
              <p className="text-[11px] font-bold">Cerah</p>
              <p className="text-[8px] text-[#9299a7]">
                Kondisi cuaca saat ini
              </p>
            </div>
          </div>

          <div className="mt-3 border-t border-[#edf0f3] pt-3">
            <div className="flex justify-between text-[9px]">
              <span className="font-bold text-[#1b2432]">26°C</span>
              <span className="font-bold text-[#1b2432]">76%</span>
            </div>

            <div className="mt-1 flex justify-between text-[7px] text-[#9ca3af]">
              <span>Suhu Udara</span>
              <span>Kelembapan</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-4 w-4 text-[#159dcc]" />
            <h4 className="text-[12px] font-extrabold">Dasar Rekomendasi</h4>
          </div>

          <p className="mt-1 text-[8px] text-[#9299a7]">
            Penyesuaian pace berdasarkan kondisi Anda
          </p>

          <div className="mt-3 rounded-[18px] border border-[#e2e6eb] bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f3f6f9]">
                  <HeartPulse className="h-3.5 w-3.5 text-[#657182]" />
                </div>
                <div>
                  <p className="text-[9px] font-bold">Kebugaran</p>
                  <p className="text-[7px] text-[#98a0ad]">
                    Berdasarkan usia, RHR, dan BMI
                  </p>
                </div>
              </div>

              <span className="text-[9px] font-extrabold">6:12 /km</span>
            </div>

            <div className="my-3 h-px bg-[#edf0f3]" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f3f6f9]">
                  <CloudSun className="h-3.5 w-3.5 text-[#657182]" />
                </div>

                <div>
                  <p className="text-[9px] font-bold">Kondisi cuaca</p>
                  <p className="text-[7px] text-[#98a0ad]">
                    Penyesuaian dari lingkungan
                  </p>
                </div>
              </div>

              <span className="text-[9px] font-extrabold text-[#d99a22]">
                +30 dtk
              </span>
            </div>

            <div className="mt-3 rounded-xl bg-[#def5fd] px-3 py-2.5">
              <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#178cb8]">
                Hasil rekomendasi
              </p>

              <div className="mt-0.5 flex items-end justify-between">
                <p className="text-[9px] text-[#2387a8]">
                  Pace aerobik yang lebih terkontrol
                </p>

                <p className="text-[17px] font-black text-[#149dcf]">
                  6:42
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function RunPhone() {
  return (
    <PhoneFrame>
      <div className="min-h-[590px] bg-[#f8fafc] px-4 pb-5 pt-8 text-[#111827]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#159dcc]">
              AEROPACE
            </p>
            <h3 className="mt-1 text-[21px] font-extrabold tracking-[-0.04em]">
              Sedang Berlari
            </h3>
          </div>

          <div className="flex items-center gap-1.5 rounded-full bg-[#eafcf5] px-3 py-1.5 text-[8px] font-bold text-[#169875]">
            <span className="h-2 w-2 rounded-full bg-[#17b789]" />
            GPS Aktif
          </div>
        </div>

        <div className="mt-11 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#99a2b0]">
            Pace Saat Ini
          </p>

          <div className="mt-5 flex items-end justify-center gap-2">
            <span className="text-[58px] font-black leading-none tracking-[-0.06em] text-[#dd2525]">
              15:09
            </span>
            <span className="mb-1 text-[15px] font-semibold text-[#6d7685]">
              /km
            </span>
          </div>

          <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full bg-[#ffe2e3] px-4 py-2 text-[10px] font-bold text-[#b72b2c]">
            <HeartPulse className="h-3.5 w-3.5" />
            Terlalu Lambat
          </div>
        </div>

        <div className="mt-9 rounded-[22px] border border-[#e0e4e9] bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-[#168eae]" />
              <p className="text-[12px] font-extrabold">
                Estimasi Zona Aerobik
              </p>
            </div>

            <span className="text-[10px] font-extrabold text-[#178eaf]">
              6:42 /km
            </span>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#a0a8b4]">
                HR MIN
              </p>
              <p className="mt-1 text-[17px] font-black">151</p>
              <span className="text-[7px] text-[#98a1ae]">BPM</span>
            </div>

            <div className="relative mx-1 h-1.5 flex-1 rounded-full bg-[#bfe8f6]">
              <div className="absolute right-[20%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-white bg-[#1897be] shadow-sm" />
            </div>

            <div className="text-right">
              <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#a0a8b4]">
                HR MAX
              </p>
              <p className="mt-1 text-[17px] font-black">164</p>
              <span className="text-[7px] text-[#98a1ae]">BPM</span>
            </div>
          </div>

          <p className="mt-5 text-center text-[8px] italic leading-4 text-[#737c88]">
            Jaga pace agar tetap di tengah. Anda seharusnya masih bisa
            berbicara tanpa terengah-engah.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            ["JARAK", "27 m", Route],
            ["WAKTU", "00:30", Timer],
            ["RATA-RATA", "--:--", Zap],
          ].map(([label, value, Icon]) => {
            const IconComponent = Icon as typeof Route;

            return (
              <div
                key={label as string}
                className="rounded-[17px] border border-[#e1e5ea] bg-white p-3"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e4f5fc]">
                  <IconComponent className="h-3.5 w-3.5 text-[#1599be]" />
                </div>

                <p className="mt-4 text-[7px] font-bold tracking-[0.13em] text-[#9ba4b1]">
                  {label as string}
                </p>

                <p className="mt-1 text-[13px] font-black">
                  {value as string}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-semibold text-[#697382]">
            <MapPin className="h-4 w-4" />
            Lokasi terlacak
          </div>

          <span className="text-[8px] font-bold text-[#8e98a6]">±5 m</span>
        </div>

        <button className="mt-5 flex w-full items-center justify-center gap-3 rounded-[18px] bg-[#18a7dc] px-4 py-4 text-[13px] font-extrabold text-white shadow-[0_12px_25px_rgba(24,167,220,0.2)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0b91c6]">
            <span className="ml-0.5 block h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-white" />
          </span>
          Pause
        </button>

        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-[18px] border border-[#e0e4e8] bg-white px-4 py-4 text-[12px] font-bold text-[#738091]">
          <span className="h-3 w-3 rounded-sm bg-[#738091]" />
          Selesai
        </button>
      </div>
    </PhoneFrame>
  );
}

const features = [
  {
    icon: Gauge,
    title: "Pace Adaptif",
    description:
      "Rekomendasi pace disesuaikan dengan profil dan target zona aerobik Anda.",
  },
  {
    icon: CloudSun,
    title: "Kondisi Lingkungan",
    description:
      "Cuaca dan kondisi sekitar menjadi bagian dari pertimbangan rekomendasi.",
  },
  {
    icon: HeartPulse,
    title: "Target Heart Rate",
    description:
      "Gunakan target HR untuk membantu menjaga intensitas lari tetap terkendali.",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description:
      "Pantau aktivitas lari secara langsung dengan lokasi dan metrik dasar.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Lengkapi profil",
    description:
      "Masukkan data dasar seperti usia, tinggi, berat, dan resting heart rate.",
    icon: Smartphone,
  },
  {
    number: "02",
    title: "AeroPace membaca kondisi",
    description:
      "Data profil dan lingkungan digunakan untuk menyesuaikan rekomendasi.",
    icon: CloudSun,
  },
  {
    number: "03",
    title: "Mulai berlari",
    description:
      "Dapatkan target pace lalu gunakan panduannya saat sesi lari berlangsung.",
    icon: Play,
  },
];

const faqs = [
  {
    question: "Apa itu AeroPace?",
    answer:
      "AeroPace adalah aplikasi yang membantu memberikan rekomendasi pace lari berdasarkan profil pengguna dan kondisi lingkungan saat ini.",
  },
  {
    question: "Apakah AeroPace bisa digunakan secara gratis?",
    answer:
      "Ya. Versi aplikasi yang tersedia dapat diunduh dan digunakan tanpa biaya.",
  },
  {
    question: "Apakah AeroPace menggunakan GPS?",
    answer:
      "Ya. Fitur pelacakan lari menggunakan GPS perangkat untuk membantu memantau aktivitas selama sesi berlangsung.",
  },
  {
    question: "Apakah hasil rekomendasi bersifat tetap?",
    answer:
      "Tidak. Rekomendasi dibuat dengan mempertimbangkan data profil serta kondisi lingkungan sehingga dapat berubah sesuai konteks.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#111827]">
      {/* Soft background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-[500px] h-[400px] w-[400px] rounded-full bg-[#19a9df]/[0.055] blur-3xl" />
        <div className="absolute right-[-180px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#17345a]/[0.035] blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="flex h-[68px] items-center justify-between rounded-2xl border border-[#e5eaf0] bg-white/85 px-4 shadow-[0_10px_35px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:px-5">
            <a href="#" aria-label="AeroPace home">
              <Logo />
            </a>

            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#features"
                className="text-sm font-medium text-[#667085] transition hover:text-[#111827]"
              >
                Fitur
              </a>

              <a
                href="#how-it-works"
                className="text-sm font-medium text-[#667085] transition hover:text-[#111827]"
              >
                Cara Kerja
              </a>

              <a
                href="#download"
                className="text-sm font-medium text-[#667085] transition hover:text-[#111827]"
              >
                Download
              </a>
            </div>

            <div className="hidden items-center gap-2.5 sm:flex">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#e2e7ed] bg-white px-4 py-2.5 text-sm font-semibold text-[#344054] transition hover:bg-[#f7f9fb]"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>

              <a
                href={DOWNLOAD_URL}
                className="inline-flex items-center gap-2 rounded-xl bg-[#19a9df] px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(25,169,223,0.18)] transition hover:bg-[#159dcc]"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </div>

            <details className="relative sm:hidden">
              <summary className="flex h-10 w-10 list-none cursor-pointer items-center justify-center rounded-xl border border-[#e4e8ed] bg-white [&::-webkit-details-marker]:hidden">
                <Menu className="h-5 w-5 text-[#4b5563]" />
              </summary>

              <div className="absolute right-0 top-12 w-56 overflow-hidden rounded-2xl border border-[#e5eaf0] bg-white p-2 shadow-[0_20px_45px_rgba(15,23,42,0.12)]">
                <a
                  href="#features"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-[#475467] hover:bg-[#f7f9fb]"
                >
                  Fitur
                </a>

                <a
                  href="#how-it-works"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-[#475467] hover:bg-[#f7f9fb]"
                >
                  Cara Kerja
                </a>

                <a
                  href="#download"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-[#475467] hover:bg-[#f7f9fb]"
                >
                  Download
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-[#344054] hover:bg-[#f7f9fb]"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </details>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="px-4 pb-20 pt-36 sm:px-6 sm:pb-28 sm:pt-44 lg:px-8 lg:pt-48">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9eef7] bg-[#eefaff] px-3.5 py-2 text-xs font-bold text-[#178eb5]">
              <Sparkles className="h-3.5 w-3.5" />
              Adaptive running experience
            </div>

            <h1 className="mt-7 max-w-xl text-[48px] font-black leading-[0.98] tracking-[-0.055em] text-[#101827] sm:text-[62px] lg:text-[72px]">
              Run at your
              <span className="text-[#17a7dc]"> right pace.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              AeroPace membantu menentukan pace lari yang lebih sesuai
              berdasarkan profil, target heart rate, dan kondisi lingkungan
              saat ini.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={DOWNLOAD_URL}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#19a9df] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_28px_rgba(25,169,223,0.2)] transition hover:-translate-y-0.5 hover:bg-[#159dcc]"
              >
                <Download className="h-4 w-4" />
                Download AeroPace
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#dfe5eb] bg-white px-6 py-3.5 text-sm font-semibold text-[#344054] transition hover:border-[#cfd7df] hover:bg-[#fbfcfd]"
              >
                <GitHubIcon className="h-4 w-4" />
                View on GitHub
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-[#8a94a3]">
              <span className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-[#1aa8dd]" />
                Adaptive pace
              </span>

              <span className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-[#1aa8dd]" />
                GPS tracking
              </span>

              <span className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-[#1aa8dd]" />
                Lightweight
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative flex min-h-[620px] items-center justify-center">
            <div className="absolute h-[450px] w-[450px] rounded-full bg-[#19a9df]/[0.07] blur-3xl" />

            <div className="relative flex items-end justify-center gap-[-20px]">
              <div className="relative z-10 hidden rotate-[-8deg] translate-y-8 lg:block">
                <RunPhone />
              </div>

              <div className="relative z-20 -ml-8 rotate-[3deg] sm:-ml-10">
                <HomePhone />
              </div>

              <div className="absolute -bottom-5 -left-10 z-30 rounded-2xl border border-white bg-white px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:-left-16">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e7f8fd]">
                    <Gauge className="h-4 w-4 text-[#159dcc]" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#182131]">
                      Pace rekomendasi
                    </p>
                    <p className="mt-0.5 text-[10px] text-[#8a94a3]">
                      6:42 /km
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 top-12 z-30 hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.1)] sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ecfbf5]">
                    <ShieldCheck className="h-4 w-4 text-[#1a9d7d]" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#182131]">
                      Zona aerobik
                    </p>
                    <p className="mt-0.5 text-[10px] text-[#8a94a3]">
                      Terkontrol
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-[#e8ecf1] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-7 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9aa3af]">
            Designed around your run
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-semibold text-[#748092]">
            <span>Pace</span>
            <span className="h-1 w-1 rounded-full bg-[#ccd3db]" />
            <span>Heart Rate</span>
            <span className="h-1 w-1 rounded-full bg-[#ccd3db]" />
            <span>Weather</span>
            <span className="h-1 w-1 rounded-full bg-[#ccd3db]" />
            <span>GPS</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="scroll-mt-28 px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159dcc]">
              Fitur utama
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#101827] sm:text-5xl">
              Lebih dari sekadar
              <span className="text-[#17a7dc]"> stopwatch.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#737d8c] sm:text-base">
              AeroPace menggabungkan beberapa informasi penting agar Anda dapat
              memahami dan menjaga pace selama berlari.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-[24px] border border-[#e5e9ee] bg-white p-6 transition hover:-translate-y-1 hover:border-[#d8eaf1] hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f8fd] transition group-hover:bg-[#dff5fc]">
                    <Icon className="h-5 w-5 text-[#159dcc]" />
                  </div>

                  <h3 className="mt-6 text-[15px] font-extrabold text-[#182131]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#7d8795]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT EXPLANATION */}
      <section className="border-y border-[#e8ecf1] bg-white px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f0faff] px-3.5 py-2 text-xs font-bold text-[#168cad]">
                <Wind className="h-3.5 w-3.5" />
                Designed for real runs
              </div>

              <h2 className="mt-6 max-w-xl text-3xl font-black leading-tight tracking-[-0.04em] text-[#101827] sm:text-5xl">
                Rekomendasi pace yang
                <span className="text-[#17a7dc]"> memahami konteks.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#737d8c] sm:text-base">
                Pace yang terasa tepat bukan hanya soal angka. AeroPace
                mempertimbangkan data profil dan kondisi lingkungan untuk
                memberikan rekomendasi yang lebih relevan.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  [
                    Gauge,
                    "Pace dasar",
                    "Mulai dari baseline berdasarkan profil pengguna.",
                  ],
                  [
                    CloudSun,
                    "Penyesuaian cuaca",
                    "Kondisi lingkungan dapat memengaruhi rekomendasi.",
                  ],
                  [
                    HeartPulse,
                    "Zona aerobik",
                    "Target HR membantu menjaga intensitas tetap terkontrol.",
                  ],
                ].map(([Icon, title, description]) => {
                  const IconComponent = Icon as typeof Gauge;

                  return (
                    <div key={title as string} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf9fd]">
                        <IconComponent className="h-4 w-4 text-[#1498c1]" />
                      </div>

                      <div>
                        <p className="text-sm font-extrabold text-[#182131]">
                          {title as string}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-[#7d8795]">
                          {description as string}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[450px] rounded-[34px] bg-[#0f172a] p-7 shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
                <div className="absolute right-5 top-5 rounded-full bg-[#17365b] px-3 py-1.5 text-[9px] font-bold text-[#64c9f1]">
                  Zona aerobik
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                  Pace rekomendasi
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-[68px] font-black leading-none tracking-[-0.07em] text-white">
                    6:42
                  </span>

                  <span className="mb-2 text-xl font-semibold text-white/45">
                    /km
                  </span>
                </div>

                <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
                  Pace yang disarankan berdasarkan profil dan kondisi
                  lingkungan saat ini.
                </p>

                <div className="my-7 h-px bg-white/10" />

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/35">
                      Target HR min
                    </p>
                    <p className="mt-2 text-xl font-black text-white">
                      151 <span className="text-xs font-semibold text-white/45">BPM</span>
                    </p>
                  </div>

                  <div className="mb-4 h-1.5 w-28 rounded-full bg-white/10">
                    <div className="h-full w-[74%] rounded-full bg-[#28afe0]" />
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/35">
                      Target HR max
                    </p>
                    <p className="mt-2 text-xl font-black text-white">
                      164 <span className="text-xs font-semibold text-white/45">BPM</span>
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/30">
                      Kebugaran
                    </p>
                    <p className="mt-2 text-sm font-bold text-white">
                      6:12 /km
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/30">
                      Cuaca
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#f0b63b]">
                      +30 dtk
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-[#dff6fd] p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#168aac]">
                    Hasil rekomendasi
                  </p>

                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-xs font-medium text-[#287d9c]">
                      Pace aerobik lebih terkontrol
                    </p>

                    <span className="text-2xl font-black text-[#129bd0]">
                      6:42
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="scroll-mt-28 px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159dcc]">
              Cara kerja
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
              Dari profil ke
              <span className="text-[#17a7dc]"> pace yang siap dipakai.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#737d8c] sm:text-base">
              AeroPace dibuat supaya proses mendapatkan rekomendasi tetap
              sederhana.
            </p>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-3">
            {workflow.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="relative rounded-[26px] border border-[#e5e9ee] bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-[0.16em] text-[#b1bac5]">
                      {item.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f8fd]">
                      <Icon className="h-5 w-5 text-[#159dcc]" />
                    </div>
                  </div>

                  <h3 className="mt-8 text-base font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#7d8795]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APP PREVIEW */}
      <section className="overflow-hidden border-y border-[#e8ecf1] bg-[#f0f9fc] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159dcc]">
                Inside AeroPace
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#101827] sm:text-5xl">
                Semua informasi penting,
                <span className="text-[#17a7dc]"> tetap sederhana.</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#6f7a89] sm:text-base">
                Tidak perlu tampilan yang ramai. Informasi yang relevan dibuat
                mudah dibaca ketika Anda sedang fokus pada aktivitas.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[#dce8ed] bg-white p-4">
                  <Gauge className="h-5 w-5 text-[#159dcc]" />
                  <p className="mt-3 text-sm font-bold">Pace</p>
                  <p className="mt-1 text-xs text-[#8b95a3]">
                    Rekomendasi adaptif
                  </p>
                </div>

                <div className="rounded-2xl border border-[#dce8ed] bg-white p-4">
                  <CloudSun className="h-5 w-5 text-[#159dcc]" />
                  <p className="mt-3 text-sm font-bold">Weather</p>
                  <p className="mt-1 text-xs text-[#8b95a3]">
                    Kondisi lingkungan
                  </p>
                </div>

                <div className="rounded-2xl border border-[#dce8ed] bg-white p-4">
                  <HeartPulse className="h-5 w-5 text-[#159dcc]" />
                  <p className="mt-3 text-sm font-bold">Heart Rate</p>
                  <p className="mt-1 text-xs text-[#8b95a3]">
                    Target zona aerobik
                  </p>
                </div>

                <div className="rounded-2xl border border-[#dce8ed] bg-white p-4">
                  <Route className="h-5 w-5 text-[#159dcc]" />
                  <p className="mt-3 text-sm font-bold">GPS</p>
                  <p className="mt-1 text-xs text-[#8b95a3]">
                    Tracking real-time
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 lg:justify-end">
              <div className="hidden -rotate-6 translate-y-8 md:block">
                <RunPhone />
              </div>

              <div className="rotate-3">
                <HomePhone />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section
        id="download"
        className="scroll-mt-28 px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[34px] bg-[#0f172a] px-6 py-16 text-center shadow-[0_30px_70px_rgba(15,23,42,0.14)] sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#19a9df]/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#19a9df] text-white shadow-[0_12px_28px_rgba(25,169,223,0.2)]">
                <Zap className="h-6 w-6" />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#55c3ed]">
                Ready to run?
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Temukan pace yang lebih sesuai untuk lari Anda.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                Download AeroPace dan mulai gunakan rekomendasi pace yang
                disesuaikan dengan kondisi Anda.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={DOWNLOAD_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#19a9df] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#159dcc]"
                >
                  <Download className="h-4 w-4" />
                  Download AeroPace
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <GitHubIcon className="h-4 w-4" />
                  View source
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159dcc]">
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Pertanyaan umum
            </h2>
          </div>

          <div className="mt-12 divide-y divide-[#e9edf1] overflow-hidden rounded-[26px] border border-[#e3e8ed] bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-5 sm:px-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-bold text-[#182131] [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>

                  <ChevronDown className="h-4 w-4 shrink-0 text-[#98a2af] transition-transform group-open:rotate-180" />
                </summary>

                <p className="max-w-2xl pt-4 text-sm leading-7 text-[#7b8593]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e6eaf0] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <Logo />

              <p className="mt-3 max-w-xs text-xs leading-5 text-[#8a94a3]">
                A simple adaptive running experience built around your pace,
                your profile, and your environment.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-[#7a8492]">
              <a
                href="#features"
                className="transition hover:text-[#111827]"
              >
                Fitur
              </a>

              <a
                href="#how-it-works"
                className="transition hover:text-[#111827]"
              >
                Cara Kerja
              </a>

              <a
                href="#download"
                className="transition hover:text-[#111827]"
              >
                Download
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-[#111827]"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-[#edf0f3] pt-6 text-[11px] text-[#a0a8b4] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} AeroPace. All rights reserved.
            </p>

            <div className="flex items-center gap-1.5">
              <HeartPulse className="h-3 w-3" />
              Built for runners.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}