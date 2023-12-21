import Lights from '../assests/paris.jpg';
// import Lights2 from '../assests/paris2.jpg';
import Lights3 from '../assests/paris3.jpg';
import DestinationData from "./DestinationData";
import "./DestinationStyle.css";
import England from "../assests/england.webp";
import England1 from "../assests/eng2.jpg";
const Destination =()=>{
    return(
        <div className="destination">
            <h1>POPULAR DESTINATION</h1>
            <h4>Tours give you the opportunity to see a lot,within a time frame</h4>
        <DestinationData
        className="first-des"
        heading="The City Of Lights-Paris,France"
        text="Located in the north-central part of France on the river Seine, Paris is the country's cosmopolitan capital. The City of Love, as people call it, is said to be one of the most beautiful and romantic cities brimming with culture, art, fashion, food, and history. Home to some of the most popular iconic monuments and museums, Paris consists of a large part along the Seine designated as a UNESCO World Heritage Site. One of the most significant art repositories in the world, Paris harbors artistic lineage under Renoir, Rodin, Picasso, Monet, and Van Gogh. One of the greatest adobe of exceptional impressionist collections and the modern and contemporary art, the Louvre and several other small museums in the city showcase collections in every genre thinkable. Iconic wrought-iron spire of the Eiffel Tower, the Champs-Élysées,the Arc de Triomphe, the regal Notre Dame cathedral, lamp-lit bridges spanning the Seine, and art nouveau cafes spilling onto wicker-chair-lined terraces add to the scenic vibe of the city."
        img1={Lights}
        img2={Lights3}
        />
        <DestinationData
        className="first-des-reverse"
        heading="The heritage of England"
        text="London is the capital city of the United Kingdom and is located in the southeastern part of England. Situated on the River Thames, London is a global metropolis and one of the most visited cities in the world. London is a vibrant and diverse city, offering a multicultural atmosphere and a melting pot of different cuisines, languages, and customs.

        It is a city rich in history and culture, with iconic landmarks that have become symbols of the city and the entire country. London is also known for its world-class museums and art galleries, such as the British Museum, the Victoria and Albert Museum, and the National Gallery. These institutions house impressive collections, including ancient artifacts, masterpieces by renowned artists, and exhibits that cover a wide range of subjects.
        
        The city has a vibrant culture and a vivid culinary scene because of its multicultural status. Visitors can indulge in diverse culinary experiences, explore various neighborhoods like Chinatown or Brick Lane for international flavors, or enjoy the traditional British pub culture. The city's afternoon tea culture is worth exploring through its myriad Instagram-worthy tearooms, as well."
        img1={England}
        img2={England1}
        />
        </div>
    )
}
export default Destination;