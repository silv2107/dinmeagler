import "./MainForSale.scss";

const MainForSale = ({icon, number, text}) => {
    return ( 
        <article className="forSale">
            <div className="forSale__imgDiv">
                <img src={icon} alt="For sale icon"/>
            </div>
            <div className="forSale__textDiv">
                <p>{number}</p>
                <p className="text">{text}</p>
            </div>
        </article>
     );
}
 
export default MainForSale;