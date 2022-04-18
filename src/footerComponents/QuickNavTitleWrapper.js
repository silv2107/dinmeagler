import QuickLinksTitle from "./QuickLinksTitle";
import QuickNav from "./QuickNav";
import "./QuickNavTitleWrapper.scss";

const QuickNavTitleWrapper = () => {
    return ( 
        <section className="quickNavTitleWrapper">
            <QuickLinksTitle/>
            <QuickNav/>
        </section>
     );
}
 
export default QuickNavTitleWrapper;