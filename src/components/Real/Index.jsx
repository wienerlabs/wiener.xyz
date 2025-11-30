import img1 from '../../assets/images/14.png'
import img2 from '../../assets/images/15.png'
import img3 from '../../assets/images/16.png'
import img4 from '../../assets/images/17.png'
import img5 from '../../assets/images/18.png'
import img6 from '../../assets/images/19.png'
import img7 from '../../assets/images/20.png'
import img8 from '../../assets/images/21.png'
import img9 from '../../assets/images/22.png'
import { useRef} from 'react';
import { gsap } from "gsap";
import { Power2,} from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Real() {
    const container = useRef(null);
    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            }
         });
         tl.to(".slide", {
            xPercent: -300,
            ease: Power2
         })
         tl.to(".image7", {
            opacity: 0,
         })              
    }, container );

  return (
    <div
        id="about"
        data-color="salmon"
        ref={container}
        className="real section w-full px-4 sm:px-8 mt-16 sm:mt-32"
    >
      <div className="cont h-[300vh] sm:h-[400vh] relative">
        <div className="slides w-full h-screen lg:h-[130vh] overflow-hidden sticky top-0 left-0 flex">
            {/* 1st slide */}
            <div className="slide w-full flex items-center justify-center h-screen flex-shrink-0">
                <div className="text1 font-[SansitaReg] text-4xl sm:text-6xl lg:text-8xl leading-tight text-center lg:text-left">
                    <h1>Real Assets,</h1>
                    <h1>Real Value</h1>
                </div>
                <div className="image absolute w-20 h-20 sm:w-32 sm:h-32 lg:w-48 lg:h-48 top-1/4 sm:top-1/2 sm:-translate-y-1/2 right-4 sm:right-0 sm:translate-x-1/4">
                    <img src={img1} className="w-full h-full object-contain rounded-full" />
                </div>
            </div>

            {/* 2nd slide */}
            <div className="slide w-full h-screen flex items-center justify-center flex-shrink-0 relative">
                <div className="hidden lg:block image absolute w-32 lg:w-40 lg:h-40 top-10 -translate-y-1/2 right-1/6">
                    <img src={img2} className="w-full h-full object-contain rounded-full" />
                </div>
                <div className="w-[85%] sm:w-[70%] lg:w-[60%] text-center font-[SansitaReg] relative">
                    <h3 className="hidden lg:block font-[Sansita] lg:w-1/3 text-left font-semibold tracking-tight text-sm absolute top-0 left-0 z-[3] -translate-y-1/2 -translate-x-1/3">
                        We are on a mission to impact as many lives as possible and build a better company.
                    </h3>
                    <h1 className="font-semibold text-5xl sm:text-6xl lg:text-8xl leading-none text-black">$28M</h1>
                    <h3 className="text-sm sm:text-lg lg:text-2xl font-semibold leading-relaxed mt-2">
                        Total Market Value across Solana and Ethereum ecosystems.
                    </h3>
                </div>
                <div className="hidden lg:block image absolute w-16 lg:w-24 lg:h-24 top-2/3 left-1/4 -translate-x-1/2">
                    <img src={img4} className="w-full h-full object-contain rounded-full" />
                </div>
                <div className="hidden lg:block image absolute w-32 lg:w-40 lg:h-40 bottom-0 right-1/6 -translate-x-2/3 translate-y-1/2">
                    <img src={img3} className="w-full h-full object-contain rounded-full" />
                </div>
                <div className="hidden lg:block image absolute w-32 lg:w-40 lg:h-40 top-1/2 -translate-y-1/2 translate-x-1/2 right-0">
                    <img src={img5} className="w-full h-full object-contain rounded-full" />
                </div>
            </div>
            
            {/* 3rd slide */}
            <div className="slide w-full h-screen flex items-center justify-center flex-shrink-0 relative">
                <div className="w-[85%] sm:w-[70%] lg:w-[60%] text-center font-[SansitaReg] relative">
                    <h3 className="hidden lg:block font-[Sansita] lg:w-1/3 text-left font-semibold tracking-tight text-sm absolute top-0 left-0 z-[3] -translate-y-1/2 -translate-x-1/3">
                        Our team of 16 senior developers and fintech experts accelerates innovation across blockchain and Web3.
                    </h3>
                    <h1 className="font-semibold text-5xl sm:text-6xl lg:text-8xl leading-none text-black">62</h1>
                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-semibold leading-relaxed mt-2">Completed Projects</h3>
                </div>
            </div>

            {/* 4th slide */}
            <div className="slide w-full h-screen flex items-center justify-center relative flex-shrink-0">
                <div className="hidden lg:block image absolute w-32 lg:w-40 lg:h-40 top-10 translate-x-1/2 -translate-y-1/2 right-2/3">
                    <img src={img6} className="w-full h-full object-contain rounded-full" />
                </div>
                <div className="w-[85%] sm:w-[70%] lg:w-[60%] text-center font-[SansitaReg] relative">
                    <h1 className="font-semibold text-5xl sm:text-6xl lg:text-8xl leading-none text-black">87</h1>
                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-semibold leading-relaxed mt-2">Fintech Projects <br/> Delivered.</h3>
                </div>
                <div className="hidden lg:block image7 absolute w-32 lg:w-40 lg:h-40 bottom-0 right-2/4 translate-y-1/2 -translate-x-1/2">
                    <img src={img7} className="w-full h-full object-contain rounded-full" />
                </div>
                <div className="hidden lg:block image absolute w-32 lg:w-40 lg:h-40 top-0 translate-y-1/5 translate-x-2/3 right-0">
                    <img src={img9} className="w-full h-full object-contain rounded-full" />
                </div>
                <div className="hidden lg:block image absolute w-24 lg:w-32 lg:h-32 top-2/3 translate-y-1/5 -translate-x-1/3 right-1/4">
                    <img src={img8} className="w-full h-full object-contain rounded-full" />
                </div>
            </div>   
        </div>
      </div>
    </div>
  )
}

export default Real;
