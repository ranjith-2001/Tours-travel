import "./TripsStyles.css";
import TripData from "./TripData";
import Trip1 from "../assests/m1.webp";
import Trip2 from "../assests/trip2.jpg";
import Trip3 from "../assests/trip3.jpg"
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
        <div className="tripcard">
            <TripData
            image={Trip1}
            heading="Maldives"
            text="The Maldives is an archipelagic state situated in the Indian Ocean known for its luxurious water villas. A tropical haven of white sand beaches, the Maldives is located in the south of Sri Lanka and is ideal for an adventure, honeymoon, or leisure holiday.Maldives is one of the most popular place in the world for the vaccation.

            ."
            />
            <TripData
            image={Trip2}
            heading="TajMahal"
            text="Taj Mahal, mausoleum complex in Agra, western Uttar Pradesh state, northern India. The Taj Mahal was built by the Mughal emperor Shah Jahān (reigned 1628–58) to immortalize his wife Mumtaz Mahal (“Chosen One of the Palace”), who died in childbirth in 1631, having been the emperor’s inseparable companion since their marriage in 1612."
            />
            <TripData
            image={Trip3}
            heading="Kerala"
            text="Kerala, a state situated on the tropical Malabar Coast of southwestern India, is one of the most popular tourist destinations in the country. Named as one of the ten paradises of the world by National Geographic Traveler, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters. Its unique culture and traditions, coupled with its varied demography, have made Kerala one of the most popular tourist destinations in the world."
            />


        </div>
        </div>
    )
}
export default Trip