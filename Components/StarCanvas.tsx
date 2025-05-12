"use client";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Points as PointsImpl } from "three"; // Import Three.js type

interface StarBackgroundProps {
  [key: string]: any; // You can replace this with more specific props if needed
}

const StarBackground: React.FC<StarBackgroundProps> = (props) => {
  const ref = useRef<PointsImpl>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => (
  <div className="absolute inset-0 w-full h-full z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
// "use client";
// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import { Points as PointsImpl } from "three";

// // Helper function to generate random points in a sphere
// const generatePointsInSphere = (
//   count: number,
//   radius: number
// ): Float32Array => {
//   const positions = new Float32Array(count * 3);

//   for (let i = 0; i < count; i++) {
//     let x = Math.random() * 2 - 1;
//     let y = Math.random() * 2 - 1;
//     let z = Math.random() * 2 - 1;

//     // Normalize the vector to stay within the sphere
//     let length = Math.sqrt(x * x + y * y + z * z);
//     if (length === 0) length = 1;

//     x = (x / length) * Math.random() * radius;
//     y = (y / length) * Math.random() * radius;
//     z = (z / length) * Math.random() * radius;

//     positions.set([x, y, z], i * 3);
//   }

//   return positions;
// };

// interface StarBackgroundProps {
//   [key: string]: any;
// }

// const StarBackground: React.FC<StarBackgroundProps> = (props) => {
//   const ref = useRef<PointsImpl>(null);
//   const [sphere] = useState(() => generatePointsInSphere(3000, 1.2));
//   // 5000

//   useFrame((_, delta) => {
//     if (ref.current) {
//       ref.current.rotation.x -= delta / 10;
//       ref.current.rotation.y -= delta / 15;
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#fff"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas: React.FC = () => (
//   <div className="absolute inset-0 w-full h-full z-[-1]">
//     <Canvas camera={{ position: [0, 0, 1] }}>
//       <Suspense fallback={null}>
//         <StarBackground />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   </div>
// );

// export default StarsCanvas;
