import { Box, Flex, Heading, Image, LinkBox, Text } from "@chakra-ui/react";
import Link from "next/link";

interface CarouselItemProps {
    continent: string
    imageUrl: string
    title: string
    subtitle: string
}

export function CarouselItem({continent, imageUrl, title, subtitle}: CarouselItemProps) {
    return (
        <Link href={`/continents/${continent}`} passHref>
            <LinkBox as="a">
               <Flex
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage={imageUrl}
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    py={["100", "200"]}
               >
                   <Box>
                        <Heading
                            fontSize={[24, 48]}
                            fontWeight="bold"
                            color="light.headings"
                            textAlign="center"
                        >
                            {title}
                        </Heading>
                        <Text
                            fontSize={[14, 24]}
                            fontWeight="bold"
                            mt="4"
                            color="light.info"
                        >
                        {subtitle}
                        </Text>
                   </Box>
               </Flex>
            </LinkBox>
        </Link>
    )
}