"use client"
import { useState, useEffect } from "react"
import AnimatedBackground from "./components/ui/AnimatedBackground"
import Clock from "./components/ui/Clock"
import StatusCard from "./components/ui/StatusCard"
import ServiceCard from "./components/ui/ServiceCard"
import {
    SunIcon,
    MoonIcon,
    ServerIcon,
    DatabaseIcon,
    CloudIcon,
    SettingsIcon,
} from "./components/icons"
import useSystemStatus from "./hooks/useSystemStatus"
import { SERVICES } from "./config/api"

export default function Dashboard() {
    // Mengubah tema default menjadi gelap (true)
    const [isDarkMode, setIsDarkMode] = useState(true)
    const systemStatus = useSystemStatus()

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

    // Data layanan
    const services = [
        {
            title: "Jrakah Tax",
            description: "Akses sistem manajemen pajak dan layanan terkait",
            icon: <ServerIcon />,
            url: SERVICES.JRAKAHTAX,
        },
        {
            title: "phpMyAdmin",
            description: "Kelola database Anda melalui antarmuka web",
            icon: <DatabaseIcon />,
            url: SERVICES.PHPMYADMIN,
        },
        {
            title: "Nextcloud",
            description: "Akses file, kalender dan kontak",
            icon: <CloudIcon />,
            url: SERVICES.NEXTCLOUD,
        },
        {
            title: "Webmin",
            description: "Administrasi dan konfigurasi server",
            icon: <SettingsIcon />,
            url: SERVICES.WEBMIN,
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
                {/* Header dengan toggle tema dan tombol Customer Services */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
                        Server Dashboard
                    </h1>

                    <div className="flex items-center gap-4">
                        <a
                            href="/customer-services"
                            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors flex items-center gap-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Layanan Pelanggan
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

                {/* Tampilan waktu dan tanggal */}
                <Clock />

                {/* Grid layanan */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">
                        Akses Cepat
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                url={service.url}
                            />
                        ))}
                    </div>
                </div>

                {/* Status Sistem */}
                <div className="mt-12">
                    <h2 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">
                        Status Sistem
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatusCard
                            title="CPU"
                            value={systemStatus.cpu.value}
                            isLoading={systemStatus.cpu.loading}
                        />
                        <StatusCard
                            title="Memory"
                            value={systemStatus.memory.value}
                            isLoading={systemStatus.memory.loading}
                        />
                        <StatusCard
                            title="Disk"
                            value={systemStatus.disk.value}
                            isLoading={systemStatus.disk.loading}
                        />
                        <StatusCard
                            title="Network"
                            value={systemStatus.network.value}
                            isLoading={systemStatus.network.loading}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
