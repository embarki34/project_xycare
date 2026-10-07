import { Box, Flex, HStack, Icon, SimpleGrid, Stack, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import type { HomeViewModel } from "../../viewmodels/useHomeViewModel";
import { PageContainer } from "../common/primitives";
import { Logo } from "./Logo";

const SOCIAL_ICONS = {
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  YouTube: FaYoutube,
} as const;

type FooterProps = Pick<
  HomeViewModel,
  "navLinks" | "socials" | "contactChannels"
>;

export function Footer({ navLinks, socials, contactChannels }: FooterProps) {
  return (
    <Box
      as="footer"
      bg="brand.950"
      color="brand.200"
      pt={{ base: 14, md: 20 }}
      pb={{ base: 28, md: 10 }}
    >
      <PageContainer>
        <SimpleGrid columns={{ base: 1, md: 12 }} gap={{ base: 10, md: 8 }}>
          <Stack gap={5} gridColumn={{ md: "span 5" }} maxW="340px">
            <Logo inverted />
            <Text fontSize="sm" lineHeight="1.7" color="brand.300">
              Le centre de formation du groupe Condor. Formation, développement
              et expertise au service des professionnels et des organisations.
            </Text>
            <HStack gap={2}>
              {socials.map((s) => (
                <ChakraLink
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  boxSize="38px"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  rounded="lg"
                  borderWidth="1px"
                  borderColor="whiteAlpha.200"
                  color="brand.200"
                  transition="all 0.15s"
                  _hover={{
                    color: "white",
                    borderColor: "whiteAlpha.400",
                    bg: "whiteAlpha.100",
                  }}
                >
                  <Icon as={SOCIAL_ICONS[s.label]} boxSize="15px" />
                </ChakraLink>
              ))}
            </HStack>
          </Stack>

          <Stack gap={4} gridColumn={{ md: "span 3" }}>
            <Text
              fontSize="xs"
              fontWeight="700"
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="white"
            >
              Navigation
            </Text>
            {navLinks.map((l) => {
              if (l.href.startsWith("/#")) {
                return (
                  <ChakraLink
                    key={l.href}
                    href={l.href}
                    fontSize="sm"
                    color="brand.300"
                    transition="color 0.15s"
                    _hover={{ color: "white", textDecoration: "none" }}
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
                  <Text
                    fontSize="sm"
                    color="brand.300"
                    transition="color 0.15s"
                    _hover={{ color: "white" }}
                  >
                    {l.label}
                  </Text>
                </RouterLink>
              );
            })}
          </Stack>

          <Stack gap={4} gridColumn={{ md: "span 4" }}>
            <Text
              fontSize="xs"
              fontWeight="700"
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="white"
            >
              Contact & Accès
            </Text>
            {contactChannels.map((c) => (
              <ChakraLink
                key={c.label}
                href={c.href}
                fontSize="sm"
                color="brand.300"
                transition="color 0.15s"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                {c.value}
              </ChakraLink>
            ))}
          </Stack>
        </SimpleGrid>

        <Flex
          mt={{ base: 12, md: 16 }}
          pt={6}
          borderTopWidth="1px"
          borderColor="whiteAlpha.100"
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          gap={3}
          fontSize="xs"
          color="brand.400"
        >
          <Text>© 2026 Condor Academy · Condor Electronics</Text>
          <ChakraLink
            href="#"
            color="brand.400"
            _hover={{ color: "white", textDecoration: "none" }}
          >
            Politique de confidentialité
          </ChakraLink>
        </Flex>
      </PageContainer>
    </Box>
  );
}
