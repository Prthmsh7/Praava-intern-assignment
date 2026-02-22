import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Hammer, ListChecks } from 'lucide-react'
import FloatingCard from './FloatingCard'
import PortalCard from './PortalCard'

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex items-center bg-[#F8FAFF] dark:bg-slate-950 overflow-hidden px-6 md:px-20 py-20">
            {/* Background Decorations */}
            <div className="absolute top-[20%] right-[-5%] w-[600px] h-[400px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[120px] -rotate-12" />
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-slate-100/40 dark:bg-slate-900/10 rounded-full blur-[100px]" />
            <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-indigo-50/40 dark:bg-indigo-900/5 rounded-full blur-[80px]" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-10 lg:max-w-3xl text-left"
                >
                    <div className="flex flex-col">
                        <h1 className="text-[40px] leading-[1.1] md:text-[60px] lg:text-[76px] lg:leading-[1.02] font-sans tracking-tight">
                            <span className="text-slate-400 font-normal">A single platform to </span>
                            <span className="text-slate-900 dark:text-slate-100 font-bold">manage every part of </span>
                            <span className="text-slate-400 font-normal">your </span>
                            <span className="text-[#3B82F6] dark:text-blue-400 font-bold">legal work</span>
                        </h1>
                    </div>

                    <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium max-w-[480px] leading-relaxed">
                        Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.
                    </p>
                </motion.div>

                {/* Right Side: Floating Cards Visual */}
                <div className="relative h-[600px] lg:h-[750px] w-full">

                    {/* Billing Card - Top Right */}
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [12, 13, 12] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[5%] right-[5%] z-30"
                    >
                        <FloatingCard
                            icon={FileText}
                            label="Billing"
                            colorClasses="bg-[#2D5BFF] shadow-[0_20px_40px_rgba(45,91,255,0.25)]"
                            rotation="rotate-[12deg]"
                            className="px-8 py-5"
                        />
                    </motion.div>

                    {/* Matters Card - Middle Left */}
                    <motion.div
                        animate={{ y: [0, 18, 0], rotate: [-8, -7, -8] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-[35%] left-[0%] z-20"
                    >
                        <FloatingCard
                            icon={Hammer}
                            label="Matters"
                            colorClasses="bg-[#E67E22] shadow-[0_20px_40px_rgba(230,126,34,0.25)]"
                            rotation="rotate-[-8deg]"
                            className="px-10 py-6"
                        />
                    </motion.div>

                    {/* Portal Card - Middle */}
                    <motion.div
                        animate={{ y: [0, -10, 0], rotate: [3, 4, 3] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-[48%] right-[0%] z-40 transform translate-x-12"
                    >
                        <PortalCard rotation="rotate-[3deg]" className="shadow-[0_25px_50px_rgba(165,180,252,0.3)]" />
                    </motion.div>

                    {/* Tasks Card - Bottom Middle */}
                    <motion.div
                        animate={{ y: [0, 12, 0], rotate: [2, 1, 2] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        className="absolute bottom-[20%] left-[20%] z-10"
                    >
                        <FloatingCard
                            icon={ListChecks}
                            label="Tasks"
                            colorClasses="bg-[#1E1B4B] shadow-[0_20px_40px_rgba(30,27,75,0.25)]"
                            rotation="rotate-[2deg]"
                            className="px-12 py-7"
                        />
                    </motion.div>

                    {/* Documents Card - Bottom Right */}
                    <motion.div
                        animate={{ y: [0, -18, 0], rotate: [8, 9, 8] }}
                        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-[10%] right-[10%] z-20"
                    >
                        <FloatingCard
                            icon={FileText}
                            label="Documents"
                            colorClasses="bg-[#1E1B4B] shadow-[0_20px_40px_rgba(30,27,75,0.25)]"
                            rotation="rotate-[8deg]"
                            className="px-9 py-6"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection
