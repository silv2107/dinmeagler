import axios from "axios";
import AgentProfile from "../agents/AgentProfile";
import Header from "../components/Header";
import Footer from "../footerComponents/Footer";
import Hero from "../mainAllPropertiesComponents/Hero";
import Spinner from "../mainFirstPageComponents/Spinner";
import { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./Agents.scss";

const Agents = () => {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.get(`https://dinmaegler.herokuapp.com/agents`)
        .then(response => {
            setContent(response.data)
            setLoading(false)
            console.log(response.data);
        })
    }, []);

    return loading ? <h3><Spinner/></h3> :( 
        <section>
            <Header/>
            <Hero text="Medarbejder i Roskilde"/>
            <main className="agentsMain">
                {content.map(item=>{
                    return <Link className="linkAgent" to={`/agentdetails/${item.id}`}><AgentProfile img={item.image.url} name={item.name} title={item.title}/></Link>
                })}
            </main>
            <Footer/>
        </section>
     );
}
 
export default Agents;