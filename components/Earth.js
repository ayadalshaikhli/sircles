import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  useGLTF,
  Html,
  OrbitControls,
  Environment,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import logo from "../public/picture/money_talks.png";
gsap.registerPlugin(ScrollTrigger);
import { FaMapMarkerAlt } from "react-icons/fa";

function Model({ props }) {
  /*
  Auto-generated by: https://github.com/pmndrs/gltfjsx
  author: JasperTobias (https://sketchfab.com/JasperTobias)
  license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
  source: https://sketchfab.com/3d-models/lowpoly-earth-ce0cce9b528b47c7984bf0b2b600d705
  title: LowPoly Earth
  */
  const group = useRef();
  const cam = useRef();
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "./videos/onboardinggg.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".wrap",
      scrub: 5,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        // cup.current.rotation.x = -2 * Math.PI * self.progress;
        group.current.position.y = 1 * Math.PI * self.progress;
        group.current.position.z = -5 * Math.PI * self.progress;
        group.current.rotation.y = 5 * Math.PI * self.progress;

        // group.current.rotation.y = 4 * Math.PI * self.progress;

        // cam.current.position.y = 24 * Math.PI  * self.progress;
        // cam.current.rotation.z = 24 * Math.PI  * self.progress;
        // cam.current.rotation.x = -0.22 * self.progress;
        // mark.current.position.x = -1.5 * self.progress;
        // mark.current.position.z = -1.5 * self.progress;
        // cup.current.rotation.z = -2 * Math.PI * self.progress;
        // cup.current.position.y = -17 * self.progress;
        // cup.current.position.y = -2 * self.progress;
      },
    });
  });
  // useFrame((state) => (group.current.rotation.z = Math.sin(state.clock.getElapsedTime() / 2) * Math.PI)
  // )
  const { nodes, materials } = useGLTF("/Iphonex.glb");
  const texture = useLoader(
    THREE.TextureLoader,
    "./picture/monetize_phone2.png"
  );
  return (
    <group ref={group} {...props} dispose={null}>
 
      <group position={[3, 0, -1.0]} rotation={[-0.1, -5, -0.1]} scale={7.86}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.IPHONE}
        />

        <mesh
          castShadow
          receiveShadow
          scale={[1, 1, 1]}
          position={[0, 0, 0]}
          geometry={nodes.Cube001_1.geometry}
        ></mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.glass}
        >
          <meshBasicMaterial color="#40CCEF" />
        </mesh>

        {/* <group scale={1} position={[0, 0, 0]} > <Video /></group> */}
      </group>

      <mesh
        position={[3.19, 0, -0.91]}
        rotation={[-0.01, Math.PI / 2.4, -0.19]}
        scale={[0.5, 1.05, 0.5]}
      >
        <planeGeometry />
        <meshBasicMaterial toneMapped={false}>
          <videoTexture
            attach="map"
            args={[video]}
            encoding={THREE.sRGBEncoding}
          />
        </meshBasicMaterial>
      </mesh>
      <PerspectiveCamera ref={cam} makeDefault fov={50} position={[5, 0, 0]}>
        {/* <directionalLight
        position={[300, 130, 15]}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-left={-8}
        shadow-camera-bottom={-8}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        intensity={15.5}
        shadow-bias={-0.0001}
       
      /> */}
      </PerspectiveCamera>
    </group>
  );
}

function Video() {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "./videos/onboardingg.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <mesh
      position={[0.5, 0.3, -3]}
      rotation={[0, Math.PI / 40, 0]}
      scale={[1, 2, 1]}
    >
      <planeGeometry />
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

// Let's make the marker into a component so that we can abstract some shared logic
function Marker({ children, ...props }) {
  // This holds the local occluded state
  const [occluded, occlude] = useState();
  return (
    <Html
      // 3D-transform contents
      transform
      // Hide contents "behind" other meshes
      occlude
      // Tells us when contents are occluded (or not)
      onOcclude={occlude}
      // We just interpolate the visible state into css opacity and transforms
      style={{
        opacity: occluded ? 0 : 1,
        transform: `translate3d(0, 0, 0) scale(${occluded ? 0 : 1})`,
      }}
      {...props}
    >
      {children}
    </Html>
  );
}

export default function Earth() {
  const ref = useRef();
  return (
    <Canvas
      style={{
        position: "absolute",
        top: "900px",
        height: "100vh",
        width: "100%",
        zIndex: -1,
      }}
      dpr={[1, 2]}
      
    >
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Model position={[0, 0.25, 0]} />

        <Environment preset="city" />
        <ContactShadows
          scale={5}
          position={[0, -1, 0]}
          far={1}
          blur={5}
          opacity={0.8}
          frames={1}
        />
      </Suspense>
      <OrbitControls ref={ref} />
    </Canvas>
  );
}
