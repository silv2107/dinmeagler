import "./UpperCard.scss";

const UpperCard = ({img, description, address, postalcode, city, type, gross}) => {
    return ( 
        <article className="upperCardBox">
            <div className="upperCardBox__imgBox"><img src={img} alt={description}/></div>
            <h3 className="upperCardBox__title">{address}</h3>
            <p className="upperCardBox__address">{postalcode} {city}</p>
            <p className="upperCardBox__tax"><span className="type">{type} • </span>Ejerudgift: { gross}</p>
        </article>
     );
}
 
export default UpperCard;