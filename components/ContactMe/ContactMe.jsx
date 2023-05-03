import { Amarante } from 'next/font/google'
import { motion } from 'framer-motion'

import Form from './Form'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
})

export default function ContactMe() {
  return (
    <section>
      <div className="h-full mx-8 md:mx-auto md:my-12 md:max-w-7xl">
        <div className="flex flex-col my-16 md:my-24 md:px-20 lg:px-36">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 100 },
            }}
            viewport={{ once: true }}
            className={`${amarante.className} text-3xl md:text-4xl lg:text-5xl text-center`}
          >
            Don&apos;t be shy - drop me a line!
            <br /> Whether you have a project in mind or just want to say hello,
            I&apos;m always happy to chat
          </motion.h1>
          <Form />
        </div>
      </div>
    </section>
  )
}
