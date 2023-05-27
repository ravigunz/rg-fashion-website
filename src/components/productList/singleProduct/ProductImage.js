import React, { useState } from "react";

export default function ProductImage({ images}) {
  const [imageSrc, setImageSrc] = useState(images && images.length > 0 ? images[0] : '');

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img
        src={imageSrc}
        alt="product"
        style={{ width: "100%", height: "auto", borderRadius: "5px" }}
        onMouseOver={() => setImageSrc(images && images.length > 0 ? images[1] : '')}
        onMouseOut={() => setImageSrc(images && images.length > 0 ? images[0] : '')}
      />
    </div>
  );
}
