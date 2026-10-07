import { Box, Grid, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import whyImg from "../../assets/why-mentoring.jpg";
import type { HomeViewModel } from "../../viewmodels/useHomeViewModel";
import { IconTile, Section, SectionHeader } from "../common/primitives";

export function WhySection({
  reasons,
  t,
  dir,
}: Pick<HomeViewModel, "reasons" | "t" | "dir">) {
  const isRTL = dir === "rtl";

  return (
    <Section id="why" bg="white">
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: 10, lg: 16, xl: 20 }}
        alignItems="center"
      >
        <Box position="relative" order={{ base: 2, lg: 1 }}>
          <Box
            rounded={{ base: "2xl", md: "3xl" }}
            overflow="hidden"
            borderWidth="1px"
            borderColor="ink.200"
            shadow="card"
          >
            <Image
              src={whyImg}
              alt="Expert Condor et ingénieure"
              w="full"
              h={{ base: "260px", sm: "340px", md: "520px" }}
              objectFit="cover"
            />
          </Box>
          <Box
            position="absolute"
            right={isRTL ? "auto" : { base: 3, md: -6 }}
            left={isRTL ? { base: 3, md: -6 } : "auto"}
            top={{ base: 3, md: 10 }}
            bg="brand.900"
            color="white"
            rounded="2xl"
            px={{ base: 4, md: 5 }}
            py={{ base: 3, md: 4 }}
            shadow="lift"
            maxW={{ base: "200px", sm: "230px" }}
          >
            <Text
              fontFamily="heading"
              fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
              fontWeight="800"
              letterSpacing="-0.02em"
              lineHeight="1"
            >
              {t.why.badgeTitle}
            </Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              color="brand.200"
              mt={1.5}
              lineHeight="1.4"
            >
              {t.why.badgeDesc}
            </Text>
          </Box>
        </Box>

        <Stack gap={{ base: 8, md: 10 }} order={{ base: 1, lg: 2 }}>
          <SectionHeader
            eyebrow={t.why.eyebrow}
            title={t.why.title}
            description={t.why.description}
          />
          <SimpleGrid columns={{ base: 1, sm: 2 }} gap={{ base: 3.5, sm: 4, md: 8 }}>
            {reasons.map((r, i) => (
              <Box
                key={r.title}
                role="group"
                p={{ base: 4.5, md: 0 }}
                bg={{ base: "ink.50", md: "transparent" }}
                rounded={{ base: "2xl", md: "none" }}
                borderWidth={{ base: "1px", md: "0px" }}
                borderColor={{ base: "ink.200", md: "transparent" }}
                shadow={{ base: "soft", md: "none" }}
                transition="all 0.25s ease"
                _hover={{
                  base: {
                    borderColor: "accent.400",
                    shadow: "card",
                    transform: "translateY(-2px)",
                    bg: "white",
                  },
                  md: {
                    transform: "none",
                  },
                }}
              >
                <Stack gap={{ base: 2.5, md: 3 }}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <IconTile icon={r.icon} tone="accent" />
                    <Text
                      display={{ base: "block", md: "none" }}
                      fontFamily="heading"
                      fontSize="xs"
                      fontWeight="700"
                      color="ink.400"
                    >
                      0{i + 1}
                    </Text>
                  </Box>
                  <Heading
                    as="h3"
                    fontSize={{ base: "15px", md: "md" }}
                    fontWeight="700"
                    color="ink.900"
                    lineHeight="1.3"
                  >
                    {r.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "13.5px", md: "15px" }}
                    color="ink.500"
                    lineHeight="1.65"
                  >
                    {r.description}
                  </Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Grid>
    </Section>
  );
}
