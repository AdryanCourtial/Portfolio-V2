import { atom, useAtom } from "jotai";
import { ConfigCarousel, ConfigCarouselInterface } from "../components/Carousel/Carousel.config";

export const contextSelectionedAtom = atom<ConfigCarouselInterface>(ConfigCarousel[0])