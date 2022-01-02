import { SimpleGrid } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function TravelTypes() {
    return (
        <SimpleGrid columns={[2, 5]} mt={["4","20"]}>
            <TravelType imgUrl="/images/cocktail.svg">vida noturna</TravelType>
            <TravelType imgUrl="/images/surf.svg">praia</TravelType>
            <TravelType imgUrl="/images/building.svg">moderno</TravelType>
            <TravelType imgUrl="/images/museum.svg">clássico</TravelType>
            <TravelType imgUrl="/images/earth.svg">e mais...</TravelType>
        </SimpleGrid>
    )
}