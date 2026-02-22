import React from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
    return twMerge(clsx(inputs))
}

const PortalCard = ({ className, rotation = 'rotate-0' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className={cn(
                "bg-[#C7D2FE]/90 dark:bg-indigo-900/80 rounded-[2rem] p-4 shadow-xl flex items-center gap-4 min-w-[300px] border border-white/30 backdrop-blur-sm select-none",
                rotation,
                className
            )}
        >
            {/* Left accent bar */}
            <div className="w-1.5 h-12 bg-[#F97316] rounded-full shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.3)]" />

            {/* Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 border-2 border-white shadow-sm ring-1 ring-slate-200">
                <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John&mood[]=happy"
                    alt="User"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-0.5">
                <h4 className="font-bold text-[#1E1B4B] dark:text-slate-100 text-[14px] tracking-tight">Prathmesh Shukla - Portal</h4>
                <p className="text-[#1E1B4B]/70 dark:text-slate-300/80 text-[12px] leading-tight font-medium">
                    Hey! Could you please review a <br /> document for me?
                </p>
                <div className="flex items-center gap-1.5 mt-1 text-[#4F46E5]/60 dark:text-slate-400 text-[9px] font-bold tracking-wider uppercase">
                    <span>MAT-2233</span>
                    <span className="opacity-50">•</span>
                    <span>2h ago</span>
                </div>
            </div>
        </motion.div>
    )
}

export default PortalCard
