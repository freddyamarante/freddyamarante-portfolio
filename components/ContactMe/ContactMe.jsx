import { Amarante } from 'next/font/google'

import Form from './Form'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-amarante',
})

export default function ContactMe() {
  return (
    <section>
      <div className="h-full mx-8 md:mx-auto md:my-12 md:max-w-7xl">
        <div className="flex flex-col my-16 md:my-24 md:px-20 lg:px-36">
          <h1
            className={`${amarante.className} text-2xl md:text-4xl lg:text-5xl text-center`}
          >
            Don&apos;t be shy - drop me a line!
            <br /> Whether you have a project in mind or just want to say hello,
            I&apos;m always happy to chat
          </h1>
          <Form />
        </div>
      </div>
    </section>
  )
}
