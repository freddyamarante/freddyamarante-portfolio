import { Amarante } from 'next/font/google'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
})

export default function Skill({
  skill = 'Skill here (20XX)',
  description = 'Description here.',
  rightside = false,
}) {
  return (
    <div className="flex flex-col pl-4 mb-24">
      <div
        className={`flex flex-row items-center ${
          rightside ? 'justify-end' : ''
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          className={`h-3 w-3 text-night dark:text-white ${
            rightside ? 'order-last ml-2' : ' mr-2'
          }`}
        >
          <rect x="10" y="10" width="80" height="80" fill="currentColor" />
        </svg>
        <h2
          className={`text-2xl sm:text-4xl lg:text-2xl underline decoration-2 underline-offset-4 decoration-marian dark:decoration-madder ${
            amarante.className
          } ${rightside ? 'text-right' : ''}`}
        >
          {skill}
        </h2>
      </div>
      <p
        className={`text-lg md:text-xl lg:text-md mt-2 ${
          rightside ? 'text-right pr-5' : 'pl-5'
        }`}
      >
        {description}
      </p>
    </div>
  )
}
