import Logo from "../components/Logo";
import "./FooterTitleText.scss";

const FooterTitleText = () => {
    return (
        <article className="footerTitleTextWrapper"> 
            <Logo/> 
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
       </article>
     );
}
 
export default FooterTitleText;