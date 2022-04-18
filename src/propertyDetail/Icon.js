import "./Icon.scss";

const Icon = () => {
    return (
        <article className="icon"> 
           <button><img src="/svg/first.svg" alt="property images" /></button>
           <button><img src="/svg/second.svg" alt="plane"/></button>
           <button><img src="/svg/third.svg" alt="map"/></button>
           <button><img src="/svg/fourth.svg" alt="favorite"/></button>
        </article>
     );
}
 
export default Icon;