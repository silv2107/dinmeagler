import { useEffect } from 'react';
import Header from '../components/Header';
import HeroBackground from '../components/HeroBackground';
import Footer from '../footerComponents/Footer';
import AllPropertyWrapper from '../mainFirstPageComponents/AllPropertyWrapper';
import Employees from '../mainFirstPageComponents/Employees';
import MainFirstWrapper from '../mainFirstPageComponents/MainFirstWrapper';
import MainInfoWrapper from '../mainFirstPageComponents/MainInfoWrapper';
import "./Home.scss";
import { Link } from '@reach/router';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    return ( 
        <section className="homePageWrapper">
            <Header/>
            <HeroBackground/>
            <main>
                <MainFirstWrapper/>
                <MainInfoWrapper/>            
                <AllPropertyWrapper/>
                <div className="subscribeWrapper">
                    <div className="subscribeWrapper__container">
                        <h2>Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</h2>
                        <form className="subscribeWrapper__form">
                            <input type="email" placeholder="Indtast din email addresse"/>
                            <button><img src="/svg/arrow.svg" alt="arrow" /></button>
                        </form>
                    </div>
                </div>
                <section className="employeeWrapper">
                    <h2 className="employeeWrapper__title">Mød vores engagerede medarbejdere</h2>
                    <p className="employeeWrapper__text">Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>
                    <div>
                        <Employees/>
                    </div>
                    <article className="listAgentsWrapper">
                        <Link to="/agents" className="listAgentsWrapper__link">
                            Se alle mæglere
                        </Link>
                    </article>    
                </section>
            </main>
            <Footer/>
        </section>
     );
}
 
export default Home;