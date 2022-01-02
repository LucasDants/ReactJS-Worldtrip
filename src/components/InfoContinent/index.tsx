import { Heading, Text } from "@chakra-ui/react";

interface InfoContinentProps {
    title: string
    subtitle: string
}

export function InfoContinent({title, subtitle}: InfoContinentProps) {
    return (
         <Heading
            color="highlight"
            textAlign="center"
            fontWeight="semibold"
            fontSize={["24","48"]}
          >
            {title}
            <Text color="dark.headings" fontSize={["18","24"]}>
              {subtitle}
            </Text>
          </Heading>
    )
}