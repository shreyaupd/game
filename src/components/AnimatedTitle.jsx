import React, { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
    const containerref = useRef(null);
    
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: containerref.current,
                start: 'top 80%',
                end: 'center center',
                toggleActions: 'play none none reverse',
            }
        })
        .to('.animated-word', {
            opacity: 1,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            ease: 'power2.inOut',
            stagger: 0.03,
            duration: 0.5
        })
    }, { scope: containerref });

    return (
        <div ref={containerref} className={`animated-title ${containerClass}`}>
            {title.split('<br/>').map((line, index) => (
                <div key={index} className="flex justify-center max-w-full flex-wrap gap-x-4 gap-y-2 px-4 md:px-10 md:gap-x-6">
                    {line.split(' ').map((word, i) => (
                        <span 
                            key={i} 
                            className="animated-word inline-block opacity-0 translate-y-10 rotate-x-5 rotate-y-5"
                            dangerouslySetInnerHTML={{ __html: word }}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
};

export default AnimatedTitle