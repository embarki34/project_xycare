import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import type { HomeViewModel } from "../../viewmodels/useHomeViewModel";
import { IconTile, Section, SectionHeader } from "../common/primitives";

export function AboutSection({
  pillars,
  t,
}: Pick<HomeViewModel, "pillars" | "t">) {
  return (
    <Section id="about" bg="white">
      <Grid
        templateColumns={{ base: "1fr", lg: "5fr 7fr" }}
        gap={{ base: 10, lg: 20 }}
        alignItems="start"
      >
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />
        <Stack gap={0} borderTopWidth="1px" borderColor="ink.200">
          {pillars.map((p, i) => (
            <Flex
              key={p.title}
              gap={{ base: 4, md: 6 }}
              py={{ base: 6, md: 7 }}
              borderBottomWidth="1px"
              borderColor="ink.200"
              align="start"
            >
              <Text
                fontFamily="heading"
                fontSize="sm"
                fontWeight="700"
                color="ink.400"
                w="28px"
                pt="2px"
                flexShrink={0}
              >
                0{i + 1}
              </Text>
              <IconTile icon={p.icon} />
              <Box>
                <Heading
                  as="h3"
                  fontSize="lg"
                  fontWeight="700"
                  color="ink.900"
                  letterSpacing="-0.01em"
                  mb={1}
                >
                  {p.title}
                </Heading>
                <Text color="ink.500" lineHeight="1.65">
                  {p.description}
                </Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      </Grid>
    </Section>
  );
}
