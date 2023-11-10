import {} from "@react-three/fiber";

const Model = () => {
  return (
    <>
      <mesh>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
};

export default Model;
