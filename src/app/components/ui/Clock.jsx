// File: components/ui/Clock.jsx
// Komponen jam dan tanggal

"use client"
import { useState, useEffect } from "react"

function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formattedTime = time.toLocaleTimeString()
    const formattedDate = time.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    return (
        <div className="text-center p-6 rounded-xl shadow-md bg-white dark:bg-slate-800 text-slate-800 dark:text-white">
            <div className="text-4xl font-bold mb-2">{formattedTime}</div>
            <div className="text-slate-600 dark:text-slate-300">
                {formattedDate}
            </div>
        </div>
    )
}

export default Clock
