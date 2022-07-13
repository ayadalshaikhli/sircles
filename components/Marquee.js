import React from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

function MarqueeSection() {
  //   ScrollTrigger.create({
  //     trigger: ".lol",
  //     start: "top bottom",
  //     end: "bottom top",

  //     onEnter: () => {
  //       gsap.to(".arabic-left", {
  //         duration: 1.5,

  //         ease: "power4",
  //       });
  //     },

  //     onLeaveBack: () => {
  //       gsap.to(".arabic-left", {
  //         duration: 1.5,
  //         x: "0",
  //         ease: "power4",
  //       });
  //     },
  //   });
  return (
    <div
      style={{
        height: "30vh",
        overflow: "hidden",
      }}
      className="text-5xl bggray  arabic text-white"
    >
      <Controller>
        <Scene triggerHook="onStart" duration="3000">
          <Tween from={{ x: "100%" }} to={{ x: "-200%" }}>
            <div className="arabic-left text-9xl w-full whitespace-nowrap  ">
              COMING SOON... COMING SOON...  COMING SOON...  COMING SOON...  
            </div>
          </Tween>
        </Scene>
      </Controller>
      <Controller>
        <Scene triggerHook="onStart" duration="3000">
          <Tween from={{ x: "-230%" }} to={{ x: "200%" }}>
          <div className="arabic-left text-9xl whitespace-nowrap marq">
          COMING SOON... COMING SOON...  COMING SOON...  COMING SOON...  
            </div>
          </Tween>
        </Scene>
      </Controller>
      <div></div>
    </div>
  );
}

export default MarqueeSection;