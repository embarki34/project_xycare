import { Box, Flex, Heading, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { LuArrowLeft, LuArrowRight, LuArrowUpRight, LuFileText } from "react-icons/lu";
import type { HomeViewModel } from "../../viewmodels/useHomeViewModel";
import { IconTile, Section, SectionHeader } from "../common/primitives";

type DomainsProps = Pick<HomeViewModel, "domains" | "t" | "dir">;

export function DomainsSection({ domains, t, dir }: DomainsProps) {
  const isRTL = dir === "rtl";
  const ArrowIcon = isRTL ? LuArrowLeft : LuArrowRight;

  return (
    <Section id="domains" bg="ink.50" borderYWidth="1px" borderColor="ink.100">
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "start", md: "end" }} gap={6} mb={{ base: 10, md: 14 }}>
        <SectionHeader eyebrow={t.domains.eyebrow} title={t.domains.title} description={t.domains.description} />
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 4, md: 5 }}>
        {domains.map((d) => (
          <Box
            key={d.title}
            as="article"
            role="group"
            position="relative"
            p={{ base: 6, md: 7 }}
            bg="white"
            rounded="2xl"
            borderWidth="1px"
            borderColor="ink.200"
            shadow="soft"
            transition="all 0.2s ease"
            _hover={{
              borderColor: "brand.200",
              shadow: "card",
              transform: "translateY(-2px)",
            }}
          >
            <Flex justify="space-between" align="start" mb={8}>
              <IconTile icon={d.icon} />
              <Icon
                as={LuArrowUpRight}
                boxSize={5}
                color="ink.300"
                transition="all 0.2s"
                _groupHover={{
                  color: "brand.600",
                  transform: "translate(2px,-2px)",
                }}
              />
            </Flex>
            <Heading as="h3" fontSize="lg" fontWeight="700" color="ink.900" letterSpacing="-0.01em" mb={2}>
              {d.title}
            </Heading>
            <Text fontSize="15px" color="ink.500" lineHeight="1.65">
              {d.description}
            </Text>
          </Box>
        ))}

        <RouterLink to="#" style={{ textDecoration: "none", display: "flex" }}>
          <Flex
            direction="column"
            justify="space-between"
            textAlign="left"
            p={{ base: 6, md: 7 }}
            w="full"
            rounded="2xl"
            bg="brand.900"
            color="white"
            cursor="pointer"
            minH={{ base: "200px", md: "auto" }}
            transition="all 0.25s ease"
            _hover={{
              bg: "brand.800",
              transform: "translateY(-4px)",
              shadow: "lift",
            }}
          >
            <IconTile icon={LuFileText} tone="inverted" />
            <Box mt={8}>
              <Heading as="h3" fontSize="lg" fontWeight="700" letterSpacing="-0.01em" mb={2}>
                {t.domains.seeAllTileTitle}
              </Heading>
              <HStack gap={2} fontSize="15px" color="brand.200">
                <Text>{t.domains.seeAllTileDesc}</Text>
                <Icon as={ArrowIcon} boxSize={4} />
              </HStack>
            </Box>
          </Flex>
        </RouterLink>
      </SimpleGrid>
    </Section>
  );
}
