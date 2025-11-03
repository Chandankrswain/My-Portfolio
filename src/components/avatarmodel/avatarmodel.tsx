import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/avatar.glb");
  return <primitive object={scene} scale={1.2} />;
}

export function AvatarModel() {
  return (
    <div className="h-full">
      <div
        style={{ width: "300px", height: "300px", backgroundColor: "#ababab" }}
      >
        <Canvas camera={{ position: [0, 1.5, 2.5] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[0, 5, 5]} intensity={2} />
          <Environment preset="sunset" />
          <Model />
        </Canvas>
      </div>
    </div>
  );
}

export default AvatarModel;
