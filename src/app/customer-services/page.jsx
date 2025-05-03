"use client"
import { useState, useEffect } from "react"
import AnimatedBackground from "../components/ui/AnimatedBackground"
import { SunIcon, MoonIcon } from "../components/icons"
import CustomerServiceCard from "../components/ui/CustomerServiceCard"
import FeedbackForm from "../components/ui/FeedbackForm"

export default function CustomerServices() {
    // Mengubah tema default menjadi gelap (true)
    const [isDarkMode, setIsDarkMode] = useState(true)

    // Fungsi toggle tema
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    // Terapkan class dark mode ke elemen html
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDarkMode])

    // Data layanan pelanggan
    const services = [
        {
            title: "Bantuan Teknis",
            description:
                "Mendapatkan bantuan untuk masalah teknis dengan sistem kami",
            icon: "💻",
            contactInfo: "support@jrakahtax.com",
            responseTime: "24 jam",
        },
        {
            title: "Pertanyaan Penagihan",
            description: "Bantuan terkait penagihan dan pembayaran",
            icon: "💳",
            contactInfo: "billing@jrakahtax.com",
            responseTime: "48 jam",
        },
        {
            title: "Bantuan Pengguna",
            description: "Panduan penggunaan dan tutorial aplikasi",
            icon: "📚",
            contactInfo: "help@jrakahtax.com",
            responseTime: "24 jam",
        },
        {
            title: "Laporan Bug",
            description: "Laporkan masalah atau kesalahan pada sistem",
            icon: "🐞",
            contactInfo: "bugs@jrakahtax.com",
            responseTime: "72 jam",
        },
    ]

    return (
        <div
            className={`min-h-screen transition-colors duration-500 ${
                isDarkMode ? "dark" : ""
            }`}
        >
            <AnimatedBackground isDarkMode={isDarkMode} />

            <div className="container mx-auto px-4 py-8 relative z-10">
                {/* Header dengan toggle tema */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
                        Layanan Pelanggan
                    </h1>

                    <div className="flex items-center gap-4">
                        <a
                            href="/"
                            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                        >
                            Kembali ke Dashboard
                        </a>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                            aria-label={
                                isDarkMode
                                    ? "Beralih ke mode terang"
                                    : "Beralih ke mode gelap"
                            }
                        >
                            {isDarkMode ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </div>
                </div>

                {/* Pengantar Customer Service */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">
                        Pusat Bantuan & Dukungan
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                        Tim dukungan kami siap membantu Anda dengan berbagai
                        masalah dan pertanyaan. Silakan pilih layanan yang
                        sesuai dengan kebutuhan Anda atau gunakan formulir umpan
                        balik di bawah untuk mengirimkan pertanyaan Anda.
                    </p>
                </div>

                {/* Grid layanan pelanggan */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">
                        Layanan Dukungan
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <CustomerServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                contactInfo={service.contactInfo}
                                responseTime={service.responseTime}
                            />
                        ))}
                    </div>
                </div>

                {/* Formulir Umpan Balik */}
                <div className="mt-12">
                    <h2 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">
                        Kirim Pesan atau Umpan Balik
                    </h2>
                    <FeedbackForm />
                </div>

                {/* FAQ Section */}
                <div className="mt-12 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">
                        Pertanyaan yang Sering Diajukan (FAQ)
                    </h2>

                    <div className="space-y-4">
                        <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                            <h3 className="font-medium text-slate-800 dark:text-white mb-2">
                                Bagaimana cara mengubah kata sandi saya?
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Untuk mengubah kata sandi, masuk ke menu Profil,
                                pilih tab Keamanan, kemudian klik "Ubah Kata
                                Sandi". Anda akan diminta memasukkan kata sandi
                                lama dan kata sandi baru.
                            </p>
                        </div>

                        <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                            <h3 className="font-medium text-slate-800 dark:text-white mb-2">
                                Kapan laporan bulanan tersedia?
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Laporan bulanan biasanya tersedia pada tanggal 5
                                setiap bulan. Anda akan menerima notifikasi
                                email saat laporan tersedia.
                            </p>
                        </div>

                        <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                            <h3 className="font-medium text-slate-800 dark:text-white mb-2">
                                Bagaimana cara menghubungi dukungan teknis
                                langsung?
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Untuk dukungan teknis langsung, Anda dapat
                                menghubungi nomor hotline kami di 021-555-1234
                                pada jam kerja (Senin-Jumat, 08.00-17.00 WIB).
                            </p>
                        </div>

                        <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                            <h3 className="font-medium text-slate-800 dark:text-white mb-2">
                                Apakah ada biaya tambahan untuk layanan dukungan
                                premium?
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Ya, layanan dukungan premium tersedia dengan
                                biaya tambahan. Paket ini mencakup waktu respons
                                yang lebih cepat, dukungan 24/7, dan manajer
                                akun khusus. Hubungi sales@jrakahtax.com untuk
                                detailnya.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
