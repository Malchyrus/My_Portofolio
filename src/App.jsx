import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import Antigravity from "@/components/Antigravity";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#0ea5e9");

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);

    const rootStyles = getComputedStyle(document.documentElement);
    const resolvedPrimary = rootStyles.getPropertyValue("--color-primary").trim();
    if (resolvedPrimary) {
      setPrimaryColor(resolvedPrimary);
    }

    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-70" style={{ filter: "brightness(0.9) saturate(1.0)" }}>
        <Antigravity
          dpr={isMobile ? [0.8, 1] : [1, 1.5]}
          count={isMobile ? 70 : 320}
          magnetRadius={isMobile ? 35 : 60}
          ringRadius={isMobile ? 6 : 8}
          waveSpeed={0.42}
          waveAmplitude={isMobile ? 0.55 : 0.8}
          particleSize={isMobile ? 0.72 : 0.9}
          lerpSpeed={isMobile ? 0.045 : 0.06}
          color={primaryColor}
          autoAnimate={isMobile}
          particleVariance={isMobile ? 0.55 : 0.75}
          rotationSpeed={isMobile ? 0.05 : 0.08}
          depthFactor={1}
          pulseSpeed={isMobile ? 2.4 : 3}
          particleShape="sphere"
          fieldStrength={11}
          horizontalStretch={isMobile ? 1.5 : 4.0}
          verticalStretch={isMobile ? 1.3 : 2.2}
          minVisibleScale={isMobile ? 0.22 : 0.18}
          scaleFalloff={isMobile ? 12 : 14}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
