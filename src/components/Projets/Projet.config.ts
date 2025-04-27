export interface ConfigProjetInterface {
    title: string
    description: string
    competences: string[]
    image: string
}

export const ConfigProjet: ConfigProjetInterface[] = [
    {
        title: "Pole-Esport",
        description: "Je suis la Dataroom",
        competences: [
            "NestJs",
            "VueJs",
            "Css",
            "TypeScript"
        ],
        image: "/esport-project.png"
    },
    {
        title: "Nike app",
        description: "Je suis la Dataroom",
        competences: [
            "NestJs",
            "VueJs",
            "Css",
            "TypeScript"
        ],
        image: "/application-nike-snkrs.png"
    },
    {
        title: "Dataroom",
        description: "Je suis la Dataroom",
        competences: [
            "NestJs",
            "VueJs",
            "Css",
            "TypeScript"
        ],
        image: "/esport-project.png"
    }
]