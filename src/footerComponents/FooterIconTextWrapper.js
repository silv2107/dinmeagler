import FooterIconText from "./FooterIconText";
import "./FooterIconTextWrapper.scss";


const FooterIconTextWrapper = () => {
    return ( 
        <section className="footerIconTextWrapper">
            <FooterIconText icon="/svg/telephone.svg" description="telephone" info="Ring til os" text="+45 7070 4000"/>
            <FooterIconText icon="/svg/email2.svg" description="email" info="Send en mail" text="4000@dinmaegler.com"/>
            <FooterIconText icon="/svg/maps2.svg" description="map" info="Butik" text="Stændertorvet 78, 4000 Roskilde"/>
        </section>
     );
}
 
export default FooterIconTextWrapper;