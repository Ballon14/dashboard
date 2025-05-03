"use client"
import { useState } from "react"

const FeedbackForm = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "question", // Default value
    })

    // Form submission state
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitError, setSubmitError] = useState(null)

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitError(null)

        try {
            // Simulate API call with setTimeout
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // Simulated success response
            console.log("Form submitted:", formData)
            setSubmitSuccess(true)
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
                category: "question",
            })

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(false)
            }, 5000)
        } catch (error) {
            console.error("Error submitting form:", error)
            setSubmitError(
                "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi."
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
            {submitSuccess ? (
                <div className="p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 rounded-lg mb-6">
                    <p className="font-medium">Pesan Anda telah terkirim!</p>
                    <p className="text-sm mt-1">
                        Terima kasih atas masukan Anda. Tim kami akan meninjau
                        dan merespons segera.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                        <div className="p-4 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-100 rounded-lg">
                            {submitError}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Nama */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                            >
                                Nama
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Masukkan nama Anda"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="email@example.com"
                            />
                        </div>
                    </div>

                    {/* Kategori */}
                    <div>
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                        >
                            Kategori
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="question">Pertanyaan</option>
                            <option value="feedback">Umpan Balik</option>
                            <option value="problem">Laporan Masalah</option>
                            <option value="suggestion">Saran</option>
                            <option value="other">Lainnya</option>
                        </select>
                    </div>

                    {/* Subjek */}
                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                        >
                            Subjek
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Subjek pesan Anda"
                        />
                    </div>

                    {/* Pesan */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
                        >
                            Pesan
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                            placeholder="Tulis pesan atau umpan balik Anda di sini..."
                        ></textarea>
                    </div>

                    {/* Privacy statement */}
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                        <p>
                            Dengan mengirimkan formulir ini, Anda menyetujui
                            bahwa data yang diberikan akan diproses sesuai
                            dengan Kebijakan Privasi kami.
                        </p>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full md:w-auto px-6 py-3 rounded-lg font-medium text-white 
                                ${
                                    isSubmitting
                                        ? "bg-blue-400 cursor-not-allowed"
                                        : "bg-blue-500 hover:bg-blue-600"
                                } 
                                transition-colors flex items-center justify-center`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Mengirim...
                                </>
                            ) : (
                                "Kirim Pesan"
                            )}
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default FeedbackForm
