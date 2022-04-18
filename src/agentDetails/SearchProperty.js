import "./SearchProperty.scss";
import { navigate } from "@reach/router";



const SearchProperty = () => {
    function filteredSearch(event){
        event.preventDefault();
        if(event.target.propertyId.value.length !== 0) {
            navigate(`/propertylist/${event.target.propertyId.value}`)
        }else {
            return;
        }
    }    
    return ( 
        <div className="searchPropertyWrapper">
            <h3>Search Property</h3>
            <form onSubmit={filteredSearch} className="searchPropertyWrapper__form">
                <div className="searchItems">
                    <input id="propertyId" type="search" placeholder=" Search"/>
                    <button><img src="/svg/searchProperty.svg"  alt="search" /></button>
                </div>
            </form>
        </div>
     );
}
 
export default SearchProperty;