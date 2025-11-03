import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls, Center } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/avatar.glb");
  return (
    <Center>
      <primitive object={scene} scale={7} />
    </Center>
  );
}

export function AvatarModel() {
  return (
    <div className="w-[700px] h-[500px] bg-[url(./assets/background.svg)] relative bg-cover rounded-4xl m-10 flex flex-col ">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 5, 5]} intensity={2} />
        <Environment preset="sunset" />
        <OrbitControls />
        <Model />
      </Canvas>
      <p className="p-8 absolute top-1 left-2 text-sm text-[#adadad]">
        &gt; INTERACTIVE MODEL
      </p>
    </div>
  );
}
