import { Suspense } from 'react'
import JourneyExperience from './Experience/JourneyExperience'
import { Amarante } from 'next/font/google'
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'

import Skill from './Skill'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-amarante',
})

export default function Journey() {
  return (
    <section>
      <div className="border-2 border-night dark:border-white mx-2 lg:mx-8 my-5 ">
        <div className="flex flex-col px-8 lg:px-20 py-20 basis-1/6">
          <div className="flex lg:hidden justify-between mb-8">
            <div className="flex flex-row">
              <svg
                viewBox="0 0 100 100"
                className="h-4 w-4 mr-2 text-marian dark:text-madder"
              >
                <rect
                  x="10"
                  y="10"
                  width="80"
                  height="80"
                  fill="currentColor"
                />
              </svg>
              <div className="uppercase text-sm font-black">Journey</div>
            </div>
            <div className="uppercase text-sm font-black text-right">
              Last updated: 25/04/23
            </div>
          </div>
          <div className="flex flex-row justify-center lg:justify-between items-center mb-8 lg:mb-14">
            <div className="hidden lg:flex flex-row items-center">
              <svg
                viewBox="0 0 100 100"
                className="h-4 w-4 mr-2 text-marian dark:text-madder"
              >
                <rect
                  x="10"
                  y="10"
                  width="80"
                  height="80"
                  fill="currentColor"
                />
              </svg>
              <div className="uppercase text-sm font-black">Journey</div>
            </div>
            <h1
              className={`${amarante.className} text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-center mb-2 px-2 underline decoration-4 underline-offset-4 decoration-marian dark:decoration-madder`}
            >
              My journey as a developer
            </h1>
            <div className="uppercase text-sm font-black hidden lg:block">
              Last updated: 25/04/23
            </div>
          </div>
          <div className="text-left text-md lg:text-xl mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
            aliquam arcu. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Aenean iaculis turpis
            non turpis condimentum auctor. Nullam tortor tellus, egestas non
            dapibus nec, convallis at nisl.
          </div>
          <div className="basis-full">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="flex flex-col w-full lg:w-1/4 order-1 lg:order-1">
                <Skill
                  skill="HTML, CSS & JS (2019)"
                  description="Learned basic web development at college in 2018, that's when I fell in love with it!"
                />
                <Skill
                  skill="Vue.js (2020)"
                  description="My first framework! Made a to-do list for college and used
                    Nuxt.js to make a bibliometrics tool for college as a
                    final project for my bachelor's degree."
                />
                <Skill
                  skill="UX/UI Design (2021)"
                  description="Used Figma with the help of a great Codecademy course to learn and apply to my projects. Concepts like SWOT Analysis, Conceptual Design and Prototyping were my main focus. "
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/4 order-2 lg:order-3">
                <Skill
                  skill="React (2021)"
                  description="Swapped to React in order to use R3F, what I didn't expect was it becoming my main framework in the projects to come! I also love how well it works with Tailwind."
                  rightside
                />
                <Skill
                  skill="Shopify (2022)"
                  description="Hey, that's what I used in my first freelancing project! Learning it was very smooth and the clients were very happy with the result."
                  rightside
                />
                <Skill
                  skill="WebGL (2023)"
                  description="Fell in love with WebGL once I got my hands on Three.js and React Three Fiber. Seems like 3D visuals on front end projects are my thing now."
                  rightside
                />
              </div>
              <div className="flex justify-center align-center w-full lg:w-1/2 mx-6 h-[8rem] xs:h-[15rem] sm:h-[28rem] md:h-[40rem] lg:h-[24rem] xl:h-[32rem] 2xl:h-[40rem] order-3 lg:order-2">
                <Suspense>
                  <Canvas flat>
                    <JourneyExperience />
                  </Canvas>
                </Suspense>
              </div>
            </div>
          </div>
          <div
            className={`mx-auto my-20 text-3xl xs:text-4xl sm:text-5xl text-center ${amarante.className}`}
          >
            and other stuff I&apos;ve used along the way
          </div>
          <div className="py-10 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {/* TypeScript */}
                <div className="lg:col-span-1 col-span-2">
                  <svg
                    width="125"
                    height="125"
                    className="max-h-36 w-full h-full object-contain fill-night dark:fill-white"
                    viewBox="0 0 125 125"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.625 0.625H124.375V124.375H0.625V0.625ZM74.2562 102.788C77.6937 109.525 84.6375 114.681 95.5 114.681C106.5 114.681 114.75 108.975 114.75 98.4562C114.75 88.7625 109.181 84.4312 99.2812 80.1687L96.3938 78.9313C91.375 76.8 89.2438 75.3562 89.2438 71.9187C89.2438 69.1 91.375 66.9 94.8125 66.9C98.1125 66.9 100.313 68.3437 102.306 71.9187L111.312 65.9375C107.531 59.3375 102.169 56.7938 94.8125 56.7938C84.4313 56.7938 77.7625 63.3938 77.7625 72.125C77.7625 81.6125 83.3313 86.0813 91.7188 89.6562L94.6062 90.8937C99.9687 93.2312 103.131 94.675 103.131 98.6625C103.131 101.962 100.037 104.369 95.225 104.369C89.5187 104.369 86.2188 101.412 83.7438 97.2875L74.2562 102.788ZM69.375 57.3438H35V67.6562H45.3125V117.5H57.3438V67.6562H69.375V57.3438Z" />
                  </svg>
                </div>
                {/* TailwindCSS */}
                <div className="lg:col-span-1 col-span-2">
                  <svg
                    width="165"
                    height="165"
                    viewBox="0 0 165 165"
                    className="max-h-42 w-full h-full object-contain fill-night dark:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M82.5 41.25C64.1437 41.25 52.7313 50.3937 48.125 68.75C55 59.6062 63.0438 56.1687 72.1875 58.4375C77.4125 59.7437 81.1937 63.525 85.3187 67.7188C92.0563 74.5938 99.6875 82.5 116.875 82.5C135.231 82.5 146.644 73.3563 151.25 55C144.375 64.1438 136.331 67.5812 127.188 65.3125C121.963 64.0063 118.25 60.225 114.056 56.0312C107.319 49.1562 99.6875 41.25 82.5 41.25ZM48.125 82.5C29.7687 82.5 18.3563 91.6437 13.75 110C20.625 100.856 28.6687 97.4188 37.8125 99.6875C43.0375 100.994 46.75 104.775 50.9437 108.969C57.6812 115.844 65.3125 123.75 82.5 123.75C100.856 123.75 112.269 114.606 116.875 96.25C110 105.394 101.956 108.831 92.8125 106.562C87.5875 105.256 83.875 101.475 79.6813 97.2812C72.9438 90.4062 65.3125 82.5 48.125 82.5Z" />
                  </svg>
                </div>
                {/* Firebase */}
                <div className="lg:col-span-1 col-span-2">
                  <svg
                    width="163"
                    height="160"
                    viewBox="0 0 163 160"
                    className="max-h-36 w-full h-full object-contain fill-night dark:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M135.833 124.321L86.2542 151.153C82.8583 152.875 79.4625 152.875 76.0667 151.153L27.1667 124.321L115.798 37.2025L118.175 36.54C120.212 36.54 121.367 37.4013 121.571 39.19L135.833 124.321ZM63.5021 38.5275L32.6 88.5463L45.5042 9.37754C45.7079 7.58879 46.8625 6.72754 48.9 6.72754C50.2583 6.72754 51.1412 7.12504 51.6167 8.38379L66.2187 34.5525L63.5021 38.5275ZM94.0646 46.875L29.2042 110.409L78.4437 28.9213C79.1229 27.5963 80.1417 27 81.5 27C82.8583 27 83.7412 27.5963 84.2167 28.9213L94.0646 46.875Z" />
                  </svg>
                </div>
                {/* Figma */}
                <div className="col-span-2 before:sm:col-start-2 lg:col-span-1">
                  <svg
                    width="165"
                    height="166"
                    className="max-h-36 w-full h-full object-contain fill-night dark:fill-white"
                    viewBox="0 0 165 166"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M58.4375 14.25C52.9674 14.25 47.7214 16.423 43.8534 20.2909C39.9855 24.1589 37.8125 29.4049 37.8125 34.875C37.8125 40.3451 39.9855 45.5911 43.8534 49.4591C47.7214 53.327 52.9674 55.5 58.4375 55.5H106.563C112.033 55.5 117.279 53.327 121.147 49.4591C125.015 45.5911 127.188 40.3451 127.188 34.875C127.188 29.4049 125.015 24.1589 121.147 20.2909C117.279 16.423 112.033 14.25 106.563 14.25H58.4375ZM106.563 62.375C101.092 62.375 95.8464 64.548 91.9784 68.4159C88.1105 72.2839 85.9375 77.5299 85.9375 83C85.9375 88.4701 88.1105 93.7161 91.9784 97.5841C95.8464 101.452 101.092 103.625 106.563 103.625C112.033 103.625 117.279 101.452 121.147 97.5841C125.015 93.7161 127.188 88.4701 127.188 83C127.188 77.5299 125.015 72.2839 121.147 68.4159C117.279 64.548 112.033 62.375 106.563 62.375ZM37.8125 83C37.8125 77.5299 39.9855 72.2839 43.8534 68.4159C47.7214 64.548 52.9674 62.375 58.4375 62.375H79.0625V103.625H58.4375C52.9674 103.625 47.7214 101.452 43.8534 97.5841C39.9855 93.7161 37.8125 88.4701 37.8125 83ZM58.4375 110.5C54.3583 110.5 50.3706 111.71 46.9789 113.976C43.5871 116.242 40.9436 119.463 39.3825 123.232C37.8214 127.001 37.413 131.148 38.2088 135.149C39.0046 139.15 40.969 142.825 43.8534 145.709C46.7379 148.594 50.4129 150.558 54.4138 151.354C58.4146 152.15 62.5616 151.741 66.3304 150.18C70.0991 148.619 73.3203 145.975 75.5866 142.584C77.8529 139.192 79.0625 135.204 79.0625 131.125V110.5H58.4375Z" />
                  </svg>
                </div>
                {/* Sanity */}
                <div className="col-span-4 col-start-1 sm:col-start-auto lg:col-span-1">
                  <svg
                    height="502"
                    viewBox="1.2 .4 352.2 70.9"
                    width="2500"
                    className="max-h-36 w-full h-full object-contain fill-night dark:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m264 25.5v44.7h-14.4v-51.7z" />
                    <path d="m60.2 61.9 10.8 9.4 45.5-23.7-4.7-11.3zm189.4-28.8 36.6-19-6.2-10.7-30.4 15.1z" />
                    <path d="m146.6 22v48.2h-13.8v-68.7zm-86.4 39.9 10.8 9.4 20.8-52-6.7-17.8z" />
                    <path d="m85.1 1.5h14.2l26.3 68.7h-14.6zm63.6 0 30.3 46.9v21.8l-46.2-68.7zm56.3 0h14.3v68.7h-14.3zm44.6 12.6h-22v-12.6h51.3l7.3 12.6h-22.2z" />
                    <path d="m328.5 44.1v26.1h-14.2v-26.1" />
                    <path d="m338.3 1.5-24 42.6h14.2l24.9-42.6z" />
                    <path d="m314.3 44.1-24.8-42.6h15.6l16.7 29.2z" />
                    <path d="m6.9 9.5c0 9.5 5.9 15.2 17.7 18.2l12.5 2.9c11.2 2.6 18 9 18 19.4.1 4.5-1.4 8.9-4.1 12.5 0-10.4-5.4-16-18.3-19.4l-12.3-2.8c-9.9-2.2-17.5-7.5-17.5-18.8 0-4.3 1.4-8.6 4-12" />
                    <g>
                      <path d="m179 44.9v-43.4h13.8v68.7h-13.8z" />
                      <path d="m43.3 47.4c5.3 3.4 7.7 8.2 7.7 15.1-4.5 5.7-12.2 8.8-21.3 8.8-15.3 0-26.2-7.6-28.5-20.7h14.7c1.9 6 6.9 8.8 13.7 8.8 8.1.1 13.6-4.3 13.7-12m-28.7-23.8c-5-3-7.9-8.4-7.7-14.2 4.3-5.6 11.7-9 20.7-9 15.7 0 24.7 8.3 27 19.9h-14.2c-1.6-4.6-5.5-8.2-12.6-8.2-7.7.1-12.9 4.5-13.2 11.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
