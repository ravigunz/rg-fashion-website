import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SliderComponent from "../../../components/home/SliderComponent";

const itemList = [
  "https://radikadilanka.com/rdfashion/static/media/Yellow and White Fashion Facebook Cover.1e91a4ae.jpg",
  "https://radikadilanka.com/rdfashion/static/media/Yellow and White Fashion Facebook Cover2.7d37715a.jpg",
  "https://radikadilanka.com/rdfashion/static/media/Yellow_and_White_Fashion_Facebook_Cover3.3d57c154.jpg",
];

export default function CarouselLayout() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={28}
      totalSlides={3}
    >
      <Slider>
        {itemList.map((val, key) => (
          <Slide key={key} index={key}>
            <SliderComponent image={val} isButtonVisible={key % 2 === 0} />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
}
