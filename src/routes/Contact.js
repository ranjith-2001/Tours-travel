import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import ContactImg from "../assests/c2.jpg";
import ContactForm from "../Component/ContactUsForm";
function Contact(){
    return(
        <>
          <Navbar/>
       <Hero 
       cName=".hero-mid"
       heroImg={ContactImg}
       title=""
       btnClass="hide"
       />
       <ContactForm/>
       <Footer/>
        </>
    )

}
export default Contact;