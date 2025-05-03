// File: hooks/useSystemStatus.js
// Custom hook untuk mengambil data status sistem

"use client"
import { useState, useEffect } from "react"
import { ENDPOINTS, REFRESH_INTERVAL } from "../config/api"

const useSystemStatus = () => {
    const [systemStatus, setSystemStatus] = useState({
        cpu: { value: "0%", loading: true },
        memory: { value: "0%", loading: true },
        disk: { value: "0%", loading: true },
        network: { value: "0 Mbps", loading: true },
    })

    // Fungsi untuk mengambil data status sistem
    const fetchSystemStatus = async () => {
        try {
            // Tampilkan status loading
            setSystemStatus((prev) => ({
                cpu: { ...prev.cpu, loading: true },
                memory: { ...prev.memory, loading: true },
                disk: { ...prev.disk, loading: true },
                network: { ...prev.network, loading: true },
            }))

            // Ambil data dari API backend
            const response = await fetch(ENDPOINTS.SYSTEM_STATUS)

            if (!response.ok) {
                throw new Error("Gagal mengambil status sistem")
            }

            const data = await response.json()

            // Perbarui state dengan data yang diambil
            setSystemStatus({
                cpu: { value: `${data.cpu}%`, loading: false },
                memory: { value: `${data.memory}%`, loading: false },
                disk: { value: `${data.disk}%`, loading: false },
                network: { value: `${data.network} Mbps`, loading: false },
            })
        } catch (error) {
            console.error("Error mengambil status sistem:", error)

            // Dalam kasus error, tampilkan data contoh setelah penundaan
            setTimeout(() => {
                setSystemStatus({
                    cpu: { value: "24%", loading: false },
                    memory: { value: "42%", loading: false },
                    disk: { value: "65%", loading: false },
                    network: { value: "12 Mbps", loading: false },
                })
            }, 2000)
        }
    }

    useEffect(() => {
        // Pengambilan awal
        fetchSystemStatus()

        // Atur interval untuk mengambil data setiap REFRESH_INTERVAL milidetik
        const intervalId = setInterval(fetchSystemStatus, REFRESH_INTERVAL)

        // Bersihkan interval saat komponen unmount
        return () => clearInterval(intervalId)
    }, [])

    return systemStatus
}

export default useSystemStatus
