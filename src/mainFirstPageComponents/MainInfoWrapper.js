import MainInfo from "./MainInfo";
import "./MainInfoWrapper.scss";

const MainInfoWrapper = () => {
    return ( 
        <article className="infoWrapper">
            <MainInfo icon="/svg/salgstjek.svg" title="Bestil et salgstjek" text="Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig." name="salgstjek"/>
            <MainInfo icon="/svg/maps.svg" title="74 butikker" text="Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark." name="maps"/>
            <MainInfo icon="/svg/kartotek.svg" title="Tilmeld køberkartotek" text="Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret." name="kartotek"/>
        </article>
     );
}
 
export default MainInfoWrapper;