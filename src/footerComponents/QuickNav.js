import "./QuickNav.scss";
import { Link } from "@reach/router";

const QuickNav = () => {
    return ( 
        <nav className="QuickNavWrapper">
            <ul className="QuickNavigation">
                <li className="QuickNavigation__item">
                    <Link to="/propertylist" className="QuickPrimaryNavigation__link">
                        Boliger til salg
                    </Link>
                </li>
                <li className="QuickNavigation__item">
                    <Link to="/agents" className="QuickPrimaryNavigation__link">
                        Mæglerne
                    </Link>
                </li>
                <li className="QuickNavigation__item">
                    <Link to="/contact" className="QuickPrimaryNavigation__link">
                        Kontakt
                    </Link>
                </li>             
                <li className="QuickNavigation__item">
                    <Link to="/login" className="QuickPrimaryNavigation__link">
                        Log ind/ bliv bruger
                    </Link>
                </li>             
            </ul>
        </nav>
     );
}
 
export default QuickNav;