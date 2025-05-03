// File: components/ui/ServiceCard.jsx
// Komponen kartu layanan

const ServiceCard = ({ title, description, icon, url }) => {
    const handleClick = () => {
        window.open(url, "_blank")
    }

    return (
        <div
            onClick={handleClick}
            className="flex flex-col items-center p-6 rounded-xl shadow-md transition-all cursor-pointer hover:shadow-lg transform hover:-translate-y-1 bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
        >
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mb-4 text-blue-600 dark:text-blue-400">
                {icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-center text-sm text-slate-600 dark:text-slate-300">
                {description}
            </p>
        </div>
    )
}

export default ServiceCard
