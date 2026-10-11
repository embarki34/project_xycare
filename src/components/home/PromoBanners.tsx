import { useMemo, useState } from "react";
import { Box, Button, Flex, Heading, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { LuCalendarDays, LuHeartHandshake, LuMapPin } from "react-icons/lu";
import type { HomeViewModel } from "../../viewmodels/useHomeViewModel";
import { BANNER_SCHEDULE } from "../../config/site";
import { PageContainer } from "../common/primitives";

const ROTATE_MS = 7000;

type BannerId = keyof typeof BANNER_SCHEDULE;

function isActive(id: BannerId, now: Date) {
  const { start, end } = BANNER_SCHEDULE[id];
  return now >= new Date(`${start}T00:00:00`) && now <= new Date(`${end}T23:59:59`);
}

export function PromoBanners({ t }: Pick<HomeViewModel, "t">) {
  const b = t.extras.banners;
  const isRTL = t.dir === "rtl";
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const banners = useMemo(() => {
    const now = new Date();
    return (
      [
        {
          id: "formatech" as const,
          bg: "linear-gradient(120deg, #101F4C 0%, #243B7C 100%)",
          badge: b.formatechBadge,
          title: b.formatechTitle,
          subtitle: b.formatechSubtitle,
          cta: b.formatechCta,
          meta: [
            { icon: LuCalendarDays, text: b.formatechDates },
            { icon: LuMapPin, text: b.formatechPlace },
          ],
          visual: (
            <Flex boxSize="96px" rounded="2xl" bg="white" align="center" justify="center" shadow="lift" flexShrink={0}>
              <Image src="/assets/image.png" alt="FormaTech Expo 2026" boxSize="56px" objectFit="contain" />
            </Flex>
          ),
        },
        {
          id: "rose" as const,
          bg: "linear-gradient(120deg, #9D174D 0%, #DB2777 100%)",
          badge: b.roseBadge,
          title: b.roseTitle,
          subtitle: b.roseSubtitle,
          cta: b.roseCta,
          meta: [],
          visual: (
            <Flex boxSize="96px" rounded="2xl" bg="whiteAlpha.200" borderWidth="1px" borderColor="whiteAlpha.400" align="center" justify="center" flexShrink={0}>
              <Icon as={LuHeartHandshake} boxSize="44px" color="white" />
            </Flex>
          ),
        },
      ]
    ).filter((x) => isActive(x.id, now));
  }, [b]);

  if (banners.length === 0) return null;

  const count = banners.length;
  const active = index % count;
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <Box
      as="section"
      aria-label={b.ariaLabel}
      pb={{ base: 4, md: 6 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* The progress bar's CSS animation drives the rotation: when it ends, we slide to the next banner. */}
      <style>{`
        @keyframes promo-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) { .promo-track { transition: none !important; } }
      `}</style>
      <PageContainer>
        <Box position="relative" rounded="3xl" overflow="hidden" color="white" shadow="lift">
          <Flex
            className="promo-track"
            style={{
              transform: `translateX(${isRTL ? "" : "-"}${active * 100}%)`,
              transition: "transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)",
            }}
          >
            {banners.map((x, i) => (
              <Box
                key={x.id}
                flex="0 0 100%"
                minW={0}
                aria-hidden={i !== active}
                px={{ base: 6, md: 10 }}
                pt={{ base: 6, md: 8 }}
                pb={{ base: 12, md: count > 1 ? 14 : 8 }}
                style={{ background: x.bg }}
              >
                <Flex direction={{ base: "column", md: "row" }} align={{ base: "start", md: "center" }} gap={{ base: 5, md: 8 }}>
                  {x.visual}
                  <Stack gap={2} flex="1" minW={0}>
                    <Text alignSelf="start" px={2.5} py="2px" rounded="full" bg="whiteAlpha.200" fontSize="xs" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase">
                      {x.badge}
                    </Text>
                    <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} fontWeight="800" letterSpacing="-0.02em">
                      {x.title}
                    </Heading>
                    <Text color="whiteAlpha.900" lineHeight="1.6">{x.subtitle}</Text>
                    {x.meta.length > 0 && (
                      <HStack gap={{ base: 3, md: 6 }} flexWrap="wrap" pt={1} fontSize="sm" color="whiteAlpha.900">
                        {x.meta.map((m) => (
                          <HStack key={m.text} gap={2}>
                            <Icon as={m.icon} boxSize="16px" />
                            <Text>{m.text}</Text>
                          </HStack>
                        ))}
                      </HStack>
                    )}
                  </Stack>
                  <Button asChild h="46px" px={6} rounded="xl" bg="white" color="ink.900" fontWeight="600" _hover={{ bg: "ink.50" }} flexShrink={0}>
                    <a href="#contact" tabIndex={i === active ? 0 : -1}>{x.cta}</a>
                  </Button>
                </Flex>
              </Box>
            ))}
          </Flex>

          {count > 1 && (
            <HStack position="absolute" bottom={{ base: 4, md: 5 }} insetX="0" justify="center" gap={2}>
              {banners.map((x, i) => (
                <Box
                  key={x.id}
                  as="button"
                  aria-label={x.title}
                  aria-current={i === active}
                  onClick={() => setIndex(i)}
                  position="relative"
                  overflow="hidden"
                  h="4px"
                  w={{ base: "44px", md: "64px" }}
                  rounded="full"
                  bg="whiteAlpha.400"
                  cursor="pointer"
                >
                  <Box
                    // Remounting on the active index restarts the countdown from zero.
                    key={i === active ? `run-${index}` : "idle"}
                    position="absolute"
                    inset="0"
                    rounded="full"
                    bg="white"
                    style={{
                      transformOrigin: isRTL ? "right" : "left",
                      transform: i < active ? "scaleX(1)" : "scaleX(0)",
                      ...(i === active && {
                        animation: `promo-progress ${ROTATE_MS}ms linear forwards`,
                        animationPlayState: paused ? "paused" : "running",
                      }),
                    }}
                    onAnimationEnd={i === active ? next : undefined}
                  />
                </Box>
              ))}
            </HStack>
          )}
        </Box>
      </PageContainer>
    </Box>
  );
}
