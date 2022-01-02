import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { CityCard } from "../../components/CityCard";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import { InfoContinent } from "../../components/InfoContinent";

export default function Continent() {
  return (
    <Flex h="100vh" direction="column">
      <Header hasBackButton />
      <ContinentBanner />
      <Box mx={["2", "20"]} py="8">
        <SimpleGrid gap="4" minChildWidth="320px">
          <Text textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex justify="space-around">
            <InfoContinent title="50" subtitle="países" />
            <InfoContinent title="60" subtitle="línguas" />
            <InfoContinent title="27" subtitle="cidades +100" />
          </Flex>
        </SimpleGrid>
        <Heading fontWeight="medium" my="8">Cidades +100</Heading>
        <SimpleGrid columns={[1, 2, 4]} spacing={4}>
          <CityCard city="Londres" country="Reino Unido" imgCity="/images/cities/londres.png" imgFlag="/images/flags/unitedkingdom.png" />
            <CityCard city="Paris" country="França" imgCity="/images/cities/paris.png" imgFlag="/images/flags/france.png" />
                  <CityCard city="Roma" country="Itália" imgCity="/images/cities/roma.png" imgFlag="/images/flags/italia.png" />
                  <CityCard city="Amsterdã" country="Holanda" imgCity="/images/cities/amsterdam.png" imgFlag="/images/flags/holanda.png" />
                  <CityCard city="Praga" country="República Tcheca" imgCity="/images/cities/praga.png" imgFlag="/images/flags/republicatcheca.png" />
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
