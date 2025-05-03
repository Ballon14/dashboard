// File: components/ui/CustomerServiceCard.jsx
// Komponen kartu untuk layanan pelanggan

const CustomerServiceCard = ({
    title,
    description,
    icon,
    contactInfo,
    responseTime,
}) => {
    return (
        <div className="flex flex-col p-6 rounded-xl shadow-md bg-white dark:bg-slate-800 text-slate-800 dark:text-white hover:shadow-lg transition-all">
            <div className="flex items-start">
                <div className="text-4xl mr-4">{icon}</div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                        {description}
                    </p>
                    <div className="space-y-2">
                        <div className="flex items-center text-sm">
                            <span className="font-medium mr-2">Kontak:</span>
                            <a
                                href={`mailto:${contactInfo}`}
                                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                                {contactInfo}
                            </a>
                        </div>
                        <div className="flex items-center text-sm">
                            <span className="font-medium mr-2">
                                Waktu Respons:
                            </span>
                            <span className="text-slate-600 dark:text-slate-300">
                                {responseTime}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerServiceCard
