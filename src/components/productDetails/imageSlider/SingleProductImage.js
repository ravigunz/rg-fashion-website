import React from "react";
import ReactImageMagnify from "react-image-magnify";

export default function SingleProductImage({watchImg300, watchImg1200}) {
  return (
    <ReactImageMagnify
    enlargedImageContainerStyle={{}}
    enlargedImagePosition="over"
      {...{
        smallImage: {
          alt: "Wristwatch by Ted Baker London",
          isFluidWidth: true,
          src: watchImg300,
        },
        largeImage: {
          src: watchImg1200,
          width: 1200,
          height: 1600,
        },
      }}
    />
  );
}
