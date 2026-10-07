import { Box } from "@chakra-ui/react";
import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { FEATURES } from "../../config/features";

export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  if (!FEATURES.MAGNETIC_BUTTONS) return <>{children}</>;

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Box
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      as="span"
      display="inline-block"
      transition="transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      transform={`translate(${position.x}px, ${position.y}px)`}
    >
      {children}
    </Box>
  );
}
