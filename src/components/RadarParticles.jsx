import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const RadarParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      options={{
        fullScreen: { enable: false }, // ❗️ disable fullscreen
        background: { color: "transparent" }, // biarkan transparan
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 }
          }
        },
        particles: {
          number: {
            value: 100,
            density: { enable: true, area: 800 }
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: { default: "bounce" }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default RadarParticles;
