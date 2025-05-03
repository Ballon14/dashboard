// File: components/ui/StatusCard.jsx
// Komponen kartu status sistem

function StatusCard({ title, value, isLoading = false }) {
    // Menentukan warna berdasarkan nilai (asumsi persentase)
    let valueAsNumber = parseFloat(value)
    let statusColor = ""

    if (!isNaN(valueAsNumber)) {
        if (valueAsNumber < 50) {
            statusColor = "bg-green-500"
        } else if (valueAsNumber < 80) {
            statusColor = "bg-yellow-500"
        } else {
            statusColor = "bg-red-500"
        }
    } else {
        statusColor = "bg-blue-500"
    }

    return (
        <div className="p-6 rounded-xl shadow-md bg-white dark:bg-slate-800 text-slate-800 dark:text-white">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <div className="animate-pulse bg-slate-300 dark:bg-slate-600 h-3 w-full rounded-full"></div>
                    <span className="ml-4 font-medium text-slate-400 dark:text-slate-500">
                        Loading...
                    </span>
                </div>
            ) : (
                <div className="flex items-center">
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                        <div
                            className={`${statusColor} h-3 rounded-full`}
                            style={{
                                width: isNaN(valueAsNumber)
                                    ? "50%"
                                    : `${valueAsNumber}%`,
                            }}
                        ></div>
                    </div>
                    <span className="ml-4 font-medium">{value}</span>
                </div>
            )}
        </div>
    )
}

export default StatusCard
