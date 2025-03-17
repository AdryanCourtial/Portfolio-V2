"use client";

import { ConfigCarouselInterface } from "../Carousel.config";

interface Props {
    data: ConfigCarouselInterface
}

const ItemHeaderCarousel: React.FC<Props> = ({ data }) => {
    return (
        <div className="h-full aspect-square bg-red-main flex-col justify-evenly items-center"
        onClick={() => alert("Changement de div")}
        >
            <img className="h-[80%]" src={data.image} alt="SAlut" />
            <p className="text-center flex-1 text-white">{data.id}</p>
        </div>
    )
}

export default ItemHeaderCarousel