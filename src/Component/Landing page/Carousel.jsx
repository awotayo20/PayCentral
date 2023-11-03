import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CarouselItems from "./CarouselItems";

export default function Carousel() {
  return (
    <>
      <div className="w-full h-[200px] bg-[#F1F3F4] flex items-center">
        <Splide
          options={{
            width: "100%",
            padding: "13vw",
            rewind: true,
            perPage: 1,
            autoplay: "play",
            speed: 500,
            arrows: false,
            drag: "free",
            start: 2,
          }}
          
        >
          <SplideSlide className="p-5">
            <CarouselItems />
          </SplideSlide>
          <SplideSlide>
            <CarouselItems />
          </SplideSlide>
          <SplideSlide>
            <CarouselItems />
          </SplideSlide>
          <SplideSlide>
            <CarouselItems />
          </SplideSlide>
          <SplideSlide>
            <CarouselItems />
          </SplideSlide>
          <SplideSlide>
            <CarouselItems />
          </SplideSlide>
          <SplideSlide>
            <CarouselItems />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
}
