import Header from "../components/Header";
import Footer from "../footerComponents/Footer";
import Hero from "../mainAllPropertiesComponents/Hero";
import "./Register.scss";


const Register = () => {
    return ( 
        <section>
            <Header/>
            <Hero text="Registrer dig"/>
            <main>
                <div className="registerUserWrapper">
                    <h3 className="registerUserWrapper__title">Opret bruger hos Din Mægler</h3>
                    <form className="registerUserWrapper__form">
                        <div className="inputWrapper">
                            <label className="inputLabel" htmlFor="name">Fulde navn</label> 
                            <input type="name" id="name" placeholder="Fulde navn" required/>
                        </div>
                        <div className="inputWrapper">
                            <label className="inputLabel" htmlFor="email">Email</label> 
                            <input type="email" id="email" placeholder="Email" required/>
                        </div>
                        <div className="inputWrapper">
                            <label className="inputLabel" htmlFor="password">Password</label> 
                            <input type="password" id="password" placeholder="Password" required/>
                        </div>
                        <div className="inputWrapper">
                            <label className="inputLabel" htmlFor="bekræft">Bekræft password</label> 
                            <input type="password" id="bekræft" placeholder="Bekræft password" required/>
                        </div>
                        
                        <button>Opret bruger</button> 
                    </form>
                </div>
            </main>
            <Footer/>
        </section>
     );
}
 
export default Register;