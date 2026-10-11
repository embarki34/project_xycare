import { useState, useEffect, useRef } from "react";
import { Box, Button, Grid, Heading, HStack, Icon, Image, Link, Stack, Text, Flex } from "@chakra-ui/react";
import { LuArrowRight, LuArrowLeft, LuDownload, LuCheck, LuGraduationCap } from "react-icons/lu";
import heroImg from "../../assets/hero-training.jpg";
import abstractBg from "../../assets/abestraction/bg.jpg";
import { FEATURES } from "../../config/features";
import type { HomeViewModel } from "../../viewmodels/useHomeViewModel";
import { IconTile, PageContainer } from "../common/primitives";

const primaryBtn = {
  h: "48px",
  px: 6,
  rounded: "xl",
  bg: "brand.900",
  color: "white",
  fontWeight: "600",
  fontSize: "15px",
  shadow: "0 1px 2px rgba(16,31,76,.2), inset 0 1px 0 rgba(255,255,255,.08)",
  _hover: { bg: "brand.800" },
  _active: { transform: "translateY(1px)" },
} as const;

const secondaryBtn = {
  h: "48px",
  px: 6,
  rounded: "xl",
  bg: "white",
  color: "ink.800",
  fontWeight: "600",
  fontSize: "15px",
  borderWidth: "1px",
  borderColor: "ink.200",
  shadow: "soft",
  _hover: { bg: "ink.50", borderColor: "ink.300" },
} as const;

type HeroProps = Pick<HomeViewModel, "event" | "handleDownloadCatalogue" | "t" | "dir">;

export function HeroSection({ handleDownloadCatalogue, t, dir }: HeroProps) {
  const isRTL = dir === "rtl";
  const ArrowIcon = isRTL ? LuArrowLeft : LuArrowRight;
  const phrases =
    t.hero.rotatingPhrases && t.hero.rotatingPhrases.length > 0
      ? t.hero.rotatingPhrases
      : [t.hero.titleAccent];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!FEATURES.MOUSE_PARALLAX) return;
    
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bgRef.current) {
            const x = (window.innerWidth / 2 - e.clientX) * 0.015;
            const y = (window.innerHeight / 2 - e.clientY) * 0.015;
            bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
    setPrevIndex(null);
    setIsAnimating(false);
  }, [t]);

  useEffect(() => {
    if (phrases.length <= 1) return;

    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % phrases.length);

      const animTimeout = setTimeout(() => {
        setIsAnimating(false);
        setPrevIndex(null);
      }, 650);

      return () => clearTimeout(animTimeout);
    }, 2800);

    return () => clearInterval(interval);
  }, [currentIndex, phrases.length]);

  return (
    <Box as="section" id="top" position="relative" overflow="hidden" pt={{ base: 28, md: 36, lg: 40 }} pb={{ base: 16, md: 24 }}>
      <Box position="absolute" inset="0" zIndex={-1} bg="radial-gradient(60% 50% at 85% 0%, #E4E9F4 0%, rgba(228,233,244,0) 70%), linear-gradient(180deg, #FFFFFF 0%, #F7F8FA 100%)" />
      <Box
        ref={bgRef}
        position="absolute"
        inset="-5%"
        pointerEvents="none"
        opacity={0.04}
        style={{
          backgroundImage: `url(${abstractBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) invert(100%)",
        }}
      />
      <PageContainer>
        <Grid templateColumns={{ base: "1fr", lg: "1.5fr 1fr" }} gap={12} alignItems="center">
          <Stack gap={7} className="reveal">
            <Link href="#catalogue" alignSelf="start" display="inline-flex" alignItems="center" gap={2} pl={isRTL ? 3 : 1} pr={isRTL ? 1 : 3} py={1} rounded="full" bg="white" borderWidth="1px" borderColor="ink.200" shadow="soft" fontSize="13px" color="ink.600" _hover={{ textDecoration: "none", borderColor: "ink.300" }}>
              <Box as="span" px={2} py="2px" rounded="full" bg="brand.50" color="brand.700" fontWeight="600" fontSize="12px">Nouveau</Box>
              <Text as="span" fontWeight="500" color="ink.800">Catalogue 2026</Text>
              <Text as="span" display={{ base: "none", sm: "inline" }}>· Découvrez nos formations</Text>
              <Icon as={ArrowIcon} boxSize="14px" color="ink.400" />
            </Link>

            <Heading as="h1" fontSize={{ base: "38px", md: "50px", lg: "54px" }} lineHeight="1.18" letterSpacing="-0.03em" fontWeight="800" color="ink.900">
              <Box as="span" display="block">{t.hero.titleStart}</Box>
              <Box as="span" display="inline-block" position="relative" overflow="hidden" verticalAlign="bottom" w="full" className="ios-picker-perspective" py="2px">
                {/* All phrases share one grid cell, so the box is always as tall as the longest one and never jumps. */}
                <Box as="span" aria-hidden="true" visibility="hidden" display="grid" lineHeight="1.18">
                  {phrases.map((p) => (
                    <Box key={p} as="span" gridArea="1 / 1" whiteSpace="normal">{p}</Box>
                  ))}
                </Box>
                {isAnimating && prevIndex !== null && (
                  <Box as="span" position="absolute" insetX="0" top="0" color="brand.600" whiteSpace="normal" className="ios-wheel-exiting" lineHeight="1.18">{phrases[prevIndex]}</Box>
                )}
                <Box key={currentIndex} as="span" position="absolute" insetX="0" top="0" color="brand.600" whiteSpace="normal" className={isAnimating ? "ios-wheel-active" : ""} lineHeight="1.18">{phrases[currentIndex]}</Box>
              </Box>
            </Heading>

            <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="1.6" color="ink.500" maxW="540px">{t.hero.subtitle}</Text>

            <Stack direction={{ base: "column", sm: "row" }} gap={3}>
              <Button id="hero-catalogue-btn" {...primaryBtn} onClick={handleDownloadCatalogue}>
                <LuDownload /> {t.common.downloadCatalogue}
              </Button>
              <Button id="hero-domains-btn" asChild {...secondaryBtn}>
                <a href="#domains">{t.common.discoverFormations} <Icon as={ArrowIcon} /></a>
              </Button>
            </Stack>

            <HStack gap={{ base: 4, md: 6 }} flexWrap="wrap" pt={1}>
              {[t.hero.badgePraxis, t.hero.badgeExperts, t.hero.badgeAlgeria].map((text) => (
                <HStack key={text} gap={2} fontSize="sm" color="ink.600">
                  <Flex boxSize="18px" rounded="full" bg="accent.50" color="accent.600" align="center" justify="center">
                    <Icon as={LuCheck} boxSize="12px" strokeWidth={3} />
                  </Flex>
                  <Text>{text}</Text>
                </HStack>
              ))}
            </HStack>
          </Stack>

          <Box position="relative" className="reveal" style={{ animationDelay: "120ms" }}>
            <Box rounded="3xl" overflow="hidden" shadow="lift" borderWidth="1px" borderColor="ink.200" bg="ink.100">
              <Image src={heroImg} alt="Session de formation Condor Academy" w="full" h={{ base: "280px", md: "440px", lg: "500px" }} objectFit="cover" />
            </Box>
            <HStack position="absolute" left={isRTL ? "auto" : { base: 4, md: -6 }} right={isRTL ? { base: 4, md: -6 } : "auto"} bottom={{ base: 4, md: 8 }} gap={3} p={3} pr={isRTL ? 3 : 5} pl={isRTL ? 5 : 3} bg="white" rounded="2xl" shadow="lift" borderWidth="1px" borderColor="ink.200">
              <IconTile icon={LuGraduationCap} tone="brand" />
              <Box>
                <Text fontSize="sm" fontWeight="600" color="ink.900">Condor Academy</Text>
                <Text fontSize="xs" color="ink.500">L'excellence professionnelle</Text>
              </Box>
            </HStack>
          </Box>
        </Grid>
      </PageContainer>
    </Box>
  );
}
