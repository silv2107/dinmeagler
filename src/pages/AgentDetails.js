import Header from "../components/Header";
import Footer from "../footerComponents/Footer";
import Hero from "../mainAllPropertiesComponents/Hero";
import Responsible from "../propertyDetail/Resposible";
import Spinner from "../mainFirstPageComponents/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";
import "../propertyDetail/Responsible.scss";
import AgentPresentation from "../agentDetails/AgentPresentation";
import AgentForm from "../agentDetails/AgentForm";
import "./AgentDetails.scss";
import SearchProperty from "../agentDetails/SearchProperty";
import BestProperty from "../agentDetails/BestProperty";


const AgentDetails = ({ id }) => {
    window.scroll(0,0)
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);

    
    useEffect(() => {
        axios.get(`https://dinmaegler.herokuapp.com/agents/${id}`)
        .then(response => {
            setContent(response.data)
            setLoading(false);
            }
        )
    },[id]);

    return loading ? <h3><Spinner/></h3> : ( 
        <section>
            <Header/>
            <Hero text="Kontakt en medarbejder"/>
            <main className="agentMain">
                <div className="aboutAgentWrapper">
                    <div className="responsibleWrapper">
                        <Responsible name={content.name} agent={content.image.url} title={content.title} phone={content.phone} email={content.email}/>
                    </div>
                    <AgentPresentation name={content.name}/>
                    <div className="agentFormContainer"><AgentForm display="none" name={content.name}/></div>
                </div>
                <div className="searchBestWrapper">
                    <SearchProperty/>
                    <BestProperty/>
                </div>
            </main>
            <Footer/>
        </section>
     );
}
 
export default AgentDetails;