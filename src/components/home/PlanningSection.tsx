import { useEffect, useRef } from "react";
import { AspectRatio, Box } from "@chakra-ui/react";
import type { HomeViewModel } from "../../viewmodels/useHomeViewModel";
import { PLANNING_VIDEO_URL } from "../../config/site";
import { Section, SectionHeader } from "../common/primitives";

export function PlanningSection({ t }: Pick<HomeViewModel, "t">) {
  const p = t.extras.planning;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        // Autoplay policy prevented playback until user interaction
      });
    }
  }, []);

  return (
    <Section id="planning" bg="ink.50" borderYWidth="1px" borderColor="ink.100">
      <SectionHeader eyebrow={p.eyebrow} title={p.title} description={p.description} align="center" />
      <Box maxW="900px" mx="auto" mt={{ base: 8, md: 12 }} rounded="3xl" overflow="hidden" shadow="lift" borderWidth="1px" borderColor="ink.200" bg="black">
        <AspectRatio ratio={16 / 9}>
          <video
            ref={videoRef}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={p.videoTitle}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={PLANNING_VIDEO_URL} type="video/mp4" />
          </video>
        </AspectRatio>
      </Box>
    </Section>
  );
}
