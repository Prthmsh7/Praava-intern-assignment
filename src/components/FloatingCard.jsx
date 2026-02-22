import React from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
    return twMerge(clsx(inputs))
}

const FloatingCard = ({
    icon: Icon,
    label,
    colorClasses,
    rotation = 'rotate-0',
    className
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ 
                scale: 1.05, 
                rotate: rotation.includes('-') ? '-4deg' : '4deg',
                transition: { duration: 0.2 }
            }}
            className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-full shadow-lg border border-white/10 select-none cursor-default",
                colorClasses,
                rotation,
                className
            )}
        >
            <div className="flex items-center justify-center">
                {Icon && <Icon className="w-5 h-5 text-white" />}
            </div>
            <span className="text-white font-semibold text-lg md:text-xl tracking-tight whitespace-nowrap">{label}</span>
        </motion.div>
    )
}

export default FloatingCard
