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
          value: "#020617", // ✅ Dark Blue/Slate Background (Ye perfect hai)
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
              color: "#eab308" // 🔥 Cyber-Gold Lines (Hover karne par)
            }
          },
        },
      },
      particles: {
        color: {
          value: "#eab308", // 🔥 Cyber-Gold Dots
        },
        links: {
          color: "#eab308", // 🔥 Cyber-Gold Connecting Lines
          distance: 150,
          enable: true,
          opacity: 0.3, // Halka transparency taaki logo clear dikhe
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
        className="absolute inset-0 -z-50 h-full w-full pointer-events-none" 
      />
    );
  }

  return <></>;
};

export default ParticleBackground;