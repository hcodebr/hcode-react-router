import { useParams, useSearchParams } from "react-router-dom";
import './model.scss';

const Model = () => {

    const params = useParams(); // Utilizando a barra na URL / -> Parâmetro
    const [query] = useSearchParams(); // Utilizando o ? -> Search param

    const modelName = query.get("name");
    const modelImage = query.get("image");

    return (
        <section id="model">
            <h2>{modelName && modelName} {params.modelId && `(ID ${params.modelId})`}</h2>
            <img src={require(`../../assets/images/${modelImage && modelImage}`)} alt={modelName! && modelName} />
        </section>
    )

}

export default Model;