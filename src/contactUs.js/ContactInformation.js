import "./ContactInformation.scss";

const ContactInformation = ({icon, description, title, text, city}) => {
    return ( 
        <div className="contactContainer">
            <img src={icon} alt={description} />
            <h4>{title}</h4>
            <p>{text}</p>
            <p>{city}</p>
        </div>
     );
}
 
export default ContactInformation;