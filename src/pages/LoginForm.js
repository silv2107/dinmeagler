import axios from "axios";
import { useContext, useState } from "react";
import Header from "../components/Header";
import { LoginContextToken } from "../contexts/LoginContextToken";
import Footer from "../footerComponents/Footer";
import Hero from "../mainAllPropertiesComponents/Hero";
import "./LoginForm.scss";
import { Link } from "@reach/router";


const LoginForm = () => {
    const {setUserData} = useContext(LoginContextToken);
    const [error, setError] = useState({boolean:false, message: ""});
    
    function removeError() {
        if(error.boolean){
            setError({boolean:false, message: ""})
        }
    }

    function loginFunction(event) {
        event.preventDefault();
        window.scrollTo(0,0)

        // email is the name of the id at the inputfield and value is what the user types in the inputfield
        console.log(event.target.email.value);

        const email = event.target.email.value;
        const password = event.target.password.value;
        
        axios.post("https://dinmaegler.herokuapp.com/auth/local", {
            identifier: email,
            password: password
        })

            .then(response => setUserData(response.data))
            .catch(function(err){
                const errorType = err.response.status;
                console.log(errorType);
                setError({boolean:true, message: errorType})
            });
    }

    return ( 
        <section>
            <Header/>
            <Hero text="Login"/>
            <main>
                <div className="loginFormWrapper">
                    <h3 className="loginFormWrapper__title">Log ind på din konto</h3>
                    <form className="loginFormWrapper__form" onSubmit={loginFunction}>
                        {error.boolean ? <h2>Du har en fejl {error.message}</h2> : null}
                        <div className="inputEmailWrapper inputing">
                            <label htmlFor="email">Email</label> 
                            <input onClick={removeError} type="email" id="email" placeholder="Email" required/>
                        </div>
                        <div className="inputPasswordWrapper inputing">
                            <label htmlFor="password">Password</label> 
                            <input onClick={removeError} type="password" id="password" placeholder="Password" required/>
                        </div>
                        
                        <button className="linkToHomePage">Log ind</button> 
                    </form>
                    <p className="loginFormWrapper__text1">Log ind med</p>
                    <div className="loginFormWrapper__socialMedia">
                        <button className="socialButton google">Google</button>
                        <button className="socialButton facebook">Facebook</button>
                        <button className="socialButton twitter">Twitter</button>
                    </div>
                    <p className="loginFormWrapper__text">Har du ikke en konto? <Link to="/register" className="registerLink">Opret bruger.</Link></p>
                </div>
            </main>
            <Footer/>
        </section>
     );
}
 
export default LoginForm;