import React, { useEffect } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
gsap.registerPlugin(ScrollTrigger);
function ThirdSection() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".marq",
      start: "top bottom",
      end: "bottom top",

      onEnter: () => {
        gsap.to(".howto", {
          duration: 0.1,
          backgroundColor: "#fff",
        });
      },

      onLeaveBack: () => {
        gsap.to(".howto", {
          duration: 1.0,
          backgroundColor: "rgba(0,0,0,0.1)",
        });
      },
    });
  });

  return (
    <div
      style={{
        height: "70vh",
        width: "100%",
      }}
      className=" align-middle justify-center items-center flex"
    >
      <div className=" rounded-2xl w-96 h-96 bg-white p-10">
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="./videos/home_scroll.mp4"
          
        />,
      `,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ThirdSection;
