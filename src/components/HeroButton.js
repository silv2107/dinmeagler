import "./HeroButton.scss"

const HeroButton = ({ text, marginTop, padding }) => {
    return ( 
        <button type="submit" className="heroButton" style={{ marginTop:marginTop, padding:padding }}>
            {text} 
        </button>
     );
}
 
export default HeroButton;