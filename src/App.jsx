import React, { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import ThemeToggle from './components/ThemeToggle'

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="relative h-screen overflow-hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <HeroSection />
        </div>
    )
}

export default App
