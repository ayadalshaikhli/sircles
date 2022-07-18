import React from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { Image } from "next/image";
import logo from "../public/picture/money_talks.png";
import img1 from "../public/picture/section_4_1.png";
import img2 from "../public/picture/section_4_2.png";
import img3 from "../public/picture/section_4_3.png";
function NewHor() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Controller>
        <Scene triggerHook="onLeave" duration="4000" pin>
          <Tween from={{ x: "0" }} to={{ x: "-100%" }}>
            <div
              style={{
                height: "100vh",
                width: "400%",
                overflowX: "hidden !important",
              }}
              className="arabic-left relative  text-2xl whitespace-nowrap overflow-hidden px-20 py-10"
            >
              <div className="  absolute left-0 top-1/4 px-10 py-10 ">
                <div
                  style={{
                    fontSize: "15.5rem",
                  }}
                >
                  POSITIVE VIBES ONLY Be your best self Sircles is a community
                  of positivity and sharing You can't always be positive all the
                  time but in Sircles we are.. Negativity, bullying and drama
                  get checked at the door.
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "800px",
                }}
                className=" "
              >
                Ayad
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "1800px",
                }}
              >
                Mark
              </div>
            </div>
          </Tween>
        </Scene>
      </Controller>
      <Controller>
        <Scene triggerHook="onLeave" duration="4000">
          <Tween from={{ x: "0" }} to={{ y: "-100%" }}>
            <div
              style={{
                height: "100vh",
                width: "400%",

                overflowX: "hidden !important",
              }}
              className="arabic-left relative  text-2xl whitespace-nowrap bg-white overflow-hidden px-20 py-10"
            >
              <div className=" absolute top-0 left-0">
                <div>POSITIVE VIBES ONLY</div>
                <div>Sircles is a community of positivity and sharing.</div>
                <div>
                  Negativity, bullying and drama get checked at the door.
                </div>
                <div>
                  You can't always be positive all the time but in Sircles we
                  are.
                </div>
                <div>Be your best self.</div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
                className="text-black "
              >
                ayad
              </div>
            </div>
          </Tween>
        </Scene>
      </Controller>
      <Controller>
        <Scene triggerHook="onStart" duration="4000">
          <Tween from={{ x: "-600" }} to={{ x: "-100%" }}>
            <div
              style={{
                height: "100vh",
                width: "100%",
                overflowX: "hidden !important",
              }}
              className="arabic-left text-2xl whitespace-nowrap bg-white overflow-hidden px-20 py-10"
            >
              <div>
                <div>POSITIVE VIBES ONLY</div>
                <div>Sircles is a community of positivity and sharing.</div>
                <div>
                  Negativity, bullying and drama get checked at the door.
                </div>
                <div>
                  You can't always be positive all the time but in Sircles we
                  are.
                </div>
                <div>Be your best self.</div>
              </div>
              <div></div>
            </div>
          </Tween>
        </Scene>
      </Controller>
    </div>
  );
}

export default NewHor;
