import React from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="fixed top-8 right-8 z-[100] p-4 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-yellow-500 group-hover:rotate-45 transition-transform" />
            ) : (
                <Moon className="w-6 h-6 text-slate-700 group-hover:-rotate-12 transition-transform" />
            )}
        </button>
    )
}

export default ThemeToggle
