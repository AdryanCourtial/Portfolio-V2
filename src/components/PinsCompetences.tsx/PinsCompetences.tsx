"use client";

import { useState } from "react";
import { ConfigCarousel, ConfigCarouselInterface } from "../Carousel/Carousel.config";
import "./PinsCompetences.css"
import { useAtom } from "jotai";
import { contextSelectionedAtom } from "@/src/atom/CarouselCompétences";

const PinsCompetences: React.FC = () => {

    const [contentCarouselSelectioned] = useAtom(contextSelectionedAtom)

    return (
        <>
            {
                contentCarouselSelectioned.competences.map((value, index) => (
                    <div key={value.name} className="text-black bg-grey-dark relative min-w-[400px] w-fit rounded-full h-[100px] flex justify-center items-center pins py-1 overflow-hidden">
                        <div className="container-img h-full aspect-auto">
                            <img src={value.image} className="h-full w-full" alt="" />
                        </div>
                        <div className="container-name">
                            <p className="text-3xl font-bold">{value.name}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default PinsCompetences