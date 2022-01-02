import { Flex, IconButton, Image, Icon, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiChevronLeft } from 'react-icons/fi'

interface HeaderProps {
    hasBackButton?: boolean
}

export function Header({ hasBackButton = false }: HeaderProps) {
    const router = useRouter()

    return (
        <Flex
            as="header"
            w="100vw"
            maxW={1480}
            h="20"
            mx="auto"
            my="4"
            px={["15","20"]}
            align="center"
        >
            {hasBackButton && <IconButton icon={<Icon as={FiChevronLeft} />} variant="unstyled" fontSize="32" aria-label="Voltar" onClick={() => router.back()} /> }
            <Image src="/images/logo.svg" alt="World Trip" mx="auto"/>
            {hasBackButton && <Box width="40px"></Box>}
        </Flex>
    )
}