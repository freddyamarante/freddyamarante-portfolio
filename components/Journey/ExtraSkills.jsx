import { motion } from 'framer-motion'

import { Figma, Firebase, Tailwind, TypeScript } from '../Icons/Icons'

export default function ExtraSkills() {
  return (
    <>
      <div className="mx-auto grid max-w-lg grid-cols-2 md:grid-cols-4 items-center sm:max-w-xl gap-20 lg:mx-0 lg:max-w-none">
        {/* TypeScript */}
        <motion.a
          href="https://www.typescriptlang.org/"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stifness: 100 },
          }}
          viewport={{ once: true }}
          whileHover={{ y: -50 }}
          whileTap={{ scale: 1.2 }}
        >
          <TypeScript />
        </motion.a>
        {/* TailwindCSS */}
        <motion.a
          href="https://tailwindcss.com/"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stifness: 100 },
          }}
          viewport={{ once: true }}
          whileHover={{ y: -50 }}
          whileTap={{ scale: 1.2 }}
        >
          <Tailwind />
        </motion.a>
        {/* Firebase */}
        <motion.a
          href="https://firebase.google.com/?hl=es"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stifness: 100 },
          }}
          viewport={{ once: true }}
          whileHover={{ y: -50 }}
          whileTap={{ scale: 1.2 }}
        >
          <Firebase />
        </motion.a>
        {/* Figma */}
        <motion.a
          href="https://www.figma.com/"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stifness: 100 },
          }}
          viewport={{ once: true }}
          whileHover={{ y: -50 }}
          whileTap={{ scale: 1.2 }}
        >
          <Figma />
        </motion.a>
      </div>
    </>
  )
}
