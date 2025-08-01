// import React from 'react'

// const AnimatedTitle = ({title, containerClass}) => {
//   return (
//      <div className='mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'>
//            {title.split('<bt />').map((line, index) => (
//                <div key={index} className='flex-center max-w-full flex-wrape gap-2 px-10 md:gap-3'>
//                   {line.split(' ').map((word, i) => (
//                     <span key={i} className='animated-word' dangerouslySetInnerHTML={{__html: word}} />
//                   ))}
//                 </div>
//            ))}
//     </div>
//   )
// }

// export default AnimatedTitle

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}
       style={{
            letterSpacing: '0.2rem'
          }}
    >
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
       
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
