import mango from "../images/Mangos_-_single_and_halved.jpg";
import "../sass/card.scss";


const Card = (props)=>{

    return(
        <div className="card">
            <img src={mango} alt=" fruit " />
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    )

}

export default Card;