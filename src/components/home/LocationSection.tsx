import { Box, Button, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { LuExternalLink, LuMapPin } from "react-icons/lu";
import type { HomeViewModel } from "../../viewmodels/useHomeViewModel";
import { MAPS_EMBED_URL, MAPS_LINK } from "../../config/site";
import { Section, SectionHeader } from "../common/primitives";

export function LocationSection({ t, contactChannels }: Pick<HomeViewModel, "t" | "contactChannels">) {
  const l = t.extras.location;
  const address = contactChannels.find((c) => c.icon === LuMapPin)?.value;

  return (
    <Section id="location" bg="ink.50" borderYWidth="1px" borderColor="ink.100">
      <Grid templateColumns={{ base: "1fr", lg: "4fr 7fr" }} gap={{ base: 8, lg: 14 }} alignItems="center">
        <Stack gap={6}>
          <SectionHeader eyebrow={l.eyebrow} title={l.title} description={l.description} />
          {address && (
            <Text display="flex" gap={2} color="ink.700" fontWeight="500">
              <Icon as={LuMapPin} boxSize="18px" mt="3px" flexShrink={0} color="brand.600" />
              {address}
            </Text>
          )}
          <Button asChild alignSelf="start" h="46px" px={5} rounded="xl" bg="brand.900" color="white" fontWeight="600" _hover={{ bg: "brand.800" }}>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
              <LuExternalLink /> {l.openMaps}
            </a>
          </Button>
        </Stack>

        <Box rounded="3xl" overflow="hidden" borderWidth="1px" borderColor="ink.200" shadow="soft" h={{ base: "320px", md: "420px" }}>
          <iframe
            src={MAPS_EMBED_URL}
            title="Condor Academy"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </Box>
      </Grid>
    </Section>
  );
}
