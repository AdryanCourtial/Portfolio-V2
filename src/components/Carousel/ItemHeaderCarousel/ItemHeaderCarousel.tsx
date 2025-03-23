"use client";

import { useAtom } from "jotai";
import { ConfigCarouselInterface } from "../Carousel.config";
import { contextSelectionedAtom } from "@/src/atom/CarouselCompétences";
import './ItemHeaderCarousel.css'


interface Props {
    data: ConfigCarouselInterface
}

const ItemHeaderCarousel: React.FC<Props> = ({ data }) => {

    const [contextSelectioned, setContextSelectioned] = useAtom(contextSelectionedAtom)

    return (
        <div className="h-full aspect-square bg-red-main justify-center flex-col items-center cursor-pointer container-header"
        onClick={() => {
            setContextSelectioned(data)
            console.log(contextSelectioned.id)
        }}
        style={{
            filter: data.id === contextSelectioned.id ? "" : "grayscale(100%)"
        }}
        >
            <div className="h-[80%] aspect-auto img-header">
                <img src={data.image} alt="SAlut" className="h-full m-auto z-0" />
            </div>
            <div className="text-center flex-1 text-white flex justify-center items-center z-10">
                <p className="z-10">{data.id}</p>
            </div>
        </div>
    )
}

export default ItemHeaderCarousel