import axios from "axios";
import AgentProfile from "../agents/AgentProfile";
import Spinner from "./Spinner";
import { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./Employee.scss";

const Employee = () => {
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState();
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    
    useEffect(() => {
        axios.get("https://dinmaegler.herokuapp.com/agents")
            .then(response => {
                const num = Math.floor(Math.random() * response.data.length);
                setImage(response.data[num].image.url)
                setName(response.data[num].name)
                setId(response.data[num].id)
                setTitle(response.data[num].title)
                console.log(response.data);
                setLoading(false)                

            })

    }, []);


    return loading ? <h3><Spinner/></h3> : ( 
        <Link to={`/agentdetails/${id}`} className="oneAgent">
            <AgentProfile img={image} title={title} name={name}/>  
        </Link>
     );
}
 
export default Employee;