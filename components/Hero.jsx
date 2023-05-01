import { Amarante } from 'next/font/google'

import DarkModeToggle from '@/components/DarkModeToggle'
import Experience from '@/components/Experience/Experience'
import { Suspense } from 'react'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
})

export default function Hero() {
  return (
    <section className="h-screen">
      <nav className="relative flex flex-row justify-end pt-4 pr-8">
        <DarkModeToggle />
      </nav>
      <div className="h-full max-h-[88vh] border-2 border-night dark:border-white justify-center items-center mx-2 lg:mx-8 my-5">
        <div className="flex h-full w-full justify-center items-center">
          <Suspense>
            <Experience />
          </Suspense>
          <div className="absolute text-center max-w-sm xs:max-w-lg lg:max-w-xl">
            <h2
              className={`text-2xl xs:text-2xl md:text-3xl lg:text-4xl ${amarante.className}`}
            >
              Greetings, I am
            </h2>
            <h1
              className={`text-4xl xs:text-4xl md:text-6xl lg:text-7xl pt-2 ${amarante.className} text-marian dark:text-madder`}
            >
              Freddy Amarante
            </h1>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl w-48 xs:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto pt-4">
              I&apos;m a frond-end developer, passionate about building stunning
              landing pages and user interfaces.
            </p>
            <div className="flex flex-wrap justify-center items-center mt-4 gap-4">
              {/* Github */}
              <a
                href="https://github.com/freddyamarante"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="43"
                  height="42"
                  viewBox="0 0 43 42"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 md:w-10 text-night hover:text-marian dark:text-white dark:hover:text-madder"
                >
                  <path d="M21.5 3.5C19.2019 3.5 16.9262 3.95265 14.803 4.83211C12.6798 5.71157 10.7507 7.00061 9.12563 8.62563C5.84374 11.9075 4 16.3587 4 21C4 28.735 9.0225 35.2975 15.97 37.625C16.845 37.765 17.125 37.2225 17.125 36.75V33.7925C12.2775 34.8425 11.245 31.4475 11.245 31.4475C10.44 29.4175 9.3025 28.875 9.3025 28.875C7.71 27.79 9.425 27.825 9.425 27.825C11.175 27.9475 12.1025 29.6275 12.1025 29.6275C13.625 32.2875 16.1975 31.5 17.195 31.08C17.3525 29.9425 17.8075 29.1725 18.2975 28.735C14.4125 28.2975 10.335 26.7925 10.335 20.125C10.335 18.1825 11 16.625 12.1375 15.3825C11.9625 14.945 11.35 13.125 12.3125 10.7625C12.3125 10.7625 13.7825 10.29 17.125 12.5475C18.5075 12.1625 20.0125 11.97 21.5 11.97C22.9875 11.97 24.4925 12.1625 25.875 12.5475C29.2175 10.29 30.6875 10.7625 30.6875 10.7625C31.65 13.125 31.0375 14.945 30.8625 15.3825C32 16.625 32.665 18.1825 32.665 20.125C32.665 26.81 28.57 28.28 24.6675 28.7175C25.2975 29.26 25.875 30.3275 25.875 31.955V36.75C25.875 37.2225 26.155 37.7825 27.0475 37.625C33.995 35.28 39 28.735 39 21C39 18.7019 38.5474 16.4262 37.6679 14.303C36.7884 12.1798 35.4994 10.2507 33.8744 8.62563C32.2493 7.00061 30.3202 5.71157 28.197 4.83211C26.0738 3.95265 23.7981 3.5 21.5 3.5Z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/freddy-amarante/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="43"
                  height="42"
                  viewBox="0 0 43 42"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 md:w-10 text-night hover:text-marian dark:text-white dark:hover:text-madder"
                >
                  <path d="M33.75 5.25C34.6783 5.25 35.5685 5.61875 36.2249 6.27513C36.8813 6.9315 37.25 7.82174 37.25 8.75V33.25C37.25 34.1783 36.8813 35.0685 36.2249 35.7249C35.5685 36.3813 34.6783 36.75 33.75 36.75H9.25C8.32174 36.75 7.4315 36.3813 6.77513 35.7249C6.11875 35.0685 5.75 34.1783 5.75 33.25V8.75C5.75 7.82174 6.11875 6.9315 6.77513 6.27513C7.4315 5.61875 8.32174 5.25 9.25 5.25H33.75ZM32.875 32.375V23.1C32.875 21.5869 32.2739 20.1359 31.204 19.066C30.1341 17.9961 28.6831 17.395 27.17 17.395C25.6825 17.395 23.95 18.305 23.11 19.67V17.7275H18.2275V32.375H23.11V23.7475C23.11 22.4 24.195 21.2975 25.5425 21.2975C26.1923 21.2975 26.8154 21.5556 27.2749 22.0151C27.7344 22.4746 27.9925 23.0977 27.9925 23.7475V32.375H32.875ZM12.54 14.98C13.3197 14.98 14.0675 14.6703 14.6189 14.1189C15.1703 13.5675 15.48 12.8197 15.48 12.04C15.48 10.4125 14.1675 9.0825 12.54 9.0825C11.7556 9.0825 11.0034 9.39409 10.4487 9.94873C9.89409 10.5034 9.5825 11.2556 9.5825 12.04C9.5825 13.6675 10.9125 14.98 12.54 14.98ZM14.9725 32.375V17.7275H10.125V32.375H14.9725Z" />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com/thecoolerdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="43"
                  height="42"
                  viewBox="0 0 43 42"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 md:w-10 text-night hover:text-marian dark:text-white dark:hover:text-madder"
                >
                  <path d="M39.805 10.5C38.4575 11.1125 37.005 11.515 35.5 11.7075C37.04 10.78 38.23 9.31 38.79 7.5425C37.3375 8.4175 35.7275 9.03 34.03 9.38C32.6475 7.875 30.705 7 28.5 7C24.3875 7 21.0275 10.36 21.0275 14.5075C21.0275 15.1025 21.0975 15.68 21.22 16.2225C14.99 15.9075 9.44251 12.915 5.75001 8.3825C5.10251 9.485 4.73501 10.78 4.73501 12.145C4.73501 14.7525 6.04751 17.0625 8.07751 18.375C6.83501 18.375 5.68001 18.025 4.66501 17.5V17.5525C4.66501 21.1925 7.25501 24.2375 10.685 24.92C9.58378 25.2214 8.42767 25.2633 7.30751 25.0425C7.78282 26.5343 8.7137 27.8397 9.96929 28.7751C11.2249 29.7105 12.742 30.229 14.3075 30.2575C11.6539 32.3583 8.3645 33.4938 4.98001 33.4775C4.38501 33.4775 3.79001 33.4425 3.19501 33.3725C6.52001 35.5075 10.475 36.75 14.71 36.75C28.5 36.75 36.0775 25.305 36.0775 15.3825C36.0775 15.05 36.0775 14.735 36.06 14.4025C37.53 13.3525 38.79 12.0225 39.805 10.5Z" />
                </svg>
              </a>
              {/* My CV */}
              <a
                href="https://drive.google.com/file/d/1OiGBCJnTgniK4pBsehECLIOlUYF09WGb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="flex justify-center items-center gap-2 bg-transparent border-2 border-night dark:border-white px-2 py-1 text-sm md:text-md font-black text-night dark:text-white hover:text-white dark:hover:text-night shadow-sm hover:bg-night dark:hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night dark:focus-visible:outline-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  Read my CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
