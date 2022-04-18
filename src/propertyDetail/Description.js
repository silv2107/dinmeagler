import "./Description.scss";

const Description = ({ description }) => {
    return ( 
        <article className="description">
            <h3>Beskrivelse</h3>
            <p>{description}</p>
        </article>
     );
}
 
export default Description;