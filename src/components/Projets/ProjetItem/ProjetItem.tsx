"use client"

import { ConfigProjetInterface } from "../Projet.config"
import "./ProjetItem.css"

interface Props {
    data: ConfigProjetInterface
}

const ProjetItem: React.FC<Props> = ({ data }) => {
    return (
        <div className="container_project bg-black-light text-white">
            <div className="col-1">
                <div style={{ backgroundImage: `url(${data.image})` }} className="image_container" />
            </div>
            <div className="col-2-top">
                <div className="h-fit font-bold">
                    <h3>{data.title}</h3>
                </div>
                <div className="h-full italic text-sm">
                    <p>{data.description}</p>
                </div>
            </div>
            <div className="col-2-middle">

            </div>
        </div>
    )
}

export default ProjetItem