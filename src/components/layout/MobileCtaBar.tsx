import { Box, Button, Flex } from "@chakra-ui/react";
import { LuCalendarCheck, LuDownload } from "react-icons/lu";
import { Magnetic } from "../animations/Magnetic";

interface MobileCtaBarProps {
  onDownload: () => void;
  contactLabel: string;
}

export function MobileCtaBar({ onDownload, contactLabel }: MobileCtaBarProps) {
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
      <Flex gap={2}>
        <Button
          id="mobile-contact-btn"
          asChild
          flex="1"
          h="48px"
          rounded="xl"
          variant="outline"
          borderColor="ink.300"
          color="ink.800"
          fontWeight="600"
          fontSize="13px"
        >
          <a href="#contact">
            <LuCalendarCheck /> {contactLabel}
          </a>
        </Button>
        <Magnetic>
          <Button
            id="mobile-catalogue-btn"
            aria-label="Catalogue"
            h="48px"
            px={4}
            rounded="xl"
            bg="brand.900"
            color="white"
            fontWeight="600"
            _hover={{ bg: "brand.800" }}
            onClick={onDownload}
          >
            <LuDownload /> PDF
          </Button>
        </Magnetic>
      </Flex>
    </Box>
  );
}
