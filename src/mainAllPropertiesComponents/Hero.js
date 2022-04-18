import "./Hero.scss";

const Hero = ({ text }) => {
    return ( 
        <article className="hero">
            <h1>{text}</h1>
        </article>
     );
}
 
export default Hero;