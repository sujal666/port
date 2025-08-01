import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: '#clip',
          start: 'center center',
          end: '+=800 center',
          scrub: 0.5,
          pin: true,
          pinSpacing: true
        }
    })

    clipAnimation.to('.mask-clip-path', {
      width:'100vw',
      height: '100vh',
      borderRadius: 0
    } )
  })
  return (
    <div id='about' className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <h2 className='font-general text-sm uppercase md:text-[10px]'>
                 Welcome to mt Portfolio
            </h2>

            <div className='mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'>
                 Dr<b>i</b>ven, Hungry,   <br /> M<b>a</b>stering my craft
            </div>

            <div className='about-subtext'>
               <p>Though I'm still early in my journey, I bring a strong eagerness</p>
               <p>to learn and a deep commitment to improving every day.</p>
            </div>
        </div>


     
 <div id="clip" className="relative h-dvh w-screen">

  {/* Developer 1 - LEFT */}
  <div className="absolute top-10 left-20 z-10 w-80 flex flex-col items-center gap-2">
    <div className="h-[30vh] w-full overflow-hidden rounded-3xl">
      <img src="img/developer1.jpg" className="h-full w-full object-cover" />
    </div>
    <p className="text-center font-circular-web text-lg font-bold md:max-w-[34rem]">Full Stack Developer</p>
    <p className="text-center font-circular-web  md:max-w-[34rem]">
  I build full-stack apps with Next.js, Tailwind CSS, and TypeScript on the frontend, and Node.js, Prisma, and PostgreSQL on the backend. Skilled in Docker and CI/CD pipelines for scalable, automated deployment.


    </p>
  </div>

  {/* Developer 2 - CENTER (ANIMATED) */}
  <div className="mask-clip-path absolute h-[30vh] top-10 left-1/2 z-20 w-80 -translate-x-1/2 overflow-hidden rounded-3xl">
    <img src="img/developer2.jpg" className="h-full w-full object-cover" />
  </div>

  {/* Developer 3 - RIGHT */}
  <div className="absolute top-10 right-20 z-10 w-80 flex flex-col items-center gap-2">
    <div className="h-[30vh] w-full overflow-hidden rounded-3xl">
      <img src="img/developer3.jpg" className="h-full w-full object-cover" />
    </div>
        <p className="text-center font-circular-web text-lg font-bold md:max-w-[34rem]">Mern Stack Developer</p>
    <p className="text-center font-circular-web  md:max-w-[34rem]">
      I build end-to-end web applications using MongoDB, Express.js, React, and Node.js. Experienced in REST APIs, authentication, and deploying scalable apps with Docker and CI/CD.
    </p>
  </div>

{/* Description for Developer 2 */}
<div className="absolute left-1/2 top-[calc(30vh+3rem)] z-10 w-80 -translate-x-1/2 flex flex-col items-center gap-2">
  <p className="text-center font-circular-web text-lg font-bold md:max-w-[34rem]">
    AI Engineer
  </p>
  <p className="text-center font-circular-web md:max-w-[34rem]">
    I build intelligent systems using LLMs, NLP, and AI agents. Skilled in fine-tuning models, prompt engineering, and deploying scalable AI solutions with Python, LangChain, and Docker.
  </p>
</div>



</div>


    </div>
  )
}

export default About