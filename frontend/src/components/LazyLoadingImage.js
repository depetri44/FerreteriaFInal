 import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../assets/images/logo.jpg";
const LazyLoadingImage = ({ src, alt, height, width, className }) => {
  return (
    <>
      <LazyLoadImage
        src={src}
        alt={alt}
        height={height}
        width={width}
        placeholderSrc={logo}
        className={`max-w-full object-covers object-center ${className}`}
      />
    </>
  );
}; 

export default LazyLoadingImage;
