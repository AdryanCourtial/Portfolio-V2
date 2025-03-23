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
            },
            {
                image: "/laravel.png",
                name: "Laravel"
            },
            {
                image: "/symfony.png",
                name: "Symfony"
            },
            {
                image: "/django.png",
                name: "Django"
            }
        ]
    },
    {
        id: "Frontend",
        image: "/frontend.png",
        competences: [
            {
                image: "/ts.png",
                name: "TypeScript"
            },
            {
                image: "/ReactJs.png",
                name: "React"
            },
            {
                image: "/vue.png",
                name: "VueJs"
            },
            {
                image: "/pinia.png",
                name: "Pinia"
            },
            {
                image: "/jotai.png",
                name: "Jotai"
            }
        ]

    },
    {
        id: "Outils",
        image: "/outils.png",
        competences: [
            {
                image: "/figma.png",
                name: "Figma"
            },
            {
                image: "/github.png",
                name: "Github"
            },
            {
                image: "/GoogleCloudConsole.png",
                name: "Google Cloud Console"
            }
        ]
    }
]