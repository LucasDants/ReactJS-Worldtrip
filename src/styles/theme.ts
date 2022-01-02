import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
    colors: {
        highlight: "#FFBA08",
        dark: {
            headings: "#47585B",
            info: "#999999"
        },
        light: {
            headings: "#F5F8FA",
            info: "#DADADA"
        }
    },
    fonts: {
        body: 'Poppins',
        cards: 'Barlow',
    },
    styles: {
        global: {
            body: {
                bg: 'light.headings',
                color: 'dark.headings'
            }
        }
    }
})
