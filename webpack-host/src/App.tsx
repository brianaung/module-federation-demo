import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

/*@ts-ignore*/
const RemoteApp = React.lazy(() => import("Remote/App"));
/*@ts-ignore*/
const RemoteModel = React.lazy(() => import("Remote/Model"));

export default function App() {
  return (
    <main>
      <h1>Hello from main app!</h1>
      <RemoteWrapper>
        <RemoteApp />
      </RemoteWrapper>
      <RemoteWrapper>
        <>
          <h2>Model</h2>
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <ThreeController />
            <RemoteModel />
          </Canvas>
        </>
      </RemoteWrapper>
    </main>
  );
}

const RemoteWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <div style={{ border: "solid 1px", padding: "2rem" }}>
      <ErrorBoundary fallback={null}>{children}</ErrorBoundary>
    </div>
  );
};

const ThreeController = () => {
  const { scene } = useThree();

  useEffect(() => {
    console.log(scene);
  }, [scene]);

  return <></>;
};
