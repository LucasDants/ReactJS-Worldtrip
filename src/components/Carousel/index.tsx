
import { Image, Box } from "@chakra-ui/react";
import { SwiperSlide, Swiper } from "swiper/react";

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { CarouselItem } from "./CarouselItem";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function Carousel() {
    return (
        <Box my="50" mx={["2","20"]}>
            <Swiper
                className="mySwiper"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                loop={true}
                navigation={true}
                pagination={true}
            >
                <SwiperSlide>
                    <CarouselItem continent="europe" imageUrl="/images/continents/europe.png" title="Europa" subtitle="O continente mais antigo do mundo." />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselItem continent="america" imageUrl="/images/southamerica.jpg" title="América" subtitle="O novo mundo." />
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}