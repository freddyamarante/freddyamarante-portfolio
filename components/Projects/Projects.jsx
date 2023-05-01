import { Amarante } from 'next/font/google'

import Project from './Project'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
})

export default function Projects() {
  return (
    <section>
      <div className="border-2 border-night dark:border-white mx-2 lg:mx-8 my-5 ">
        <div className="flex flex-col px-8 lg:px-20 py-20">
          <div className="flex flex-col md:flex-row justify-between pb-8 lg:pb-20">
            <h1
              className={`${amarante.className} text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-center md:text-right px-2 underline decoration-4 underline-offset-4 decoration-marian dark:decoration-madder`}
            >
              What I&apos;ve worked on
            </h1>
            <div className="flex flex-row items-center order-first mb-8 md:mb-0">
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
              <div className="uppercase text-sm font-black">Projects</div>
            </div>
          </div>
          {/* Projects here */}
          <Project
            title="Freelance e-commerce project using Shopify"
            description="For my first freelance project, I created an e-commerce site for a French company that specializes in gastronomy, handcrafts, and unique collections from all over the world. My task was to build the site using Shopify, and I used my knowledge of Liquid to create and edit sections on the theme."
            imageSrc="/andrew-neel.jpg"
            pointTitle1="Applied Shopify Liquid to create and edit sections on a Shopify
            Theme"
            pointDescription1="This allowed me to build custom features that are not available out of the box on Shopify. The client was very happy with the final result, and I learned a lot about Shopify and how it can be used to create stunning e-commerce sites."
            pointTitle2="Used my skills in CSS to adapt the website to the customer's
            design language"
            pointDescription2="This included making sure that the website was consistent with the client's brand guidelines, and that it looked beautiful and was easy to navigate. By using my knowledge of CSS, I was able to create a nice and functional website that met the client's needs."
            pointTitle3="Demonstrated ability to effectively manage time and meet deadlines
            while working in an agile framework"
            pointDescription3="I was able to collaborate with the client to make sure that the project was on track, and I was able to meet all of the milestones and deadlines that were set. By working in an agile framework, I was able to make sure that the project was completed on time and that the client was happy with the final result."
            url="https://terrafusionshop.com/"
          />
          <Project
            title="Marble Race game using React Three Fiber"
            description="The game features a physics simulation where players race marbles on a randomly generated track. This game was made as part of the Three.js Journey final project, where I continue to add new obstacles and improvements to go further with my WebGL learning journey!"
            imageSrc="/andrew-neel.jpg"
            pointTitle1="Utilized Zustand for streamlined state management and improved React application performance"
            pointDescription1="Leveraging the power of Zustand, I streamlined state management and improved overall application performance. With Zustand, I was able to avoid unnecessary re-renders and optimize state updates."
            pointTitle2="Utilized React Three Fiber tools to create a fun project with replayability"
            pointDescription2="I've always been fascinated with cool 3D experiences on the web, and R3F makes it accessible for newcomers to be able to do so and for people like me who used Three.js in the past and want to focus on fast development without missing anything in the process."
            pointTitle3="Employed Rapier to ensure realistic physics interactions"
            pointDescription3="allowed me to create accurate physics interactions in real-time. With Rapier, I was able to simulate realistic motion and interactions between marbles, creating a compelling and immersive game."
            url="https://ballrace-r3f.vercel.app/"
            repository="https://github.com/freddyamarante/ballrace-r3f"
          />
        </div>
      </div>
    </section>
  )
}
