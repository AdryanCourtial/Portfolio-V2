export interface ConfigCarouselInterface {
    id: string
    image: string
    competences: {
        name: string,
        image: string
    }[]
}

export const ConfigCarousel: ConfigCarouselInterface[] = [
    {
        id: "Backend",
        image: "",
        competences: [
            {
                image: "",
                name: ""
            }   
        ]
    },
    {
        id: "Frontend",
        image: "",
        competences: [
            {
                image: "",
                name: ""
            }
        ]

    },
    {
        id: "Outils",
        image: "",
        competences: [
            {
                image: "",
                name: ""
            }
        ]
    }
]