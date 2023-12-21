import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import Trip from "../Component/Trip";
import ServiceImg from "../assests/services.png"
function Service(){
    return(
        <>
          <Navbar/>
       <Hero 
       cName=".hero-mid"
       heroImg={ServiceImg}
       title=""
       btnClass="hide"
       />
       <Trip/>
       <Footer/>
        </>
    )

}
export default Service;