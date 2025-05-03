// File: components/ui/AnimatedBackground.jsx
// Komponen latar belakang dengan animasi

"use client"

const AnimatedBackground = ({ isDarkMode }) => {
    return (
        <div className="fixed inset-0 w-full h-full -z-10">
            <div
                className={`absolute inset-0 ${
                    isDarkMode ? "bg-slate-900" : "bg-blue-50"
                } transition-colors duration-500`}
            ></div>
            {[...Array(20)].map((_, index) => (
                <div
                    key={index}
                    className={`absolute rounded-full ${
                        isDarkMode
                            ? "bg-blue-500 opacity-10"
                            : "bg-blue-400 opacity-20"
                    } blur-xl animate-pulse transition-colors duration-500`}
                    style={{
                        width: `${Math.random() * 200 + 50}px`,
                        height: `${Math.random() * 200 + 50}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 8 + 3}s`,
                        animationDelay: `${Math.random() * 5}s`,
                        transform: `translate(-50%, -50%)`,
                    }}
                ></div>
            ))}
        </div>
    )
}

export default AnimatedBackground