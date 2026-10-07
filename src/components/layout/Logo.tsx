import { Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import condorLogo from "../../assets/condor-academy-logo.svg";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <RouterLink
      to="/"
      style={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
      }}
      aria-label="Condor Academy — accueil"
    >
      {inverted ? (
        <Image
          src={condorLogo}
          alt="Condor Academy Logo"
          h={{ base: "80px", md: "100px" }}
          w="auto"
          objectFit="contain"
          filter={inverted ? "brightness(0) invert(1)" : "none"}
          transition="opacity 0.2s ease"
          _hover={{ opacity: 0.85 }}
        />
      ) : (
        <Image
          src={condorLogo}
          alt="Condor Academy Logo"
          h={{ base: "42px", md: "46px" }}
          w="auto"
          objectFit="contain"
          filter={inverted ? "brightness(0) invert(1)" : "none"}
          transition="opacity 0.2s ease"
          _hover={{ opacity: 0.85 }}
        />
      )}
    </RouterLink>
  );
}
