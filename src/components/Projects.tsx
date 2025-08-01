// // import { section } from 'motion/react-client'
// // import React from 'react'
// // import { TiLocationArrow } from 'react-icons/ti'
// // import Button from './Button'

// // const Projects = () => {
// //   return (
// //    <section  className='min-h-screen w-screen'>
// //     <div className='flex flex-row'>
// //         <div className='relative mb-8  mt-36 flex flex-col  items-start text-left ml-10 gap-5'>
// //             {/* <h2 className='font-general text-sm uppercase md:text-[10px]'>
// //                  Welcome to mt Portfolio
// //                  </h2> */}

// //             <div className='mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'>
// //                  Projects
// //             </div>

// //             <div className=''>
// //                <p>Though I'm still early in my journey, I bring a strong eagerness</p>
// //                <p>to learn and a deep commitment to improving every day.</p>
// //             </div>

// //               <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow />} 
// //                     containerClass="!bg-purple-300 flex-center gap-1"
// //                     />
// //         </div>
// //     </div>

// //      <div className='flex flex-col items-end mr-48 -mt-80'>
// //             <div >
// //                   <div className=''>
// //                     <div className="h-[30vh] w-[30vw] overflow-hidden ">
// //                        <img src="img/developer1.jpg" className="h-full w-full object-cover" />
// //                          </div>
// //                     <p className='mt-4 font-bold text-center'>
// //                           VidGenie– AI-powered video content generator
// //                     </p>
// //                        <p>
// //                          Developed a full-stack application for  YouTube channel data scraping <br /> and AI-driven video idea  generation using Next.js,
// //                          TypeScript,<br /> and TailwindCSS.
// //                     </p>
     
// //                   </div>
// //             </div>
// //         </div>
// //     </section>
// //   )
// // }

// // export default Projects



// // import { section } from 'motion/react-client'
// // import React from 'react'
// // import { TiLocationArrow } from 'react-icons/ti'
// // import Button from './Button'

// // const Projects = () => {
// //   return (
// //     <section className='min-h-screen w-screen px-10 py-20'>
// //       <div className='flex flex-col md:flex-row justify-between items-start gap-10'>

// //         {/* LEFT SIDE */}
// //         <div className='flex flex-col mt-20 items-start gap-5 max-w-xl'>
// //           <div className='text-4xl uppercase leading-[0.8] md:text-[6rem]'>
// //             Projects
// //           </div>

// //           <div className='text-base md:text-lg'>
// //             <p>Though I'm still early in my journey, I bring a strong eagerness</p>
// //             <p>to learn and a deep commitment to improving every day.</p>
// //           </div>

// //           <Button
// //             id="watch-trailer"
// //             title="Watch Trailer"
// //             leftIcon={<TiLocationArrow />}
// //             containerClass="!bg-purple-300 flex-center gap-1"
// //           />
// //         </div>

// //         {/* RIGHT SIDE */}
// //         <div className='flex flex-col items-end mr-32'>

// //           {/* card 1 */}
// //         <div id='card1' className=' w-[30vw]  '>

// //           <div className='w-full overflow-hidden  shadow-lg'>
// //             <img
// //               src="img/developer1.jpg"
// //               alt="VidGenie Project"
// //               className="h-[30vh] w-full object-cover"
// //             />
// //           </div>

// //           <div className='mt-6 text-right'>
// //             <h3 className='text-xl font-bold mb-2 text-center'>
// //               VidGenie – AI-powered video content generator
// //             </h3>
// //             <ul className='list-disc list-inside text-sm leading-relaxed  text-black text-left'>
// //               <li>
// //                 Developed a full-stack application for YouTube channel data scraping and AI-driven video idea generation using <b>Next.js</b>, <b>TypeScript</b>, and <b>TailwindCSS</b>.
// //               </li>
// //               <li>
// //                 Integrated <b>YouTube Data API</b> to fetch videos, comments, and metadata for analysis.
// //               </li>
// //               <li>
// //                 Implemented AI workflows with <b>CrewAI/OpenAI</b> to generate optimized video ideas.
// //               </li>
// //               <li>
// //                 Deployed and managed serverless PostgreSQL with <b>Neon</b> and used <b>Drizzle ORM</b> for database operations.
// //               </li>
// //             </ul>
// //            <Button
// //             id="watch-trailer"
// //             title="vist now"
// //             leftIcon={<TiLocationArrow />}
// //             containerClass="!bg-purple-300 flex-center gap-1 mt-4"
// //           />
// //           </div>
// //         </div>

// //         {/* card 2 */}
             
// //           <div id='card2' className=' w-[30vw] mt-12'>

// //           <div className='w-full overflow-hidden  shadow-lg'>
// //             <img
// //               src="img/developer1.jpg"
// //               alt="VidGenie Project"
// //               className="h-[30vh] w-full object-cover"
// //             />
// //           </div>

// //           <div className='mt-6 text-right'>
// //             <h3 className='text-xl font-bold mb-2 text-center'>
// //               VidGenie – AI-powered video content generator
// //             </h3>
// //             <ul className='list-disc list-inside text-sm leading-relaxed  text-black text-left'>
// //               <li>
// //                 Developed a full-stack application for YouTube channel data scraping and AI-driven video idea generation using <b>Next.js</b>, <b>TypeScript</b>, and <b>TailwindCSS</b>.
// //               </li>
// //               <li>
// //                 Integrated <b>YouTube Data API</b> to fetch videos, comments, and metadata for analysis.
// //               </li>
// //               <li>
// //                 Implemented AI workflows with <b>CrewAI/OpenAI</b> to generate optimized video ideas.
// //               </li>
// //               <li>
// //                 Deployed and managed serverless PostgreSQL with <b>Neon</b> and used <b>Drizzle ORM</b> for database operations.
// //               </li>
// //             </ul>
// //            <Button
// //             id="watch-trailer"
// //             title="vist now"
// //             leftIcon={<TiLocationArrow />}
// //             containerClass="!bg-purple-300 flex-center gap-1 mt-4"
// //           />
// //           </div>
// //         </div>

// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default Projects










// import { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { TiLocationArrow } from 'react-icons/ti';
// import Button from './Button';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const Projects = () => {
//   const sectionRef = useRef(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);

//   useEffect(() => {
//     const card1 = card1Ref.current;
//     const card2 = card2Ref.current;

//     // Animation for Card 1 (fade out as we scroll)
//     gsap.to(card1, {
//       opacity: 0,
//       y: -50,
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "center center", // When Projects section's top hits center
//         end: "+=800 center", // When Projects section's center hits center
//           scrub: 0.5,
//           // pin: true,
//           // pinSpacing: true
//       },
//     });

//     // Animation for Card 2 (fade in as we scroll)
//     gsap.fromTo(
//       card2,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top center",
//           end: "+=900 center",
//           scrub: 1,
//         },
//       }
//     );
//   }, []);

//   return (
//     <section ref={sectionRef} className='min-h-screen w-screen px-10 py-20'>
//       <div className='flex flex-col md:flex-row justify-between items-start gap-10'>
//         {/* LEFT SIDE (unchanged) */}
//         <div className='flex flex-col mt-20 items-start gap-5 max-w-xl'>
//           <div className='text-4xl uppercase leading-[0.8] md:text-[6rem]'>
//             Projects
//           </div>
//           <div className='text-base md:text-lg'>
//             <p>Though I'm still early in my journey, I bring a strong eagerness</p>
//             <p>to learn and a deep commitment to improving every day.</p>
//           </div>
  
//         </div>

//         {/* RIGHT SIDE */}
//         <div className='flex flex-col items-end mr-32'>
//           {/* card 1 */}
//           <div ref={card1Ref} id='card1' className='w-[30vw] absolute'>
//             <div className='w-full overflow-hidden shadow-lg'>
//               <img
//                 src="img/developer1.jpg"
//                 alt="VidGenie Project"
//                 className="h-[30vh] w-full object-cover"
//               />
//             </div>
//             <div className='mt-6 text-right'>
//               <h3 className='text-xl font-bold mb-2 text-center'>
//                 VidGenie – AI-powered video content generator
//               </h3>
//                    <ul className='list-disc list-inside text-sm leading-relaxed  text-black text-left'>
//               <li>
//                 Developed a full-stack application for YouTube channel data scraping and AI-driven video idea generation using <b>Next.js</b>, <b>TypeScript</b>, and <b>TailwindCSS</b>.
//               </li>
//               <li>
//                 Integrated <b>YouTube Data API</b> to fetch videos, comments, and metadata for analysis.
//               </li>
//               <li>
//                 Implemented AI workflows with <b>CrewAI/OpenAI</b> to generate optimized video ideas.
//               </li>
//               <li>
//                 Deployed and managed serverless PostgreSQL with <b>Neon</b> and used <b>Drizzle ORM</b> for database operations.
//               </li>
//             </ul>

//             </div>
//           </div>

//           {/* card 2 */}
//           <div ref={card2Ref} id='card2' className='w-[30vw] opacity-0'>
//             <div className='w-full overflow-hidden shadow-lg'>
//               <img
//                 src="img/developer2.jpg"
//                 alt="VidGenie Project"
//                 className="h-[30vh] w-full object-cover"
//               />
//             </div>
//             <div className='mt-6 text-right'>
//               <h3 className='text-xl font-bold mb-2 text-center'>
//                 Another Project
//               </h3>
//               <ul className='list-disc list-inside text-sm leading-relaxed text-black text-left'>
               
//               </ul>

//             </div>
//           </div>


          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
    
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-screen px-24 py-20"
    >
      <h2 className="text-4xl uppercase leading-[0.8] md:text-[6rem] text-center">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
