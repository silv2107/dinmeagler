import HeroButton from "./HeroButton";
import HeroSearch from "./HeroSearch";
import { navigate } from "@reach/router";
import "./HeroBackground.scss";


const SearchForm = () => {
    function filteredList(event){
        event.preventDefault();
        if(event.target.bolig.value.length !== 0) {
            navigate(`/propertylist/${event.target.bolig.value}`)
        }else {
            return;
        }

    }
    return ( 
    <form className="searchField__main" onSubmit={filteredList}>
        <HeroSearch/>
        <HeroButton text="Søg" marginTop="18.2px"/>
    </form>
        
     );
}
 
export default SearchForm;