import { Flex, Heading, Text, Divider } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

import { Banner } from "../components/HomeBanner";
import { Carousel } from "../components/Carousel";


export default function Home() {
  return (
    <Flex
      h="100vh"
      w="100vw"
      direction="column"
      overflowX="hidden"
    >
      <Header />
      <Banner />
      <TravelTypes />
      <Divider my={["4","20"]} borderColor="black" maxW="20" alignSelf="center"  />
        <Heading color="dark.headings" textAlign="center" fontWeight="medium" lineHeight="lg" fontSize={["20", "30"]}>
          Vamos nessa?
          <Text>Então escolha seu continente</Text>
        </Heading>
      <Carousel />
    </Flex>
      
  )
}
