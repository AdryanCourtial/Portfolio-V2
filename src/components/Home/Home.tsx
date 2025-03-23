import Carousel from "../Carousel/Carousel"
import PinsCompetences from "../PinsCompetences.tsx/PinsCompetences"
import "./Home.css"

const Home = () => {
    return (
        <div className="block block-content">
            <div className="h-screen w-screen bg-grey-light">
                <div>
                    <p className="absolute font-medium text-black-light top-[20%] italic left-[15%] titre_poste animation_slide_to_right"> 
                        Developper Full Stack
                    </p>
                </div>
                <div className="absolute left-0 bottom-0 w-[80%] aspect-auto banner animation_slide_to_right">
                    <p className="absolute top-[50%] w-[40%] left-[10%] text-white -translate-y-[70%] animation_slide_to_right">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus vel autem a, eum obcaecati totam inventore ducimus excepturi fuga reiciendis voluptatem facere recusandae. Optio quaerat obcaecati a similique fugit! 
                    </p>
                    <img src="/PresentationBanner.png" className="w-full h-full" />
                </div>
                <div className="relative left-0 top-[2%] w-[15%] min-w-[175px] page_number-1 animation_slide_to_right">
                    <img src="/page-1.png" className="h-[100%] w-auto aspect-auto" />
                </div>
                <div className="absolute top-[50%] right-0 w-[10%] aspect-auto -translate-y-[50%] ">
                    <img src="/Polygon1.png" />
                </div>
                    
                <div>
                    <p className="absolute font-extrabold text-black-light top-[10%] italic right-[8%] title_name animation_slide_to_right"> 
                        ADRYAN <br /> COURTIAL
                    </p>
                </div>
                <div className="absolute bg-black-dark rounded-[10px] border-blue-main border-[5px] text-white px-[1.2rem] py-2 w-[15%] flex flex-row justify-center left-[5%] top-[50%] cursor-pointer animation_exitation min-w-[200px]">
                    <a className="w-full h-full text-center">
                        Contacter-moi !
                    </a>
                </div>
                <div className="">
                    <div className="absolute -z-40 left-0 bottom-[2%] aspect-auto w-[35%] animation_font">
                        <img src="/Rectangle4.png" />
                    </div>
                    <div className="absolute -z-40 aspect-auto w-[40%] right-50 bottom-0 animation_font" >
                        <img src="/Rectangle5.png" />    
                    </div>
                </div>
            </div>
            <div className="h-screen w-screen bg-grey-light pt-[4rem]">
                <div className="w-full h-[30vh]">
                    <Carousel />
                </div>
                <div className="grid grid-cols-3 gap-2 place-items-center justify-items-center px-2 py-6">
                    <PinsCompetences />
                </div>
            </div>
        </div>
    )
}

export default Home