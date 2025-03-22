"use client";

import { useAtom } from "jotai";
import { ConfigCarouselInterface } from "../Carousel.config";
import { contextSelectionedAtom } from "@/src/atom/CarouselCompétences";


interface Props {
    data: ConfigCarouselInterface
}

const ItemHeaderCarousel: React.FC<Props> = ({ data }) => {

    const [contextSelectioned, setContextSelectioned] = useAtom(contextSelectionedAtom)

    return (
        <div className="h-full aspect-square bg-red-main justify-center flex-col items-center"
        onClick={() => {
            setContextSelectioned(data)
            console.log(contextSelectioned.id)
        }}
        >
            <div className="h-[80%] aspect-auto">
                <img src={data.image} alt="SAlut" className="h-full m-auto" />
            </div>
            <div className="text-center flex-1 text-white flex justify-center items-center">
                <p>{data.id}</p>
            </div>
        </div>
    )
}

export default ItemHeaderCarousel