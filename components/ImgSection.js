import React from "react";
import Image from "next/image";
import img1 from "../public/picture/section_4_1.png";
import img2 from "../public/picture/section_4_2.png";
import img3 from "../public/picture/section_4_3.png";

import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
function ImgSection() {
  React.useEffect(() => {
    ScrollTrigger.create({
      trigger: ".img-scale",
      start: "top bottom",
      end: "bottom top",

      onEnter: () => {
        gsap.to(".smallimg", {
          duration: 1.5,
          scale: 1.2,
          ease: "power4",
        });
      },

      onLeaveBack: () => {
        gsap.to(".smallimg", {
          duration: 1.5,
          scale: 1,
          ease: "power4",
        });
      },
    });
    ScrollTrigger.create({
      trigger: ".img-scale2",
      start: "top bottom",
      end: "bottom top",

      onEnter: () => {
        gsap.to(".smallimg2", {
          duration: 1.5,
          scale: 1.2,
          ease: "power4",
        });
      },

      onLeaveBack: () => {
        gsap.to(".smallimg2", {
          duration: 1.5,
          scale: 1,
          ease: "power4",
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".img-scale2",
      start: "top bottom",
      end: "bottom top ",

      onEnter: () => {
        gsap.to(".change-bg1", {
          duration: 1.5,

          y: "20%",
          ease: "power4",
        });
      },

      onLeaveBack: () => {
        gsap.to(".change-bg1", {
          duration: 1.5,
          y: "0%",

          ease: "power4",
        });
      },
    });
    ScrollTrigger.create({
      trigger: ".img-scale2",
      start: "top bottom",
      end: "bottom top ",

      onEnter: () => {
        gsap.to(".change-bg", {
          duration: 1.5,

          y: "-30%",
          ease: "power4",
        });
      },

      onLeaveBack: () => {
        gsap.to(".change-bg", {
          duration: 1.5,
          y: "0%",

          ease: "power4",
        });
      },
    });
  });
  return (
    <section
      style={{
        height: "70vh",
        width: "100%",
        zIndex: "2",
        position: "relative",
        overflow: "hidden",
        
      }}
      className=" text-6xl grid grid-cols-3 px-20 py-5 img-scale"
    >
      <div
        style={{

            
        }}
        className=" "
      >
        <Image className="" src={img1} />
    
      </div>
      <div
        style={{
         
        }}
        className=" smallimg"
      >
        <Image className="" src={img2}  />
       
      </div>
      <div
        style={{
          
        }}
        className=""
      >
        <Image className="" src={img3}  />
   
      </div>
    </section>
  );
}

export default ImgSection;