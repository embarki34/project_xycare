import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { Section, SectionHeader } from "../common/primitives";
import { useLanguage } from "../../viewmodels/LanguageContext";
import type { TranslationDictionary } from "../../viewmodels/LanguageContext";

import condorLogo from "../../assets/logos/condor.svg";
import cristorLogo from "../../assets/logos/cristor.svg";
import hisenseLogo from "../../assets/logos/hisense.svg";
import nardiLogo from "../../assets/logos/nardi.svg";
import steelLogo from "../../assets/logos/bba-steel.png";
import immoLogo from "../../assets/logos/immo.png";
import logisticsLogo from "../../assets/logos/logistics.png";
import khadamatyLogo from "../../assets/logos/Logo-Khadamaty.png";

interface CompaniesStripProps {
  t?: TranslationDictionary;
}

export function CompaniesStrip({ t: propT }: CompaniesStripProps) {
  const { t: contextT } = useLanguage();
  const t = propT || contextT;

  const logos = [
    { src: condorLogo, alt: "Condor Electronics", maxH: "38px", maxW: "130px" },
    { src: cristorLogo, alt: "Cristor", maxH: "28px", maxW: "120px" },
    { src: hisenseLogo, alt: "Hisense", maxH: "28px", maxW: "120px" },
    { src: nardiLogo, alt: "Nardi", maxH: "28px", maxW: "120px" },
    { src: steelLogo, alt: "BBA Steel", maxH: "84px", maxW: "180px" },
    { src: immoLogo, alt: "Condor Immobilier", maxH: "170px", maxW: "210px" },
    { src: khadamatyLogo, alt: "Khadamaty", maxH: "60px", maxW: "130px" },
    { src: logisticsLogo, alt: "Condor Logistics", maxH: "70px", maxW: "180px" },
  ];

  return (
    <Section id="companies" bg="white" borderYWidth="1px" borderColor="ink.100">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "start", md: "end" }}
        gap={6}
        mb={{ base: 10, md: 14 }}
      >
        <SectionHeader
          eyebrow={t.companies?.eyebrow || "Partenaires"}
          title={t.companies?.title || "L'Écosystème du Groupe Condor"}
          description={
            t.companies?.description ||
            "Une synergie industrielle multisectorielle pour une expertise partagée."
          }
        />
      </Flex>

      <SimpleGrid
        columns={{ base: 2, sm: 2, md: 4 }}
        gap={{ base: 4, md: 6 }}
        w="full"
      >
        {logos.map((logo) => (
          <Box
            key={logo.alt}
            role="group"
            data-group
            position="relative"
            p={{ base: 5, md: 6 }}
            h={{ base: "150px", md: "150px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            transition="all 0.25s ease"
            _hover={{
              "& img": {
                opacity: 1,
                filter: "grayscale(0%)",
                transform: "scale(1.06)",
              },
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              maxH={logo.maxH}
              maxW={logo.maxW}
              w="auto"
              h="auto"
              objectFit="contain"
              opacity={0.65}
              filter="grayscale(100%)"
              transition="all 0.3s ease"
              _hover={{
                opacity: 1,
                filter: "grayscale(0%)",
                transform: "scale(1.06)",
              }}
              _groupHover={{
                opacity: 1,
                filter: "grayscale(0%)",
                transform: "scale(1.06)",
              }}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  );
}