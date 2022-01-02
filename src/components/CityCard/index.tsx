import { Flex, Heading, Text, Image } from "@chakra-ui/react";

interface CityCardProps {
    city: string;
    imgCity: string;
    country: string
    imgFlag: string
}

export function CityCard({ city, imgCity, country, imgFlag }: CityCardProps) {
    return (
        <Flex direction="column" p="4" >
            <Image src={imgCity} alt={city}/>
            <Flex justify="space-between" px="6" borderColor="highlight" borderWidth={2} borderBottomRadius="md" borderTopWidth={0} py="6">
                <Heading fontFamily="cards" fontSize="20" fontWeight="semibold">
                    {city}
                    <Text fontWeight="medium" fontSize="16" color="dark.info" pt="2">
                      {country}
                    </Text>
                </Heading>
                <Image src={imgFlag} my="auto" alt={`${country} flag`} />
            </Flex>
        </Flex>
    )
}