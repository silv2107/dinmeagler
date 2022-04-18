import "./TopGridContainer.scss";
import FooterTitleText from "./FooterTitleText";
import FooterInfoWrapper from "./FooterInfoWrapper";
import QuickNavTitleWrapper from "./QuickNavTitleWrapper";
import DMS from "./DMS";

const TopGridContainer = ({ marginTop }) => {
    return ( 
        <div style={{marginTop:marginTop}} className="topGridWrapper">
            <div className="LowerBackground"></div>
            <div className="topGridContainer">
                <article className="item1">
                    <FooterTitleText/>
                </article>
                <article className="item2">
                    <FooterInfoWrapper/>
                </article>
                <article className="item3">
                    <QuickNavTitleWrapper/>
                </article>
                <article className="item4">
                    <DMS/>
                </article>
            </div>
        </div>

     );
}
 
export default TopGridContainer;