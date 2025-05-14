'use client'
import { motion } from 'framer-motion'

const FloatingLogo = () => {
    return (
        <>
            <motion.img
                src="GODHLOGO.png"
                alt="GODHLOGO"
                className="w-32 rounded-full shadow-2xl"
                animate={{ y: [0, -20, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut'
                }}
            />
        </>
    )
}

export default FloatingLogo