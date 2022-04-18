import Header from "../components/Header";
import Footer from "../footerComponents/Footer";
import Hero from "../mainAllPropertiesComponents/Hero";
import "./ContactUs.scss";
import AgentForm from "../agentDetails/AgentForm";
import ContactInformation from "../contactUs.js/ContactInformation";

const ContactUs = () => {
    return ( 
        <section>
            <Header/>
            <Hero text="Kontakt os"/>
            <main className="contactMain">
                <section className="contactPresentation">
                    <h3>Vi sidder klar til at besvare dine spørgsmål</h3>
                    <p>Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>
                </section>
                <div className="contactWrapper">
                    <div className="contactFormContainer">
                        <AgentForm display="flex"/>
                    </div>
                    <div className="contactPageInfoWrapper">
                        <ContactInformation icon="./svg/phoneIcon.svg" description="phone" title="Ring til os" text="+45 7070 4000"/>
                        <ContactInformation icon="./svg/emailIcon.svg" description="mail" title="send en mail" text="4000@dinmaegler.dk"/>
                        <ContactInformation icon="./svg/maps2.svg" description="map" title="Besøg butikken" text="Stændertorvet 78," city="4000 Roskilde"/>
                    </div>
                </div>
            </main>
            <div style={{marginTop:"100px"}}><img style={{display:"block"}}  src="./img/location.png" alt="location" /></div>
            <Footer marginTop={0}/>
        </section>
     );
}
 
export default ContactUs;