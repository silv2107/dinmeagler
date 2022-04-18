import "./Price.scss";

const Price = ({ price }) => {
    return ( 
        <p className="price">Kr. {parseInt(price).toLocaleString()}</p>
     );
}
 
export default Price;