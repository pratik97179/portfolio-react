import React, { useState } from "react";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.scss";
import { urlFor } from "../../client";

export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill
                onClick={prevSlide}
                className="arrow arrow-left"
            />
            {data.map((item, idx) => {
                return (
                    <img
                        src={urlFor(item)}
                        alt={item}
                        key={idx}
                        className={
                            slide === idx ? "slide" : "slide slide-hidden"
                        }
                    />
                );
            })}
            <BsArrowRightCircleFill
                onClick={nextSlide}
                className="arrow arrow-right"
            />
        </div>
    );
};

export default Carousel;
