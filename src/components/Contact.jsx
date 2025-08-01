// import React from 'react'

// const Contact = () => {
//   return (
//     <div id='contacts' className='my-20 min-h-96 w-screen px-10' >
//         <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
//                <div className='absolute -left-20 top- hidden h-full w-72 overflow-hidden sm:block lg-left-20'>

//                </div>
//         </div>
//     </div>
//   )
// }

// export default Contact


import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { GiMailbox } from "react-icons/gi";
import { GoMail } from "react-icons/go";


const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contacts" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            thanks for visiting
          </p>

          <AnimatedTitle
            title="let&#39;s C<b>o</b>nnect and <br /> grow together "
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          {/* <Button title="contact us" containerClass="mt-10 cursor-pointer" /> */}
             <p className="mb-10 mt-10 font-general text-[10px] uppercase">
             My Socials
          </p>
          <div className="flex flex-row gap-4">

            <a href="https://github.com/sujal666" target="_blank" rel="noopener noreferrer">
                <BsGithub />
            </a>
            
            <a href="https://www.linkedin.com/in/sujalpoojari/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>

               <a href="https://x.com/Sujal50822932" target="_blank" rel="noopener noreferrer">
                <BsTwitterX />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
