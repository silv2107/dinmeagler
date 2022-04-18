import "./Address.scss";
const Address = ({ street, postal, city }) => {
    return (
        <article className="address"> 
            <p>
                {street}
            </p>
            <p>
                {postal } {city}
            </p>
        </article>
     );
}
 
export default Address;