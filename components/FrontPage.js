import Image from "next/image";
import apple from "../public/picture/app_store_btn.svg";
import google from "../public/picture/google_play_btn.svg";

import { FaArrowRight, FaBatteryHalf } from "react-icons/fa";
import Link from "next/link";
import { gsap, Expo } from "gsap/dist/gsap";
import React, { useEffect, useState } from "react";
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

export default function FrontPage() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          zIndex: "2",
        }}
        className="md:flex w-full px-20 pt-64 bg-transparent "
      >
        <div className="w-full h-full space-y-5 bg-transparent">
          <h1 className="text-5xl text-white bg-transparent">
            The Social Recommendations App <br /> Designed To Destroy Yelp!
          </h1>
          <h1 className="text-red-500 bg-transparent">
            #DOWN <span className="text-white">with</span> YELP
          </h1>
          <div className="flex space-x-5">
            <div className="hero">
              <a href="https://play.google.com/store/apps/details?id=com.sircles.sircles&hl=en_US&gl=US">
                <Image src={google} height={"50px"} width={"150px"} />
              </a>
            </div>
            <div>
              <a href="https://apps.apple.com/us/app/keynote/id1213538655">
                <Image src={apple} height={"50px"} width={"150px"} />
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
