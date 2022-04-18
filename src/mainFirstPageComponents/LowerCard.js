import "./LowerCard.scss";

const LowerCards = ({energylabel, rooms, color, size, price}) => {
    return ( 
        <article className="details">
            <div className="details__energyRooms">
                <div className="energy" style={{backgroundColor:color}}>{energylabel}</div>
                <p>{rooms} værelser • <span>{size}m²</span></p>
            </div>
            <p className="details__prise">Kr. {parseInt(price).toLocaleString()}</p>
        </article>
     );
}
 
export default LowerCards;