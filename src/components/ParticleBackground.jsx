import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#020617", // ✅ Ye tumhara Dark Blue Theme color hai
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // Mouse ke paas aane par lines judengi
          },
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 1,
              color: "#06b6d4" // Cyan Lines
            }
          },
        },
      },
      particles: {
        color: {
          value: "#06b6d4", // Cyan Dots
        },
        links: {
          color: "#06b6d4",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5, // Dheere-dheere chalenge
        },
        number: {
          density: {
            enable: true,
          },
          value: 100, // Dots ki sankhya
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 -z-50 h-full w-full" 
      />
    );
  }

  return <></>;
};

export default ParticleBackground;