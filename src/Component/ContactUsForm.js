import "./ContactUsFormStyles.css";
function ContactForm(){
    return(
        <div className="from-container">
            <h1>Send a Message to us!</h1>
            <form>
                <input placeholder="Name" required/>
                <input placeholder="Email" required/>
                <input placeholder="Subject" />
                <textarea placeholder="Message" rows="4"/>
                <button>Send Message</button>
            </form>
        </div>

    )
}
export default ContactForm;