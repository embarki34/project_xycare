import { Box, Button, Field, Flex, Grid, Heading, Input, Link, NativeSelect, SimpleGrid, Stack, Text, Textarea, Icon } from "@chakra-ui/react";
import { LuCircleCheck, LuSend } from "react-icons/lu";
import type { HomeViewModel } from "../../viewmodels/useHomeViewModel";
import { IconTile, Section, SectionHeader } from "../common/primitives";

const inputStyles = {
  h: "46px",
  rounded: "lg",
  bg: "white",
  borderColor: "ink.200",
  fontSize: "15px",
  _hover: { borderColor: "ink.300" },
  _focusVisible: {
    borderColor: "brand.500",
    boxShadow: "0 0 0 3px rgba(63,94,168,.15)",
    outline: "none",
  },
} as const;

const labelStyles = {
  fontSize: "sm",
  fontWeight: "500",
  color: "ink.700",
} as const;

const primaryBtn = {
  h: "48px",
  px: 6,
  rounded: "xl",
  bg: "brand.900",
  color: "white",
  fontWeight: "600",
  fontSize: "15px",
  shadow: "0 1px 2px rgba(16,31,76,.2), inset 0 1px 0 rgba(255,255,255,.08)",
  _hover: { bg: "brand.800" },
  _active: { transform: "translateY(1px)" },
} as const;

type ContactProps = Pick<
  HomeViewModel,
  | "contactChannels"
  | "domains"
  | "form"
  | "updateField"
  | "isSubmitting"
  | "isSubmitted"
  | "handleContactSubmit"
  | "resetContactForm"
  | "t"
>;

export function ContactSection(props: ContactProps) {
  const {
    contactChannels,
    domains,
    form,
    updateField,
    isSubmitting,
    isSubmitted,
    handleContactSubmit,
    resetContactForm,
    t,
  } = props;

  return (
    <Section id="contact" bg="white">
      <Grid
        templateColumns={{ base: "1fr", lg: "5fr 6fr" }}
        gap={{ base: 12, lg: 20 }}
      >
        <Stack gap={10}>
          <SectionHeader
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
          />

          <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
            {contactChannels.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                gap={3}
                p={4}
                rounded="xl"
                borderWidth="1px"
                borderColor="ink.200"
                transition="all 0.15s"
                _hover={{
                  textDecoration: "none",
                  borderColor: "brand.200",
                  bg: "brand.50",
                }}
              >
                <IconTile icon={c.icon} />
                <Box minW={0}>
                  <Text fontSize="xs" color="ink.500" fontWeight="500">
                    {c.label}
                  </Text>
                  <Text fontSize="sm" fontWeight="600" color="ink.900" truncate>
                    {c.value}
                  </Text>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Stack>

        <Box
          p={{ base: 6, md: 10 }}
          rounded="3xl"
          bg="ink.50"
          borderWidth="1px"
          borderColor="ink.200"
        >
          {isSubmitted ? (
            <Stack
              gap={5}
              align="center"
              textAlign="center"
              py={{ base: 10, md: 16 }}
            >
              <Flex
                boxSize="56px"
                rounded="full"
                bg="accent.50"
                color="accent.600"
                align="center"
                justify="center"
                borderWidth="1px"
                borderColor="accent.100"
              >
                <Icon as={LuCircleCheck} boxSize={7} />
              </Flex>
              <Heading as="h3" fontSize="xl" fontWeight="700" color="ink.900">
                {t.common.requestSent}
              </Heading>
              <Text color="ink.500" maxW="340px">
                {t.contact.successMessage}
              </Text>
              <Button
                variant="ghost"
                color="brand.700"
                onClick={resetContactForm}
              >
                {t.common.anotherRequest}
              </Button>
            </Stack>
          ) : (
            <form onSubmit={handleContactSubmit} noValidate={false}>
              <Stack gap={5}>
                <Box mb={1}>
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="700"
                    color="ink.900"
                    letterSpacing="-0.01em"
                  >
                    {t.contact.formTitle}
                  </Heading>
                  <Text fontSize="sm" color="ink.500" mt={1}>
                    {t.contact.formSubtitle}
                  </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
                  <Field.Root required>
                    <Field.Label {...labelStyles}>
                      {t.contact.fullNameLabel}
                    </Field.Label>
                    <Input
                      id="contact-name"
                      {...inputStyles}
                      placeholder={t.contact.fullNamePlaceholder}
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label {...labelStyles}>
                      {t.contact.phoneLabel}
                    </Field.Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      {...inputStyles}
                      placeholder={t.contact.phonePlaceholder}
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </Field.Root>
                </SimpleGrid>

                <Field.Root required>
                  <Field.Label {...labelStyles}>
                    {t.contact.emailLabel}
                  </Field.Label>
                  <Input
                    id="contact-email"
                    type="email"
                    {...inputStyles}
                    placeholder={t.contact.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label {...labelStyles}>
                    {t.contact.domainLabel}
                  </Field.Label>
                  <NativeSelect.Root>
                    <NativeSelect.Field
                      id="contact-domain"
                      {...inputStyles}
                      value={form.domain}
                      onChange={(e) => updateField("domain", e.target.value)}
                    >
                      <option value="">{t.contact.domainPlaceholder}</option>
                      {domains.map((d) => (
                        <option key={d.title} value={d.title}>
                          {d.title}
                        </option>
                      ))}
                    </NativeSelect.Field>
                    <NativeSelect.Indicator color="ink.400" />
                  </NativeSelect.Root>
                </Field.Root>

                <Field.Root>
                  <Field.Label {...labelStyles}>
                    {t.contact.messageLabel}
                  </Field.Label>
                  <Textarea
                    id="contact-message"
                    {...inputStyles}
                    h="auto"
                    minH="110px"
                    py={3}
                    resize="vertical"
                    placeholder={t.contact.messagePlaceholder}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                  />
                </Field.Root>

                <Button
                  id="contact-submit-btn"
                  type="submit"
                  {...primaryBtn}
                  w="full"
                  mt={2}
                  loading={isSubmitting}
                  loadingText={t.common.sending}
                >
                  {t.common.sendRequest} <LuSend />
                </Button>
                <Text fontSize="xs" color="ink.400" textAlign="center">
                  {t.common.privacyNotice}
                </Text>
              </Stack>
            </form>
          )}
        </Box>
      </Grid>
    </Section>
  );
}
