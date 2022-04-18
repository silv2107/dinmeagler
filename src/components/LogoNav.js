import Logo from "./Logo";
import Navigation from "./Navigation";
import "./LogoNav.scss";

const LogoNav = () => {
    return (
        <div className="LogoNavWrapper"> 
            <article className="LogoNav">
                <Logo/>
                <Navigation/>
            </article>
        </div>
     );
}
 
export default LogoNav;