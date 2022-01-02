import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps {
    imgUrl: string;
    children: string
}

export function TravelType({ children, imgUrl }: TravelTypeProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>
            {isWideVersion && <Image src={imgUrl} alt={children} m="auto" /> }
            <Text
                textAlign="center"
                fontWeight="semibold"
                fontSize="20"
                mt="2"

            >
            {!isWideVersion && (
                    <Text
                        as="span"
                        verticalAlign="baseline"
                        lineHeight="1.5"
                        color="highlight"
                        fontSize="50"
                    >. </Text>
            )}
            {children}
            </Text>
        </Box>
    )
}