import "./MainForSaleWrapper.scss";
import MainForSale from "./MainForSale";

const MainForSaleWrapper = () => {
    return ( 
        <article className="forSaleWrapper">
            <MainForSale icon="/svg/sold.svg" number="4829" text="boliger solgt"/>
            <MainForSale icon="/svg/forsale.svg" number="158" text="boliger til salg"/>
        </article>
     );
}
 
export default MainForSaleWrapper;