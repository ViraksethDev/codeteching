// components/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // slim version – smaller bundle

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0 pointer-events-none"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 90,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: ["grab", "trail"],
              parallax: { enable: false, force: 2, smooth: 10 }
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 180,
              links: { opacity: 0.4 }
            },
            push: {
              quantity: 4
            },
            trail: {
              delay: 0.1,
              pauseOnStop: true,
              quantity: 6
            }
          }
        },
        particles: {
          color: { value: ["#a78bfa", "#c084fc", "#f472b6", "#60a5fa"] },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.12,
            width: 0.8
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 0.8,
            straight: false
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80
          },
          opacity: {
            random: { enable: true, minimumValue: 0.1 },
            value: { min: 0.1, max: 0.7 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          shape: {
            type: "circle"
          },
          size: {
            random: { enable: true, minimumValue: 1 },
            value: { min: 0.5, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.3,
              sync: false
            }
          }
        },
        detectRetina: true,
        background: {
          color: "transparent"
        }
      }}
    />
  );
}