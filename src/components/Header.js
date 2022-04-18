import Contactlogin from "./Contactlogin";
import "./Header.scss";
import LogoNav from "./LogoNav";

const Header = () => {
    return ( 
        <header className="headerWrap">
            <Contactlogin/>
            <LogoNav/>
        </header>
     );
}
 
export default Header;