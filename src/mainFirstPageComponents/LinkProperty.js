import { Link } from "@reach/router";
import "./LinkProperty.scss";

const LinkProperty = () => {
    return ( 
        <article className="propertyList">
            <Link to="/propertylist" className="propertyList__link">
                Se alle boliger
            </Link>
        </article>
     );
}
 
export default LinkProperty;