import { Flex, Heading, Image } from "@chakra-ui/react";

export function ContinentBanner() {
    return (
        <Flex direction="column" position="relative">
            <Image src="/images/continents/europeBanner.png" alt="Continent" objectFit="cover" />
            <Heading
                color="light.headings"
                fontWeight="semibold"
                textShadow="3px 2px black"
                position="absolute"
                top={["50%", "unset"]}
                bottom={["unset", "8"]}
                left={["50%", "20"]}
                transform={['translate(-50%, -50%)', 'unset']}
            >
                Europa
            </Heading>
        </Flex>
    )
}