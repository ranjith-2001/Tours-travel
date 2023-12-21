import Destination from "../Component/Destination";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import Trip from "../Component/Trip";
import Footer from "../Component/Footer";

function Home(){
    return(
        <>
        <Navbar/>
       <Hero 
       cName="hero"
       heroImg="https://images.unsplash.com/photo-1469423910081-3488183dd77e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       title="IT'S NOT ABOUT THE"
       title1="DESTINATION"
       title2="IT'S ABOUT THE"
       title3="JOURNEY"
       buttonText="TRAVEL PLAN"
       url="/"
       btnClass="show"
       />
       <Destination/>
       <Trip/>
       <Footer/>
       
       
        </>
    )

}
export default Home;