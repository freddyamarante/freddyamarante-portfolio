import Image from 'next/image'
import { Amarante } from 'next/font/google'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-amarante',
})

export default function Projects() {
  return null
  // <section>
  //   <div className="border-2 border-night dark:border-white mx-2 lg:mx-8 my-5 ">
  //     <div className="flex flex-col px-8 lg:px-20 py-20">
  //       <div className="flex justify-between mb-8">
  //         <h1
  //           className={`${amarante.className} text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-right mb-2 px-2 underline decoration-4 underline-offset-4 decoration-marian dark:decoration-madder`}
  //         >
  //           What I&apos;ve worked on
  //         </h1>
  //         <div className="flex flex-row items-center">
  //           <svg
  //             viewBox="0 0 100 100"
  //             className="h-4 w-4 mr-2 text-marian dark:text-madder"
  //           >
  //             <rect
  //               x="10"
  //               y="10"
  //               width="80"
  //               height="80"
  //               fill="currentColor"
  //             />
  //           </svg>
  //           <div className="uppercase text-sm font-black">Projects</div>
  //         </div>
  //       </div>
  //       {/* Projects here */}
  //       <div className="py-8">
  //         <div className="flex flex-row max-h-[32rem]">
  //           <div className="flex flex-col basis-2/5">
  //             <h1 className={`${amarante.className} text-5xl`}>
  //               Freelance e-commerce project using Shopify
  //             </h1>
  //             <p>soy un texto</p>
  //             <Image
  //               className="object-center object-cover w-full h-full"
  //               src="/andrew-neel.jpg"
  //               alt="Freddy Amarante"
  //               width={511}
  //               height={767}
  //             />
  //           </div>
  //           <div className="flex flex-col basis-3/5"></div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
}
