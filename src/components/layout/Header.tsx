import { Box, Button, Container, Flex, HStack, Icon, IconButton, Stack, Text, Link as ChakraLink } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { LuArrowRight, LuCalendarCheck, LuDownload, LuMenu, LuX } from "react-icons/lu";
import type { HomeViewModel } from "../../viewmodels/useHomeViewModel";
import { PageContainer } from "../common/primitives";
import { Logo } from "./Logo";
import { LanguageSwitch } from "./LanguageSwitch";
import { Magnetic } from "../animations/Magnetic";

type HeaderProps = Pick<
  HomeViewModel,
  "language" | "setLanguage" | "navLinks" | "handleDownloadCatalogue"
>;

export function Header({
  language,
  setLanguage,
  navLinks,
  handleDownloadCatalogue,
  contactLabel,
}: HeaderProps & { contactLabel: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const progressBarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (winScroll / height) * 100;
      
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
      }
      
      setScrolled(winScroll > 8);
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

  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    const sectionIds = navLinks
      .map((l) => l.href.replace("/#", ""))
      .filter((id) => id && id !== "/");
    sectionIds.push("top");

    setTimeout(() => {
      sectionIds.forEach((id) => {
        const elem = document.getElementById(id);
        if (elem) observer.observe(elem);
      });
    }, 500);

    return () => observer.disconnect();
  }, [navLinks, location.pathname]);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      const id = href.replace("/#", "");
      const elem = document.getElementById(id);
      if (elem) elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      as="header"
      position="fixed"
      w="full"
      top="0"
      zIndex="sticky"
      bg={scrolled || menuOpen ? "rgba(255,255,255,0.92)" : "transparent"}
      backdropFilter={
        scrolled || menuOpen ? "saturate(180%) blur(16px)" : "none"
      }
      borderBottomWidth="1px"
      borderColor={scrolled || menuOpen ? "ink.200" : "transparent"}
      transition="border-color 0.2s, background 0.2s, backdrop-filter 0.2s"
    >
      {/* Scroll Progress Bar */}
      <Box
        ref={progressBarRef}
        position="absolute"
        top="0"
        left="0"
        h="2px"
        bg="brand.500"
        w="0%"
        zIndex={1}
      />
      <Container maxW="1480px" px={{ base: 5, md: 8, xl: 12 }}>
        <Flex h="70px" align="center" justify="space-between" gap={{ base: 4, xl: 8 }}>
          <Logo />

          <HStack
            as="nav"
            gap={1}
            display={{ base: "none", lg: "flex" }}
            aria-label="Navigation principale"
          >
            {navLinks.map((l) => {
              const isInternalHash = l.href.startsWith("/#");
              
              let isCurrentPage = false;
              if (location.pathname === "/") {
                if (isInternalHash) {
                  isCurrentPage = activeSection === l.href.replace("/#", "");
                } else if (l.href === "/") {
                  isCurrentPage = activeSection === "top" || activeSection === "";
                }
              } else {
                isCurrentPage = location.pathname + location.hash === l.href;
              }

              if (isInternalHash) {
                return (
                  <ChakraLink
                    key={l.href}
                    href={l.href}
                    onClick={() => handleLinkClick(l.href)}
                    px={3.5}
                    py={2}
                    rounded="lg"
                    fontSize="sm"
                    fontWeight="600"
                    color={isCurrentPage ? "brand.700" : "ink.600"}
                    bg={isCurrentPage ? "brand.50" : "transparent"}
                    transition="all 0.15s"
                    _hover={{
                      color: "ink.900",
                      bg: "ink.50",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </ChakraLink>
                );
              }

              return (
                <RouterLink
                  key={l.href}
                  to={l.href}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    px={3.5}
                    py={2}
                    rounded="lg"
                    fontSize="sm"
                    fontWeight="600"
                    color={isCurrentPage ? "brand.700" : "ink.600"}
                    bg={isCurrentPage ? "brand.50" : "transparent"}
                    transition="all 0.15s"
                    _hover={{ color: "ink.900", bg: "ink.50" }}
                  >
                    {l.label}
                  </Box>
                </RouterLink>
              );
            })}
          </HStack>

          <HStack gap={3}>
            <LanguageSwitch language={language} setLanguage={setLanguage} />
            <Button
              id="header-contact-btn"
              asChild
              display={{ base: "none", xl: "inline-flex" }}
              size="sm"
              h="38px"
              px={4}
              rounded="xl"
              variant="outline"
              borderColor="ink.300"
              color="ink.800"
              fontWeight="600"
              _hover={{ bg: "ink.50" }}
            >
              <a href="/#contact" onClick={() => handleLinkClick("/#contact")}>
                <LuCalendarCheck /> {contactLabel}
              </a>
            </Button>
            <Magnetic>
              <Button
                id="header-catalogue-btn"
                display={{ base: "none", md: "inline-flex" }}
                size="sm"
                h="38px"
                px={4}
                rounded="xl"
                bg="brand.900"
                color="white"
                fontWeight="600"
                _hover={{ bg: "brand.800" }}
                onClick={handleDownloadCatalogue}
              >
                <LuDownload /> Catalogue
              </Button>
            </Magnetic>
            <IconButton
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              display={{ base: "inline-flex", lg: "none" }}
              variant="ghost"
              size="sm"
              color="ink.800"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <LuX /> : <LuMenu />}
            </IconButton>
          </HStack>
        </Flex>
      </Container>

      {menuOpen && (
        <Box
          display={{ lg: "none" }}
          borderTopWidth="1px"
          borderColor="ink.200"
          bg="white"
        >
          <PageContainer>
            <Stack as="nav" gap={0} py={3}>
              {navLinks.map((l) => {
                const isInternalHash = l.href.startsWith("/#");
                
                let isCurrentPage = false;
                if (location.pathname === "/") {
                  if (isInternalHash) {
                    isCurrentPage = activeSection === l.href.replace("/#", "");
                  } else if (l.href === "/") {
                    isCurrentPage = activeSection === "top" || activeSection === "";
                  }
                } else {
                  isCurrentPage = location.pathname + location.hash === l.href;
                }

                return isInternalHash ? (
                  <ChakraLink
                    key={l.href}
                    href={l.href}
                    onClick={() => handleLinkClick(l.href)}
                    py={3}
                    fontSize="md"
                    fontWeight="600"
                    color={isCurrentPage ? "brand.700" : "ink.800"}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    _hover={{ color: "brand.700", textDecoration: "none" }}
                  >
                    {l.label}
                    <Icon as={LuArrowRight} color="ink.400" boxSize={4} />
                  </ChakraLink>
                ) : (
                  <RouterLink
                    key={l.href}
                    to={l.href}
                    onClick={() => setMenuOpen(false)}
                    style={{ textDecoration: "none" }}
                  >
                    <Flex
                      py={3}
                      fontSize="md"
                      fontWeight="600"
                      color="ink.800"
                      justify="space-between"
                      align="center"
                      _hover={{ color: "brand.700" }}
                    >
                      <Text>{l.label}</Text>
                      <Icon as={LuArrowRight} color="ink.400" boxSize={4} />
                    </Flex>
                  </RouterLink>
                );
              })}
            </Stack>
          </PageContainer>
        </Box>
      )}
    </Box>
  );
}
