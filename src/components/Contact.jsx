import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { gsap } from "gsap"; // Make sure to import gsap

const ImageClipBox = ({ src, clipClass, innerRef, ...props }) => (
    <div className={clipClass} ref={innerRef} {...props}>
        <img src={src} alt="" />
    </div>
);

const Contact = () => {
    return (
        <div id="contact" className="my-20 min-h-96 w-screen px-10">
            <div className="relative rounded-lg bg-slate-900 py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox

                        src="img/contact-1.webp"
                        clipClass="contact-clip-path-1"
                    />
                    <ImageClipBox

                        src="img/contact-2.webp"
                        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                    />
                </div>

                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox

                        src="img/swordman-partial.webp"
                        clipClass="absolute md:scale-125"
                    />
                    <ImageClipBox
                        src="img/swordman.webp"
                        clipClass="sword-man-clip-path md:scale-125"
                    />
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="mb-10 font-general text-[10px] uppercase">
                        Join Zentry
                    </p>
                    <AnimatedTitle
                        title="let's build the <br/> new era of <br/> gaming together."
                        containerClass="special-font text-5xl sm:text-3xl md:text-5xl lg:text-[6.2rem] font-zentry leading-tight tracking-wide"
                    />

                    <a className="relative mt-4 px-5 py-3 overflow-hidden font-medium text-gray-600 rounded-2xl bg-gray-300 border border-gray-100 shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 text-sm cursor-pointer  group-hover:text-white ease uppercase">Contact us</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;