import { ConfigProjet } from "./Projet.config"
import ProjetItem from "./ProjetItem/ProjetItem"

const Projet: React.FC = () => {
    return (
        <>
            <h1> Mes Projets</h1>
            <div className="w-full flex flex-col justify-center gap-2">
                {
                    ConfigProjet.map((value, index) => (

                        <ProjetItem 
                            data={value} 
                            key={index}
                        />

                    ))
                }
            </div>
        </>
    )
}

export default Projet