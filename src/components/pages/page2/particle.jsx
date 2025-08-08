import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "#f0f0f0", // bisa ubah jadi gradasi atau transparan
            },
          },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            color: { value: "#999" },
            move: { enable: true, speed: 0.5 },
            links: { enable: true, color: "#999", distance: 100 },
          },
        }}
        className="absolute inset-0 w-full h-full z-0"
      />
    </>
  );
}
