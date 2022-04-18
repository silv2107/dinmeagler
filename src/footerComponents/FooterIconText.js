import "./FooterIconText.scss";

const FooterIconText = ({ icon, description, info, text }) => {
    return ( 
        <article className="infoBox">
            <div className="infoBox__svg">
                <img src={icon} alt={description} />
            </div>
            <article className="infoBox__infoText">
                <p className="info">{info}</p>
                <p className="text">{text}</p>
            </article>
        </article>
     );
}
 
export default FooterIconText;