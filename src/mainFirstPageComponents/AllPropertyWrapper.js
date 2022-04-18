import "./AllPropertyWrapper.scss";
import FourProperties from "./FourProperties";
import LinkProperty from "./LinkProperty";
import PropertyText from "./Propertytext";

const AllPropertyWrapper = () => {
    return ( 
        <section className="wrapperProperties">
            <PropertyText/>
            <FourProperties/>
            <LinkProperty/>
        </section>
     );
}
 
export default AllPropertyWrapper;