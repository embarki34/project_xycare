import { Box, Button, Flex, Grid, Heading, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { LuDownload, LuFileText } from "react-icons/lu";
import catalogueImg from "../../assets/catalogue-cover.jpg";
import type { HomeViewModel } from "../../viewmodels/useHomeViewModel";
import { Eyebrow, PageContainer } from "../common/primitives";
import { Magnetic } from "../animations/Magnetic";

type CatalogueProps = Pick<HomeViewModel, "handleDownloadCatalogue" | "t">;

export function CatalogueSection({
  handleDownloadCatalogue,
  t,
}: CatalogueProps) {
  return (
    <Box as="section" id="catalogue" py={{ base: 4, md: 8 }} bg="white">
      <PageContainer>
        <Grid
          position="relative"
          overflow="hidden"
          templateColumns={{ base: "1fr", md: "1.3fr 1fr" }}
          alignItems="center"
          gap={{ base: 10, md: 8 }}
          rounded="3xl"
          px={{ base: 6, md: 14 }}
          pt={{ base: 10, md: 14 }}
          pb={{ base: 0, md: 14 }}
          bg="brand.950"
          color="white"
        >
          {/* Decorative grid + glow */}
          <Box
            position="absolute"
            inset="0"
            pointerEvents="none"
            opacity={0.5}
            bgImage="linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)"
            bgSize="48px 48px"
            style={{
              maskImage:
                "radial-gradient(ellipse at 70% 50%, black 10%, transparent 70%)",
            }}
          />
          <Box
            position="absolute"
            right="-10%"
            top="-30%"
            w="520px"
            h="520px"
            rounded="full"
            bg="brand.600"
            opacity={0.35}
            filter="blur(120px)"
            pointerEvents="none"
          />

          <Stack gap={6} position="relative">
            <Eyebrow tone="dark">{t.catalogue.eyebrow}</Eyebrow>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight="1.15"
              letterSpacing="-0.025em"
              fontWeight="700"
            >
              {t.catalogue.title}
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="brand.200"
              lineHeight="1.7"
              maxW="480px"
            >
              {t.catalogue.description}
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              gap={4}
              align={{ base: "stretch", sm: "center" }}
            >
              <Magnetic>
                <Button
                  id="catalogue-download-btn"
                  h="48px"
                  px={6}
                  rounded="xl"
                  bg="white"
                  color="brand.950"
                  fontWeight="600"
                  fontSize="15px"
                  _hover={{ bg: "brand.50" }}
                  onClick={handleDownloadCatalogue}
                >
                  <LuDownload /> {t.catalogue.button}
                </Button>
              </Magnetic>
              <HStack gap={2} fontSize="sm" color="brand.300">
                <Icon as={LuFileText} boxSize={4} />
                <Text>{t.catalogue.meta}</Text>
              </HStack>
            </Stack>
          </Stack>

          <Flex position="relative" justify="center" align="end" h="full">
            <Image
              src={catalogueImg}
              alt="Catalogue Condor Academy 2026"
              w={{ base: "220px", md: "260px" }}
              roundedTop="xl"
              rounded={{ md: "xl" }}
              shadow="0 30px 60px -20px rgba(0,0,0,.6)"
              transform={{ md: "rotate(3deg)" }}
              mb={{ base: -2, md: 0 }}
            />
          </Flex>
        </Grid>
      </PageContainer>
    </Box>
  );
}
