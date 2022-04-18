import { Link } from "@reach/router";
import "./AgentsProfile.scss";


const AgentProfile = ({ img, title, name }) => {
    return ( 
        <div className="agentProfileWrapper">
            <div className="profileImageContainer">
                <img src={img} alt="profile"/>
            </div>
            <h3>{name}</h3>
            <p>{title}</p>
            <div className="linkContainer">
                <Link to="/"><img src="/svg/email3.svg" alt="email"/></Link>
                <Link to="/"><img src="/svg/linkedin.svg" alt="linkedin"/></Link>
            </div>
        </div>
     );
}
 
export default AgentProfile;