import MainTitle from "./MainTitle";
import MainText from "./MainText";
import "./MainTitleTextSaleWrapper.scss";
import MainForSaleWrapper from "./MainForSaleWrapper";

const MainTiTeSaWrapper = () => {
    return ( 
        <section className="wrapperTiTeSe">
            <MainTitle/>
            <MainText/>
            <MainForSaleWrapper/>
        </section>
     );
}
 
export default MainTiTeSaWrapper;