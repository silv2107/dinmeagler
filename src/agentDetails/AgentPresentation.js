import "./AgentPresentation.scss";

const AgentPresentation = ( {name} ) => {
    return ( 
        <section className="presentation">
            <h4>Om {name}</h4>
            <p className="presentation__text1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
        </section>
     );
}
 
export default AgentPresentation;