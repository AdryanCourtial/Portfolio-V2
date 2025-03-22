"use client";

import { useState } from "react"
import { ConfigCarousel } from "./Carousel.config";
import "./Carousel.css"
import ItemHeaderCarousel from "./ItemHeaderCarousel/ItemHeaderCarousel";

const Carousel = () => {

    const [indexToShow, SetIndexToShow] = useState<number>(0)

    return (
        <div className="w-full h-full flex justify-evenly bg-black-light">
            {ConfigCarousel.map((item, index) => (
                <ItemHeaderCarousel 
                data={item}
                key={index}
                />
            ))}
        </div>
    )
}

export default Carousel