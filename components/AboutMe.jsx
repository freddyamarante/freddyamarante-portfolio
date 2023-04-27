import Image from 'next/image'
import { Amarante } from 'next/font/google'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-amarante',
})

export default function AboutMe() {
  return (
    <section>
      <div className="h-full border-2 border-night dark:border-white mx-2 lg:mx-8 my-5 ">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col lg:w-2/3 px-8 pb-10 lg:py-20 lg:pr-8 lg:pl-20 justify-center">
            <div className="flex flex-row items-center pb-3 lg:pb-12">
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
              <div className="uppercase text-sm font-black">About me</div>
            </div>
            <h1
              className={`${amarante.className} text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-2 underline decoration-4 underline-offset-4 decoration-marian dark:decoration-madder`}
            >
              Cooler than your average developer
            </h1>
            <h2
              className={`${amarante.className} text-xl xs:text-2xl lg:text-3xl mb-8`}
            >
              and definitely not cocky...
            </h2>
            <p className="text-md lg:text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
              aliquam arcu. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Aenean iaculis turpis
              non turpis condimentum auctor. Nullam tortor tellus, egestas non
              dapibus nec, convallis at nisl. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus mauris velit, volutpat et
              felis id, vehicula tempus turpis. Etiam lacinia purus ac mi
              fringilla, at pellentesque justo pharetra. Morbi vulputate varius
              lectus, a pulvinar odio lobortis semper. Ut hendrerit, magna
              gravida ullamcorper faucibus, justo massa euismod enim, et
              ullamcorper lorem turpis at dolor. Donec vel ullamcorper tortor.
              Phasellus pellentesque consectetur facilisis.
            </p>
            <p className="text-md lg:text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
              aliquam arcu. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Aenean iaculis turpis
              non turpis condimentum auctor. Nullam tortor tellus, egestas non
              dapibus nec, convallis at nisl. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus mauris velit, volutpat et
              felis id, vehicula tempus turpis. Etiam lacinia purus ac mi
              fringilla, at pellentesque justo pharetra. Morbi vulputate varius
              lectus, a pulvinar odio lobortis semper. Ut hendrerit, magna
              gravida ullamcorper faucibus, justo massa euismod enim, et
              ullamcorper lorem turpis at dolor. Donec vel ullamcorper tortor.
              Phasellus pellentesque consectetur facilisis.
            </p>
          </div>
          <div className="flex lg:w-1/2 order-first lg:order-last justify-center aspect-w-8 aspect-h-7 lg:aspect-none">
            <Image
              className="object-center object-cover lg:w-full lg:h-full p-8 lg:p-14 max-h-lg outline outline-night dark:outline-white outline-offset-[-32px] lg:outline-offset-[-56px]"
              src="/andrew-neel.jpg"
              alt="Freddy Amarante"
              width={511}
              height={767}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
