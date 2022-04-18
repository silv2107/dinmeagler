import { Link } from "@reach/router";
import "./Logo.scss"

const Logo = () => {
    return ( 
        <Link to="/"><img src="/img/dinmaegler.png" alt="logo" className="logo" /></Link>
     );
}
 
export default Logo;