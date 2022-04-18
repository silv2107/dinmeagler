import "./FourProperties.scss";
import PropertyWrapper from "./PropertyWrapper";

const repeatFour = [1,2,3,4]

const FourProperties = () => {
    return ( 
        <div className="fourProperties">
            {repeatFour.map(() => {
            return <PropertyWrapper/>
            })}
        </div>
     );
}
 
export default FourProperties;