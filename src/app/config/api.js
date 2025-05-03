// File: config/api.js
// Konfigurasi API dan endpoint

// URL dasar API dari variabel lingkungan
export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://100.76.252.14:3001"

// URL layanan dari variabel lingkungan
export const SERVICES = {
    JRAKAHTAX:
        process.env.NEXT_PUBLIC_JRAKAHTAX_URL ||
        "http://100.76.252.14/jrakahtax/",
    PHPMYADMIN:
        process.env.NEXT_PUBLIC_PHPMYADMIN_URL ||
        "http://100.76.252.14/phpmyadmin/",
    NEXTCLOUD:
        process.env.NEXT_PUBLIC_NEXTCLOUD_URL ||
        "http://100.76.252.14/nextcloud/",
    WEBMIN:
        process.env.NEXT_PUBLIC_WEBMIN_URL || "https://100.76.252.14:10000/",
}

// Endpoint untuk mendapatkan status sistem
export const ENDPOINTS = {
    SYSTEM_STATUS: `${API_BASE_URL}/api/system-status`,
}

// Interval refresh status sistem
export const REFRESH_INTERVAL = parseInt(
    process.env.NEXT_PUBLIC_REFRESH_INTERVAL || "10000",
    10
)
