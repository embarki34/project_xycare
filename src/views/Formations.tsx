// import {
//   Badge,
//   Box,
//   Button,
//   Flex,
//   Grid,
//   Heading,
//   HStack,
//   Icon,
//   Image,
//   Input,
//   SimpleGrid,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import {
//   LuArrowLeft,
//   LuArrowRight,
//   LuBookOpen,
//   LuClock,
//   LuDownload,
//   LuGraduationCap,
//   LuSearch,
//   LuSparkles,
// } from "react-icons/lu";
// import { Eyebrow, PageContainer } from "../components/common/primitives";
// import { Header, Footer, MobileCtaBar } from "../components/layout/Layout";
// import { useFormationsViewModel } from "../viewmodels/useHomeViewModel";
// import { useEffect } from "react";

// export function Formations() {
//   const vm = useFormationsViewModel();
//   const { t, language, dir } = vm;
//   const isRTL = dir === "rtl";
//   const BackIcon = isRTL ? LuArrowRight : LuArrowLeft;
//   const NextIcon = isRTL ? LuArrowLeft : LuArrowRight;

//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.replace("#", "");
//       const elem = document.getElementById(id);
//       if (elem) elem.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location.hash]);

//   return (
//     <Box minH="100vh" bg="white" dir={dir}>
//       <Header
//         language={vm.language}
//         setLanguage={vm.setLanguage}
//         navLinks={vm.navLinks}
//         handleDownloadCatalogue={vm.handleDownloadCatalogue}
//       />

//       <Box as="main">
//         {/* Hero Banner for Gallery */}
//         <Box
//           position="relative"
//           overflow="hidden"
//           pt={{ base: 12, md: 16 }}
//           pb={{ base: 14, md: 20 }}
//           borderBottomWidth="1px"
//           borderColor="ink.200"
//           bg="radial-gradient(80% 60% at 50% 0%, #E4E9F4 0%, rgba(228,233,244,0) 80%), linear-gradient(180deg, #FFFFFF 0%, #F7F8FA 100%)"
//         >
//           <PageContainer>
//             <Stack gap={5} maxW="780px" mx="auto" textAlign="center" align="center">
//               <Link to="/" style={{ textDecoration: "none" }}>
//                 <HStack
//                   gap={2}
//                   px={3}
//                   py={1}
//                   rounded="full"
//                   bg="white"
//                   borderWidth="1px"
//                   borderColor="ink.200"
//                   fontSize="xs"
//                   fontWeight="600"
//                   color="ink.600"
//                   _hover={{ borderColor: "ink.300", color: "ink.900" }}
//                 >
//                   <Icon as={BackIcon} boxSize={3.5} />
//                   <Text>{t.common.backHome}</Text>
//                 </HStack>
//               </Link>

//               <Eyebrow>{t.gallery.eyebrow}</Eyebrow>

//               <Heading
//                 as="h1"
//                 fontSize={{ base: "34px", md: "48px", lg: "54px" }}
//                 fontWeight="800"
//                 lineHeight="1.15"
//                 letterSpacing="-0.03em"
//                 color="ink.900"
//               >
//                 {t.gallery.title}
//               </Heading>

//               <Text fontSize={{ base: "md", md: "lg" }} color="ink.500" maxW="600px">
//                 {t.gallery.subtitle}
//               </Text>

//               {/* Search bar */}
//               <Box w="full" maxW="540px" mt={3}>
//                 <Flex
//                   align="center"
//                   bg="white"
//                   p={2}
//                   rounded="2xl"
//                   borderWidth="1px"
//                   borderColor="ink.200"
//                   shadow="soft"
//                   gap={2}
//                 >
//                   <Flex px={2} color="ink.400" align="center" justify="center">
//                     <Icon as={LuSearch} boxSize={5} />
//                   </Flex>
//                   <Input
//                     placeholder={t.gallery.searchPlaceholder}
//                     value={vm.searchQuery}
//                     onChange={(e) => vm.setSearchQuery(e.target.value)}
//                     border="none"
//                     outline="none"
//                     fontSize="15px"
//                     _focusVisible={{ outline: "none", boxShadow: "none" }}
//                   />
//                   {vm.searchQuery && (
//                     <Button
//                       size="xs"
//                       variant="ghost"
//                       color="ink.400"
//                       onClick={() => vm.setSearchQuery("")}
//                     >
//                       {t.gallery.clear}
//                     </Button>
//                   )}
//                 </Flex>
//               </Box>

//               {/* Category Filter Pills */}
//               <HStack gap={2} flexWrap="wrap" justify="center" pt={3}>
//                 {vm.categories.map((cat) => {
//                   const active = vm.selectedCategory === cat;
//                   const label = t.gallery.categories[cat] || cat;
//                   return (
//                     <Box
//                       as="button"
//                       key={cat}
//                       onClick={() => vm.setSelectedCategory(cat)}
//                       px={4}
//                       py={2}
//                       rounded="xl"
//                       fontSize="sm"
//                       fontWeight="600"
//                       cursor="pointer"
//                       transition="all 0.15s ease"
//                       bg={active ? "brand.900" : "white"}
//                       color={active ? "white" : "ink.600"}
//                       borderWidth="1px"
//                       borderColor={active ? "brand.900" : "ink.200"}
//                       shadow={active ? "0 2px 6px rgba(16,31,76,0.2)" : "soft"}
//                       _hover={{ borderColor: "brand.300", color: active ? "white" : "ink.900" }}
//                     >
//                       {label}
//                     </Box>
//                   );
//                 })}
//               </HStack>
//             </Stack>
//           </PageContainer>
//         </Box>

//         {/* Gallery Content Section */}
//         <Box py={{ base: 12, md: 16 }} bg="ink.50">
//           <PageContainer>
//             {/* Results count & status */}
//             <Flex justify="space-between" align="center" mb={8} flexWrap="wrap" gap={4}>
//               <HStack gap={2}>
//                 <Text fontWeight="700" fontSize="lg" color="ink.900">
//                   {t.gallery.availableTitle}
//                 </Text>
//                 <Badge colorPalette="blue" variant="subtle" px={2.5} py={0.5} rounded="full" fontWeight="700">
//                   {vm.filteredCourses.length}
//                 </Badge>
//               </HStack>

//               <HStack gap={3}>
//                 <Text fontSize="sm" color="ink.500">
//                   {t.gallery.levelLabel}
//                 </Text>
//                 {vm.levels.map((lvl) => {
//                   const active = vm.selectedLevel === lvl;
//                   const label = t.gallery.levels[lvl] || lvl;
//                   return (
//                     <Box
//                       as="button"
//                       key={lvl}
//                       onClick={() => vm.setSelectedLevel(lvl)}
//                       fontSize="xs"
//                       fontWeight="600"
//                       px={2.5}
//                       py={1}
//                       rounded="lg"
//                       cursor="pointer"
//                       bg={active ? "white" : "transparent"}
//                       color={active ? "brand.700" : "ink.500"}
//                       borderWidth={active ? "1px" : "0"}
//                       borderColor="ink.200"
//                       shadow={active ? "soft" : "none"}
//                     >
//                       {label}
//                     </Box>
//                   );
//                 })}
//               </HStack>
//             </Flex>

//             {/* Gallery Grid Cards */}
//             {vm.filteredCourses.length === 0 ? (
//               <Box
//                 py={20}
//                 textAlign="center"
//                 bg="white"
//                 rounded="3xl"
//                 borderWidth="1px"
//                 borderColor="ink.200"
//               >
//                 <Icon as={LuBookOpen} boxSize={12} color="ink.300" mb={4} />
//                 <Heading as="h3" size="md" color="ink.800" mb={2}>
//                   {t.gallery.noResultsTitle}
//                 </Heading>
//                 <Text color="ink.500" mb={6} fontSize="sm">
//                   {t.gallery.noResultsDesc}
//                 </Text>
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   borderColor="ink.300"
//                   onClick={() => {
//                     vm.setSearchQuery("");
//                     vm.setSelectedCategory("Tous");
//                     vm.setSelectedLevel("Tous");
//                   }}
//                 >
//                   {t.common.resetFilters}
//                 </Button>
//               </Box>
//             ) : (
//               <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
//                 {vm.filteredCourses.map((course) => (
//                   <Box
//                     key={course.id}
//                     as="article"
//                     role="group"
//                     bg="white"
//                     rounded="2xl"
//                     overflow="hidden"
//                     borderWidth="1px"
//                     borderColor="ink.200"
//                     shadow="card"
//                     transition="all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)"
//                     _hover={{
//                       transform: "translateY(-4px)",
//                       shadow: "lift",
//                       borderColor: "brand.300",
//                     }}
//                     display="flex"
//                     flexDirection="column"
//                   >
//                     {/* Visual Photo Header */}
//                     <Box position="relative" h="200px" overflow="hidden" bg="ink.100">
//                       <Image
//                         src={course.image}
//                         alt={course.title[language]}
//                         w="full"
//                         h="full"
//                         objectFit="cover"
//                         transition="transform 0.4s ease"
//                         _groupHover={{ transform: "scale(1.04)" }}
//                       />
//                       <Box
//                         position="absolute"
//                         inset="0"
//                         bg="linear-gradient(180deg, rgba(16,31,76,0.1) 0%, rgba(16,31,76,0.6) 100%)"
//                       />

//                       {/* Badges on image */}
//                       <Flex position="absolute" top={3} left={3} right={3} justify="space-between" align="center">
//                         <Badge
//                           bg="white"
//                           color="ink.800"
//                           px={2.5}
//                           py={1}
//                           rounded="md"
//                           fontSize="xs"
//                           fontWeight="700"
//                           shadow="soft"
//                         >
//                           {t.gallery.categories[course.category] || course.category}
//                         </Badge>

//                         {course.isPopular && (
//                           <HStack
//                             gap={1}
//                             bg="accent.500"
//                             color="white"
//                             px={2}
//                             py={1}
//                             rounded="md"
//                             fontSize="xs"
//                             fontWeight="700"
//                             shadow="soft"
//                           >
//                             <Icon as={LuSparkles} boxSize={3} />
//                             <Text>{t.common.popular}</Text>
//                           </HStack>
//                         )}
//                       </Flex>

//                       <HStack
//                         position="absolute"
//                         bottom={3}
//                         left={3}
//                         right={3}
//                         gap={2}
//                         color="white"
//                         fontSize="xs"
//                         fontWeight="600"
//                       >
//                         <Flex align="center" gap={1} bg="blackAlpha.600" backdropFilter="blur(4px)" px={2} py={0.5} rounded="md">
//                           <Icon as={LuClock} boxSize={3.5} />
//                           <Text>{course.duration[language]}</Text>
//                         </Flex>
//                         <Flex align="center" gap={1} bg="blackAlpha.600" backdropFilter="blur(4px)" px={2} py={0.5} rounded="md">
//                           <Icon as={LuGraduationCap} boxSize={3.5} />
//                           <Text>{t.gallery.levels[course.level] || course.level}</Text>
//                         </Flex>
//                       </HStack>
//                     </Box>

//                     {/* Body content */}
//                     <Stack p={6} gap={4} flex={1} justify="space-between">
//                       <Stack gap={2}>
//                         <Heading
//                           as="h3"
//                           fontSize="18px"
//                           fontWeight="700"
//                           color="ink.900"
//                           lineHeight="1.35"
//                           letterSpacing="-0.01em"
//                         >
//                           {course.title[language]}
//                         </Heading>
//                         <Text fontSize="14px" color="ink.500" lineHeight="1.6" lineClamp={3}>
//                           {course.description[language]}
//                         </Text>
//                       </Stack>

//                       {/* Skills Tags */}
//                       <Stack gap={3} pt={2}>
//                         <HStack gap={1.5} flexWrap="wrap">
//                           {course.skills[language].map((skill) => (
//                             <Box
//                               key={skill}
//                               fontSize="11px"
//                               fontWeight="600"
//                               color="brand.700"
//                               bg="brand.50"
//                               px={2}
//                               py={0.5}
//                               rounded="md"
//                               borderWidth="1px"
//                               borderColor="brand.100"
//                             >
//                               {skill}
//                             </Box>
//                           ))}
//                         </HStack>

//                         <Flex
//                           pt={4}
//                           borderTopWidth="1px"
//                           borderColor="ink.100"
//                           justify="space-between"
//                           align="center"
//                         >
//                           <Text fontSize="xs" fontWeight="600" color="ink.400">
//                             {t.common.format} : {course.format[language]}
//                           </Text>
//                           <Link to="/#contact" style={{ textDecoration: "none" }}>
//                             <Button
//                               size="xs"
//                               h="32px"
//                               px={3}
//                               rounded="lg"
//                               bg="brand.900"
//                               color="white"
//                               fontWeight="600"
//                               _hover={{ bg: "brand.800" }}
//                             >
//                               {t.common.enroll} <Icon as={NextIcon} />
//                             </Button>
//                           </Link>
//                         </Flex>
//                       </Stack>
//                     </Stack>
//                   </Box>
//                 ))}
//               </SimpleGrid>
//             )}

//             {/* Bottom Catalogue Download Card */}
//             <Box
//               mt={16}
//               p={{ base: 8, md: 12 }}
//               rounded="3xl"
//               bg="brand.950"
//               color="white"
//               position="relative"
//               overflow="hidden"
//             >
//               <Grid templateColumns={{ base: "1fr", md: "1.8fr 1fr" }} gap={8} alignItems="center">
//                 <Stack gap={4}>
//                   <Eyebrow tone="dark">{t.catalogue.eyebrow}</Eyebrow>
//                   <Heading as="h2" size="xl" fontWeight="700">
//                     {t.catalogue.title}
//                   </Heading>
//                   <Text color="brand.200" fontSize="md" maxW="540px">
//                     {t.catalogue.description}
//                   </Text>
//                   <HStack pt={2} gap={4}>
//                     <Button
//                       h="46px"
//                       px={6}
//                       rounded="xl"
//                       bg="white"
//                       color="brand.950"
//                       fontWeight="600"
//                       _hover={{ bg: "brand.50" }}
//                       onClick={vm.handleDownloadCatalogue}
//                     >
//                       <LuDownload /> {t.common.downloadCatalogue}
//                     </Button>
//                   </HStack>
//                 </Stack>

//                 <Stack
//                   p={6}
//                   rounded="2xl"
//                   bg="whiteAlpha.100"
//                   borderWidth="1px"
//                   borderColor="whiteAlpha.200"
//                   gap={3}
//                 >
//                   <Text fontSize="sm" fontWeight="700" color="white">
//                     {t.gallery.customTitle}
//                   </Text>
//                   <Text fontSize="xs" color="brand.200" lineHeight="1.6">
//                     {t.gallery.customDesc}
//                   </Text>
//                   <Link to="/#contact" style={{ textDecoration: "none" }}>
//                     <Text fontSize="xs" fontWeight="700" color="accent.500" _hover={{ color: "accent.100" }}>
//                       {t.gallery.customContact}
//                     </Text>
//                   </Link>
//                 </Stack>
//               </Grid>
//             </Box>
//           </PageContainer>
//         </Box>
//       </Box>

//       <Footer navLinks={vm.navLinks} socials={vm.socials} contactChannels={vm.contactChannels} />
//       <MobileCtaBar onDownload={vm.handleDownloadCatalogue} />
//     </Box>
//   );
// }
