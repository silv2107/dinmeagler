import "./HeroBackground.scss";
import HeroDescription from "./HeroDescription";
import HeroTitle from "./HeroTitle";
import SearchForm from "./SearchForm";

const HeroBackground = () => {
    return ( 
        <div className="heroBackground">
            <HeroTitle/>
            <article className="searchField">
                <HeroDescription/>
                <section>
                    <SearchForm/>
                </section>
            </article>
        </div>
     );
}
 
export default HeroBackground;