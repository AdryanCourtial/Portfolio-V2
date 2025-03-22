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
        image: "/backend-img.webp",
        competences: [
            {
                image: "/icon-nuxt.png",
                name: "Nuxt"
            },
            {
                image: "/nexticon.png",
                name: "NextJS"
            }
        ]
    },
    {
        id: "Frontend",
        image: "/frontend.png",
        competences: [
            {
                image: "/JavaScript-logo.png",
                name: "Javascript"
            }
        ]

    },
    {
        id: "Outils",
        image: "/outils.png",
        competences: [
        ]
    }
]