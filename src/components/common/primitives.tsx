import { Box, Container, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export const CONTAINER_MAX_W = "1200px";

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <Container maxW={CONTAINER_MAX_W} px={{ base: 5, md: 8 }}>
      {children}
    </Container>
  );
}

export function Section({ children, ...props }: BoxProps) {
  return (
    <Box as="section" py={{ base: 16, md: 24, lg: 28 }} {...props}>
      <PageContainer>{children}</PageContainer>
    </Box>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <Flex align="center" gap={2}>
      <Box w="6px" h="6px" rounded="full" bg="accent.500" />
      <Text
        fontSize="xs"
        fontWeight="600"
        letterSpacing="0.12em"
        textTransform="uppercase"
        color={tone === "dark" ? "brand.200" : "brand.600"}
      >
        {children}
      </Text>
    </Flex>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "start" }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <Stack
      gap={4}
      maxW="640px"
      mx={centered ? "auto" : undefined}
      align={centered ? "center" : "start"}
      textAlign={centered ? "center" : "start"}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "4xl" }}
        lineHeight="1.15"
        letterSpacing="-0.025em"
        fontWeight="700"
        color="ink.900"
      >
        {title}
      </Heading>
      {description && (
        <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.7" color="ink.500">
          {description}
        </Text>
      )}
    </Stack>
  );
}

export function IconTile({ icon, tone = "brand" }: { icon: IconType; tone?: "brand" | "accent" | "inverted" }) {
  const styles = {
    brand: { bg: "brand.50", color: "brand.700", borderColor: "brand.100" },
    accent: { bg: "accent.50", color: "accent.700", borderColor: "accent.100" },
    inverted: { bg: "whiteAlpha.100", color: "white", borderColor: "whiteAlpha.200" },
  }[tone];

  return (
    <Flex
      align="center"
      justify="center"
      boxSize="44px"
      rounded="xl"
      borderWidth="1px"
      flexShrink={0}
      {...styles}
    >
      <Icon as={icon} boxSize="20px" strokeWidth={1.75} />
    </Flex>
  );
}
