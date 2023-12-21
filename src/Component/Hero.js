import { Link } from "react-router-dom";
import "./Hero.css";
function Hero(props){
    return(
        <>
        <div className={props.cName}>
            <img className="img" alt="HeroImg" src={props.heroImg}/>
        <div className="hero-text">
            <h2>{props.title}</h2>
                <h1> {props.title1}</h1>
            <h2>{props.title2}</h2>
                <h1>{props.title3}</h1>
    
                <Link to={props.url} className={props.btnClass}>{props.buttonText}</Link>
        </div>
        </div>
        </>
    )
}
export default Hero;