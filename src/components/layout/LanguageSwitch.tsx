import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LuChevronDown, LuGlobe } from "react-icons/lu";
import type { Language } from "../../viewmodels/LanguageContext";
import type { HomeViewModel } from "../../viewmodels/useHomeViewModel";

const LANGUAGES: Language[] = ["FR", "AR", "EN"];

const LANGUAGE_CONFIG: Record<
  Language,
  { label: string; native: string; flag: string }
> = {
  FR: { label: "Français", native: "FR", flag: "🇫🇷" },
  AR: { label: "العربية", native: "عربي", flag: "🇩🇿" },
  EN: { label: "English", native: "EN", flag: "🇬🇧" },
};

export function LanguageSwitch({
  language,
  setLanguage,
}: Pick<HomeViewModel, "language" | "setLanguage">) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#globe-lang-menu")) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <Box position="relative" id="globe-lang-menu">
      <Button
        variant="ghost"
        size="sm"
        h="36px"
        px={2.5}
        rounded="xl"
        borderWidth="1px"
        borderColor="ink.200"
        bg={isOpen ? "ink.100" : "white"}
        color="ink.800"
        display="inline-flex"
        alignItems="center"
        gap={1.5}
        shadow="soft"
        _hover={{ bg: "ink.50", borderColor: "ink.300" }}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-label="Sélectionner la langue"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Icon as={LuGlobe} boxSize={4} color="brand.600" />
        <Text fontSize="xs" fontWeight="700" letterSpacing="0.05em">
          {language}
        </Text>
        <Icon
          as={LuChevronDown}
          boxSize={3.5}
          color="ink.400"
          transition="transform 0.2s ease"
          transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
        />
      </Button>

      {isOpen && (
        <Box
          position="absolute"
          top="calc(100% + 6px)"
          right="0"
          zIndex="popover"
          bg="white"
          p={1.5}
          rounded="xl"
          borderWidth="1px"
          borderColor="ink.200"
          shadow="lift"
          minW="140px"
          className="reveal"
        >
          {LANGUAGES.map((lang) => {
            const active = language === lang;
            const config = LANGUAGE_CONFIG[lang];
            return (
              <Flex
                key={lang}
                as="button"
                w="full"
                align="center"
                justify="space-between"
                px={3}
                py={2}
                rounded="lg"
                cursor="pointer"
                bg={active ? "brand.50" : "transparent"}
                color={active ? "brand.900" : "ink.700"}
                fontWeight={active ? "700" : "500"}
                fontSize="xs"
                transition="all 0.15s ease"
                _hover={{
                  bg: active ? "brand.100" : "ink.50",
                  color: "ink.900",
                }}
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
              >
                <HStack gap={2}>
                  <Text fontSize="13px">{config.flag}</Text>
                  <Text>{config.label}</Text>
                </HStack>
                {active && (
                  <Box w="6px" h="6px" rounded="full" bg="accent.500" />
                )}
              </Flex>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
