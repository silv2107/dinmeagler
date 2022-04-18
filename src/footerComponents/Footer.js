import CopyRight from "./CopyRight";
import TopGridContainer from "./TopGridContainer";

const Footer = ({ marginTop }) => {
    return ( 
        <footer>
            <TopGridContainer marginTop={marginTop}/>
            <CopyRight/>
        </footer>
     );
}
 
export default Footer;