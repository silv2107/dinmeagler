import "./FooterInfoWrapper.scss";
import FooterSingleText from "./FooterSingleText";
import FooterIconTextWrapper from "./FooterIconTextWrapper";

const FooterInfoWrapper = () => {
    return ( 
        <article className="footerInfoWrapper">
            <FooterIconTextWrapper/>
            <FooterSingleText/>
        </article>
     );
}
 
export default FooterInfoWrapper;