import { Flex, Box, Heading, Text, Image, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            backgroundImage="/images/skyBackground.svg"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            justify="space-between"
            px={["4", "20"]}
            pt={["0","20"]}
        >
            <Box py={['8', '0']}>
                <Heading color="light.headings" fontWeight="medium" fontSize={["20", "30"]} textShadow="3px 2px black" mb="4">
                    5 Continentes,
                    <Text>infinitas possibilidades.</Text>
                </Heading>
                <Text as="span" color="light.info" fontSize={["14","20"]}>
                    Chegou a hora de tirar do papel a viagem que você
                    <Text display={["inline", 'inherit']}> sempre sonhou.</Text>
                </Text>
            </Box>
            {
                isWideVersion && ( <Image src="/images/airplane.svg" alt="Avião" mb={-8} />)
            }
        </Flex>
    )
}