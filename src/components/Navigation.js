import React, { useContext } from "react";
import { Link } from "@reach/router";
import "./Navigation.scss";
import { LoginContextToken } from "../contexts/LoginContextToken";

const Navigation = () => {
    const {userData} = useContext(LoginContextToken);

    return ( 
        <nav className="navWrapper">
            <ul className="navigation">
                <li className="navigation__item">
                    <Link to="/propertylist" className="primaryNavigation__link">
                        Boliger til salg
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link to="/agents" className="primaryNavigation__link">
                        Mæglerne
                    </Link>
                </li>
                {userData.jwt ?
                (<li className="navigation__item">
                    <Link to="/favourites" className="primaryNavigation__link">
                        Favoritter
                    </Link>
                </li>) : null}
               
                <li className="navigation__item">
                    <Link to="/contact" className="primaryNavigation__link">
                        Kontakt
                    </Link>
                </li>             
            </ul>
        </nav>
     );
}
 
export default Navigation;