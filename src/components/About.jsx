import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import React from 'react'

const About = () => {
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: '#clip',
                start: "center center",
                end: '+=800 center',
                markers: true,
                duration: 5,
                scrub: 1,
                pin: true,
                pinSpacing: true,
            },
        });
        tl.to('.mask-clip-path', {
            width:'105vw',
            height: '100vh',
        }
        )
    });
  return (
    <div id='about' className='min-h-screen w-screen'>
        <div className='relative flex flex-col mt-32 mb-8 justify-center item-center text-center'>
           <h2 className='uppercase font-general mb-8 text-sm md:text-[20px]'>
            Welcome to zentry
           </h2>

           <div className='uppercase text-4xl leading-[0.8] md:text-[6rem]'>
            Disc<b>o</b>ver the world's<br/> l<b>a</b>rgest shared adventure
           </div>

           <div className="about-subtext">
            <p>
                The Game of Games Begins-your life, now an epic MMORPG
            </p>
            <p>
                Zentry unites every player from countless games and platforms
            </p>
           </div>

        </div>

        <div id='clip' className='h-dvh min-w-screen'>
            <div className='mask-clip-path about-image'>
                <img src="img/about.webp" alt="Background" className='absolute left-0 top-0 size-full object-cover' />
            </div>
        </div>
    </div>
  )
}

export default About