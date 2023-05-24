import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { Figma, Firebase, Tailwind, TypeScript } from '../Icons/Icons'
import { useEffect, useState } from 'react'

export default function ExtraSkills() {
  const { theme } = useTheme()

  const [initialColor, setInitialColor] = useState(
    theme === 'light' ? '#15141' : '#f1e9e9'
  )

  useEffect(() => {
    const updatedColor = theme === 'light' ? '#15141' : '#f1e9e9'
    setInitialColor(updatedColor)
  }, [theme])

  return (
    <>
      <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none">
        {/* TypeScript */}
        <motion.div
          initial={{ opacity: 0, y: 10, color: initialColor }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stifness: 100 },
          }}
          viewport={{ once: true }}
          whileHover={{ y: -50, color: '#007ACC' }}
          whileTap={{ scale: 1.2, color: '#007ACC' }}
          className={`lg:col-span-1 col-span-2 p-8`}
        >
          <TypeScript />
        </motion.div>
        {/* TailwindCSS */}
        <motion.div
          initial={{ opacity: 0, y: 10, color: initialColor }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stifness: 100 },
          }}
          viewport={{ once: true }}
          whileHover={{ y: -50, color: '#2298BD' }}
          whileTap={{ scale: 1.2, color: '#2298BD' }}
          className="lg:col-span-1 col-span-2 p-8"
        >
          <Tailwind />
        </motion.div>
        {/* Firebase */}
        <motion.div
          initial={{ opacity: 0, y: 10, color: initialColor }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stifness: 100 },
          }}
          viewport={{ once: true }}
          whileHover={{ y: -50, color: '#FFA611' }}
          whileTap={{ scale: 1.2, color: '#FFA611' }}
          className="lg:col-span-1 col-span-2 p-8"
        >
          <Firebase />
        </motion.div>
        {/* Figma */}
        <motion.div
          initial={{ opacity: 0, y: 10, color: initialColor }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stifness: 100 },
          }}
          viewport={{ once: true }}
          whileHover={{ y: -50, color: '#F24E1E' }}
          whileTap={{ scale: 1.2, color: '#F24E1E' }}
          className="col-span-2 before:sm:col-start-2 lg:col-span-1 p-8"
        >
          <Figma />
        </motion.div>
      </div>
    </>
  )
}
