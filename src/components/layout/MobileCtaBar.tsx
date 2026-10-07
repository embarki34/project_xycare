import { Box, Button } from "@chakra-ui/react";
import { LuDownload } from "react-icons/lu";
import { Magnetic } from "../animations/Magnetic";

export function MobileCtaBar({ onDownload }: { onDownload: () => void }) {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      position="fixed"
      bottom="0"
      insetX="0"
      zIndex="sticky"
      px={4}
      pt={3}
      pb="calc(12px + env(safe-area-inset-bottom))"
      bg="rgba(255,255,255,0.94)"
      backdropFilter="saturate(180%) blur(16px)"
      borderTopWidth="1px"
      borderColor="ink.200"
    >
      <Magnetic>
        <Button
          id="mobile-catalogue-btn"
          w="full"
          h="48px"
          rounded="xl"
          bg="brand.900"
          color="white"
          fontWeight="600"
          _hover={{ bg: "brand.800" }}
          onClick={onDownload}
        >
          <LuDownload /> Télécharger le catalogue
        </Button>
      </Magnetic>
    </Box>
  );
}
