import "./MainInfo.scss";

const MainInfo = ({ icon, title, text, name }) => {
    return ( 
        <article className="info">
            <div className="info__imgBox">
                <img src={icon} alt={name}/>
            </div>
            <div className="info__description">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </article>
     );
}
 
export default MainInfo;