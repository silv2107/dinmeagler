import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../footerComponents/Footer";
import Hero from "../mainAllPropertiesComponents/Hero";
import PropertyItems from "../mainAllPropertiesComponents/PropertyItems";


const PropertyList = ({ searchParams }) => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    return ( 
        <section style={{backgroundColor:"#F8F8FB"}}>
            <Header/>
            <main>
                <Hero text="Boliger til salg"/>
                <PropertyItems search={searchParams}/>
            </main>
            <Footer/>
        </section>
     );
}
 
export default PropertyList;