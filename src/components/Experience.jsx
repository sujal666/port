// import React from 'react'
// import { Timeline } from './Timeline'
// import { experiences } from "../constants";
// const Experience = () => {
//   return (
//     <section className='bg-black pb-52'>
//          <div className='bg-black pl-40 pr-40 '>
          
//               <Timeline data={experiences} />
//          </div>
//     </section>
//   )
// }

// export default Experience


import React from 'react'
import { experiences } from "../constants";
import { Timeline } from './Timeline';

const Experience = () => {
  return (
    <section id='experience' className='bg-black pb-52'>
         <div className='px-5 py-32'>
             <p className='  text-blue-50 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'>
              Work Experience
             </p>
             <div className='bg-black pl-40 pr-40 '>
          
              <Timeline data={experiences} />
          </div>
         </div>
         
    </section>
  )
}

export default Experience