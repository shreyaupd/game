import React, { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
const AnimatedTitle = ({ title, containerClass }) => {
    const containerref = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerref.current,
                    start: '100 bottom',
                    end: 'center bottom',
                    markers:false,
                    toggleActions: 'play none none reverse',
                },
            })

            tl.to('.animated-word', {
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg)',
                ease: 'power2.inOut',
                stagger: 0.02,
            })
            return () => ctx.revert();
        })
    }, [])
    return (
            <div ref={containerref} className={`animated-title ${containerClass}`}>
                {title.split('<br/> ').map((line, index) => (
                    <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                        {line.split(' ').map((word, i) => (
                            <span key={i} className='animated-word'
                                dangerouslySetInnerHTML={{ __html: word }} />


                        ))}

                    </div>
                ))}
            </div>

        )



    };

    export default AnimatedTitle