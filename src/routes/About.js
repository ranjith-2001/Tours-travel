import AboutUs from "../Component/AboutUs";
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import AboutImg from "../assests/a2.jpg";



function About(){
    return(
        <>
         <Navbar/>
       <Hero 
       cName=".hero-mid"
       heroImg={AboutImg}
       title=""
       btnClass="hide"
       />
       <AboutUs/>
       <Footer/>
        </>
    )

}
export default About;