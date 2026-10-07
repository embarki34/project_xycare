import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { FEATURES } from "../../config/features";

export function CursorSpotlight() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!FEATURES.CURSOR_SPOTLIGHT) return;
    let ticking = false;

    const moveGlow = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      ticking = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => moveGlow(e));
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!FEATURES.CURSOR_SPOTLIGHT) return null;

  return (
    <Box
      ref={glowRef}
      position="fixed"
      top="-200px" // Offset by half width/height so mouse is exactly in center
      left="-200px"
      w="400px"
      h="400px"
      bg="radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, rgba(0,0,0,0) 70%)"
      rounded="full"
      pointerEvents="none"
      zIndex={9999}
      mixBlendMode="screen" // This makes it look really cool and only illuminate dark areas
      willChange="transform"
    />
  );
}
