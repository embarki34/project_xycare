import { Box, Icon } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { LuChevronUp } from "react-icons/lu";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    let ticking = false;
    const r = 22;
    const c = 2 * Math.PI * r;

    if (circleRef.current) {
      circleRef.current.style.strokeDasharray = `${c}`;
      circleRef.current.style.strokeDashoffset = `${c}`;
    }

    const updateScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = Math.min(1, Math.max(0, winScroll / height));
      
      if (circleRef.current) {
        circleRef.current.style.strokeDashoffset = `${c - progress * c}`;
      }
      
      setIsVisible(winScroll > 300);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      as="button"
      onClick={scrollToTop}
      position="fixed"
      bottom={{ base: 24, md: 8 }}
      right={{ base: 4, md: 8 }}
      zIndex="tooltip"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)"}
      pointerEvents={isVisible ? "auto" : "none"}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      w="52px"
      h="52px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      rounded="full"
      bg="white"
      shadow="xl"
      color="brand.600"
      _hover={{ bg: "brand.50", transform: "translateY(-4px)" }}
    >
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        style={{ position: "absolute", top: 0, left: 0, transform: "rotate(-90deg)" }}
      >
        <circle
          cx="26"
          cy="26"
          r="22"
          fill="none"
          stroke="rgba(0,0,0,0.06)"
          strokeWidth="3"
        />
        <circle
          ref={circleRef}
          cx="26"
          cy="26"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <Icon as={LuChevronUp} boxSize={6} />
    </Box>
  );
}
