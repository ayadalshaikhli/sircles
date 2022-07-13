/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/wheel2.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-2.17, 8.46, -0.17]} scale={3.44}>
        <mesh geometry={nodes.Bricks.geometry} material={materials.Brick} position={[-0.3, -0.96, -0.31]} scale={[0.05, 0.14, 0.03]} />
        <mesh geometry={nodes.Cube.geometry} material={materials.DarkWood} position={[-0.02, -0.5, 0.38]} scale={[0.32, 0.03, 0.03]} />
        <mesh geometry={nodes.Cube001.geometry} material={materials.DarkWood} position={[-0.02, -0.5, -0.38]} scale={0.2} />
        <mesh geometry={nodes.Cylinder006.geometry} material={materials.LightWood} position={[0.38, -0.55, -0.02]} rotation={[0, 0, -Math.PI / 2]} scale={[0, 0.06, 0]} />
        <mesh geometry={nodes.Cylinder007.geometry} material={materials.LightWood} position={[0.38, -0.48, -0.3]} rotation={[0, 0, -Math.PI / 2]} scale={[0, 0.06, 0]} />
        <mesh geometry={nodes.Cylinder008.geometry} material={materials.LightWood} position={[0.35, -0.49, -0.3]} rotation={[0, 0, -1.11]} scale={[0, 0.02, 0]} />
        <mesh geometry={nodes.Cylinder009.geometry} material={materials.LightWood} position={[-0.35, -0.09, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.02, 0.69, 0.02]} />
        <mesh geometry={nodes.Cylinder010.geometry} material={materials.LightWood} position={[0.35, -0.56, -0.03]} rotation={[0, 0, -1.11]} scale={[0, 0.02, 0]} />
        <mesh geometry={nodes.Icosphere001.geometry} material={materials.Light} position={[0.43, -0.51, -0.3]} scale={0.01} />
        <mesh geometry={nodes.Icosphere002.geometry} material={materials.Light} position={[0.43, -0.59, -0.02]} scale={0.01} />
        <mesh geometry={nodes.Plane001.geometry} material={materials.DarkWood} position={[0, -0.2, 0.13]} rotation={[0.78, -1.56, 1.57]} scale={[0.11, 0.12, 0.09]} />
        <mesh geometry={nodes.Plane002.geometry} material={materials.LightWood} position={[0, -1.02, 0]} scale={0.2} />
        <mesh geometry={nodes.Plane007.geometry} material={materials.House} position={[0, -1.02, 0]} scale={0.2} />
        <mesh geometry={nodes.Plane008.geometry} material={materials.Black} position={[0.43, -0.48, -0.3]} scale={0} />
        <mesh geometry={nodes.Plane027.geometry} material={materials.DarkWood} position={[0, -0.7, 0.39]} rotation={[Math.PI / 2, 0, 0]} scale={[0.72, 0.72, 0.13]} />
        <mesh geometry={nodes.Plane043.geometry} material={materials.DarkWood} position={[0.34, -0.33, 0.01]} rotation={[-0.01, 0, 0]} scale={0.2} />
        <group position={[-0.22, -1.2, 0.38]} scale={0.2}>
          <mesh geometry={nodes.Plane041.geometry} material={materials.LightWood} />
          <mesh geometry={nodes.Plane041_1.geometry} material={materials['Material.004']} />
        </group>
        <mesh geometry={nodes.Plane045.geometry} material={materials.BlueTiles} position={[-0.24, -0.09, 0]} rotation={[0.87, 0, 0]} scale={[0.08, 0.17, 0.11]} />
        <mesh geometry={nodes.Plane046.geometry} material={materials.BlueTiles} position={[-0.08, -0.09, 0]} rotation={[0.87, 0, 0]} scale={[0.08, 0.11, 0.09]} />
        <mesh geometry={nodes.Plane047.geometry} material={materials.BlueTiles} position={[0.08, -0.09, 0]} rotation={[0.87, 0, 0]} scale={[0.08, 0.13, 0.1]} />
        <mesh geometry={nodes.Plane048.geometry} material={materials.BlueTiles} position={[0.25, -0.09, 0]} rotation={[0.87, 0, 0]} scale={[0.08, 0.19, 0.13]} />
        <mesh geometry={nodes.Plane049.geometry} material={materials.BlueTiles} position={[-0.3, -0.22, 0.11]} rotation={[0.87, 0, 0]} scale={[0.06, 0.14, 0.11]} />
        <mesh geometry={nodes.Plane050.geometry} material={materials.BlueTiles} position={[-0.16, -0.18, 0.08]} rotation={[0.87, 0, 0]} scale={[0.08, 0.16, 0.12]} />
        <mesh geometry={nodes.Plane051.geometry} material={materials.BlueTiles} position={[0, -0.2, 0.09]} rotation={[0.87, 0, 0]} scale={[0.08, 0.15, 0.11]} />
        <mesh geometry={nodes.Plane052.geometry} material={materials.BlueTiles} position={[0.17, -0.23, 0.13]} rotation={[0.87, 0, 0]} scale={[0.08, 0.12, 0.1]} />
        <mesh geometry={nodes.Plane053.geometry} material={materials.BlueTiles} position={[0.29, -0.23, 0.13]} rotation={[0.87, 0, 0]} scale={[0.04, 0.12, 0.1]} />
        <mesh geometry={nodes.Plane054.geometry} material={materials.BlueTiles} position={[-0.24, -0.33, 0.21]} rotation={[0.87, 0, 0]} scale={[0.08, 0.17, 0.11]} />
        <mesh geometry={nodes.Plane055.geometry} material={materials.BlueTiles} position={[-0.08, -0.33, 0.21]} rotation={[0.87, 0, 0]} scale={[0.08, 0.11, 0.11]} />
        <mesh geometry={nodes.Plane056.geometry} material={materials.BlueTiles} position={[0.08, -0.33, 0.21]} rotation={[0.87, 0, 0]} scale={[0.08, 0.15, 0.11]} />
        <mesh geometry={nodes.Plane057.geometry} material={materials.BlueTiles} position={[0.25, -0.33, 0.21]} rotation={[0.87, 0, 0]} scale={[0.08, 0.19, 0.12]} />
        <mesh geometry={nodes.Plane058.geometry} material={materials.BlueTiles} position={[0, -0.23, 0.4]} rotation={[Math.PI / 2, 0.7, -Math.PI / 2]} scale={[0.04, 0.07, 0.05]} />
        <mesh geometry={nodes.Plane059.geometry} material={materials.BlueTiles} position={[0, -0.23, 0.33]} rotation={[Math.PI / 2, 0.7, -Math.PI / 2]} scale={[0.03, 0.07, 0.05]} />
        <mesh geometry={nodes.Plane060.geometry} material={materials.BlueTiles} position={[0, -0.23, 0.27]} rotation={[Math.PI / 2, 0.7, -Math.PI / 2]} scale={[0.03, 0.06, 0.04]} />
        <mesh geometry={nodes.Plane061.geometry} material={materials.BlueTiles} position={[0, -0.23, 0.2]} rotation={[Math.PI / 2, 0.7, -Math.PI / 2]} scale={[0.03, 0.06, 0.04]} />
        <mesh geometry={nodes.Plane062.geometry} material={materials.BlueTiles} position={[0, -0.23, 0.13]} rotation={[Math.PI / 2, 0.7, -Math.PI / 2]} scale={[0.03, 0.07, 0.05]} />
        <mesh geometry={nodes.Plane063.geometry} material={materials.BlueTiles} position={[0.05, -0.29, 0.4]} rotation={[Math.PI / 2, 0.7, -Math.PI / 2]} scale={[0.04, 0.07, 0.05]} />
        <mesh geometry={nodes.Plane064.geometry} material={materials.BlueTiles} position={[0.05, -0.29, 0.33]} rotation={[Math.PI / 2, 0.7, -Math.PI / 2]} scale={[0.03, 0.07, 0.05]} />
        <mesh geometry={nodes.Plane065.geometry} material={materials.BlueTiles} position={[0.05, -0.29, 0.27]} rotation={[Math.PI / 2, 0.7, -Math.PI / 2]} scale={[0.03, 0.07, 0.05]} />
        <mesh geometry={nodes.Plane066.geometry} material={materials.BlueTiles} position={[0.05, -0.29, 0.2]} rotation={[Math.PI / 2, 0.7, -Math.PI / 2]} scale={[0.03, 0.06, 0.04]} />
        <mesh geometry={nodes.Plane067.geometry} material={materials.BlueTiles} position={[0.1, -0.35, 0.4]} rotation={[Math.PI / 2, 0.67, -Math.PI / 2]} scale={[0.04, 0.07, 0.05]} />
        <mesh geometry={nodes.Plane068.geometry} material={materials.BlueTiles} position={[0.1, -0.35, 0.33]} rotation={[Math.PI / 2, 0.67, -Math.PI / 2]} scale={[0.03, 0.07, 0.05]} />
        <mesh geometry={nodes.Plane069.geometry} material={materials.BlueTiles} position={[0.1, -0.35, 0.27]} rotation={[Math.PI / 2, 0.67, -Math.PI / 2]} scale={[0.03, 0.07, 0.05]} />
        <mesh geometry={nodes.Plane070.geometry} material={materials.DarkWood} position={[-0.17, -0.33, 0]} rotation={[-0.01, 0, 0]} scale={0.2} />
        <mesh geometry={nodes.Plane075.geometry} material={materials.DarkWood} position={[0, -0.51, 0.26]} scale={0.2} />
        <mesh geometry={nodes.Plane076.geometry} material={materials.LightWood} position={[-0.07, -0.67, 0.44]} rotation={[0.01, 0, -0.04]} scale={[0.2, 0.2, 0.08]} />
        <mesh geometry={nodes.Plane077.geometry} material={materials.LightWood} position={[-0.07, -0.63, 0.44]} rotation={[0, 0, -0.08]} scale={[0.2, 0.2, 0.08]} />
        <mesh geometry={nodes.Plane078.geometry} material={materials.LightWood} position={[-0.07, -0.59, 0.44]} rotation={[0, 0, -0.08]} scale={[0.2, 0.2, 0.08]} />
        <mesh geometry={nodes.Plane079.geometry} material={materials.LightWood} position={[0.07, -0.68, 0.44]} scale={[0.2, 0.2, 0.08]} />
        <mesh geometry={nodes.Plane080.geometry} material={materials.LightWood} position={[0.07, -0.63, 0.44]} scale={[0.2, 0.2, 0.08]} />
        <mesh geometry={nodes.Plane081.geometry} material={materials.LightWood} position={[-0.07, -0.59, 0.45]} rotation={[-1.6, -0.64, 1.55]} scale={[0.18, 0.16, 0.18]} />
        <mesh geometry={nodes.Plane082.geometry} material={materials.LightWood} position={[-0.07, -0.38, 0.44]} scale={[0.2, 0.2, 0.08]} />
        <mesh geometry={nodes.Plane083.geometry} material={materials.LightWood} position={[0.07, -0.38, 0.44]} scale={[0.2, 0.2, 0.08]} />
        <mesh geometry={nodes.Plane084.geometry} material={materials.LightWood} position={[-0.06, -0.34, 0.44]} scale={[0.17, 0.2, 0.08]} />
        <mesh geometry={nodes.Plane085.geometry} material={materials.LightWood} position={[0.06, -0.34, 0.44]} scale={[0.17, 0.2, 0.08]} />
        <mesh geometry={nodes.Plane086.geometry} material={materials.LightWood} position={[0, -0.29, 0.44]} scale={[0.3, 0.2, 0.08]} />
        <mesh geometry={nodes.Plane087.geometry} material={materials.LightWood} position={[0.18, -0.55, 0.42]} rotation={[0, -0.03, Math.PI]} scale={[0.23, 0.2, 0.23]} />
        <mesh geometry={nodes.Plane088.geometry} material={materials.LightWood} position={[0.18, -0.55, 0.35]} rotation={[0, -0.03, Math.PI]} scale={[0.23, 0.2, 0.23]} />
        <group position={[0.07, -0.49, 0.44]} scale={[0.06, 0.07, 0.06]}>
          <mesh geometry={nodes.Plane091.geometry} material={materials.DarkWood} />
          <mesh geometry={nodes.Plane091_1.geometry} material={materials['Material.001']} />
        </group>
        <mesh geometry={nodes.Plane098.geometry} material={materials.DarkWood} position={[-0.01, -0.19, 0.43]} rotation={[1.57, -1.56, 1.57]} scale={0.1} />
        <mesh geometry={nodes.Plane104.geometry} material={materials.LightWood} position={[0.07, -0.59, 0.44]} rotation={[0, 0, -0.05]} scale={[0.2, 0.2, 0.08]} />
        <mesh geometry={nodes.Plane127.geometry} material={materials.Black} position={[0.43, -0.56, -0.02]} scale={0} />
        <mesh geometry={nodes.Plane144.geometry} material={materials.LightWood} position={[0.35, -0.38, -0.01]} rotation={[-0.7, 0, 0]} scale={[0.18, 0.29, 0.18]} />
        <mesh geometry={nodes.Plane145.geometry} material={materials.LightWindow} position={[0, -0.48, 0.44]} rotation={[Math.PI / 2, 0, 0]} scale={[0.12, 0.09, 0.1]} />
        <mesh geometry={nodes.Plane146.geometry} material={materials.LightWindow} position={[0.32, -0.38, -0.01]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.13, 0.1, 0.15]} />
        <mesh geometry={nodes.Stones.geometry} material={materials.Blocks} position={[0.24, -1.03, 0.35]} scale={[0.12, 0.36, 0.09]} />
      </group>
      <group position={[-2.65, 21.1, 19.65]} scale={0.62}>
        <group position={[29.77, 108.72, 745.15]} rotation={[0.11, 0, Math.PI / 2]} scale={18.17}>
          <mesh geometry={nodes.Mesh_2.geometry} material={materials.lambert5} />
          <mesh geometry={nodes.Mesh_3.geometry} material={materials.lambert6} />
        </group>
      </group>
      <mesh geometry={nodes.Circle001.geometry} material={nodes.Circle001.material} position={[-0.21, 2.2, 0.83]} scale={[1.15, 0.7, 0.7]} />
      <mesh geometry={nodes.Circle002.geometry} material={nodes.Circle002.material} position={[-0.01, 1.86, 0.98]} rotation={[0, -0.04, -0.01]} scale={1.6} />
      <mesh geometry={nodes.Object.geometry} material={nodes.Object.material} position={[-0.2, 2.3, 0.98]} rotation={[1.57, 0.02, -1.58]} scale={3.32} />
      <mesh geometry={nodes.Circle003.geometry} material={nodes.Circle003.material} position={[-0.19, 3.01, -0.55]} scale={[1.67, 1.02, 1.02]} />
      <mesh geometry={nodes.Bowl.geometry} material={materials.Porcelain} position={[-0.28, 1.71, 3.19]} scale={[1.86, 0.69, 1.86]} />
      <mesh geometry={nodes.Fork.geometry} material={materials.Cutrely} position={[2.04, 2.42, 2.9]} scale={[0.09, 0.02, 1.32]} />
      <mesh geometry={nodes.spoon.geometry} material={materials.Cutrely} position={[-3.44, 1.66, 3.19]} rotation={[0.18, 0.05, 0]} scale={[0.09, 0.02, 1.32]} />
      <group position={[-1.18, 3.77, -3.54]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={-1.33}>
        <mesh geometry={nodes.Cube_Cube001_1.geometry} material={materials['car.001']} />
        <mesh geometry={nodes.Cube_Cube001_2.geometry} material={materials.metal} />
        <mesh geometry={nodes.Cube_Cube001_3.geometry} material={materials.wheels} />
        <mesh geometry={nodes.Cube_Cube001_4.geometry} material={materials['car.002']} />
        <mesh geometry={nodes.Cube_Cube001_5.geometry} material={materials.Lights} />
        <mesh geometry={nodes.Cube_Cube001_6.geometry} material={materials.window} />
      </group>
      <group position={[-1.05, 1.68, -2.49]} rotation={[-2.8, 1.15, 0.04]} scale={0.22}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials.lambert2} />
        <mesh geometry={nodes.Mesh001_2.geometry} material={materials.blinn2} />
      </group>
    </group>
  )
}

useGLTF.preload('/wheel2.glb')