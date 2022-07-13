import Link from "next/link";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";
import { BsBag } from "react-icons/bs";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import logo from "../public/picture/top_logo.png"
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});
export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  if (cartTotal >= 35) {
    var Good = "Congratulations! We pay shipping!";
  } else {
    var shippingaway = Math.round(35 - cartTotal);
    var free = "You're only" + " $" + shippingaway + " from free shipping";
  }

  // useEffect(() => {
  //   const showAnim = gsap
  //     .from(".nav-main", {
  //       yPercent: -200,
  //       paused: true,
  //       duration: 0.2,
  //     })
  //     .progress(1);

  //   ScrollTrigger.create({
  //     start: "top top",
  //     end: 99999,

  //     onUpdate: (self) => {
  //       self.direction === -1 ? showAnim.play() : showAnim.reverse();
  //     },
  //   });
  // });

  return (
    <header className="relative w-full colornav bg-transparent text-white  max-w-xl mx-auto pt-5   lg:max-w-7xl lg:px-8">
      <div className="nav-main justify-between  flex flex-col sm:flex-row   text-center items-center">
        <div className="logo">
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <Image src={logo} 
                 height={"50px"}
                 width={"150px"}/>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
