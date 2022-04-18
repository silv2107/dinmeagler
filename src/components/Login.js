import "./Login.scss";
import { Link } from "@reach/router";
import { useContext } from "react";
import { LoginContextToken } from "../contexts/LoginContextToken";

const Login = () => {
    const { userData } = useContext(LoginContextToken)
    function logOut(){
        window.location.reload(true);
    }
    return ( 
        <article className="login">
            {userData.jwt ?
            <div className="login__link">
                <img src="/svg/login.svg" alt="logoutIcon" /> 
                <button onClick={logOut}>Log ud</button>
            </div> :

            <Link to="/login" className="login__link">
                <img src="/svg/login.svg" alt="loginIcon" /> 
                <p>Log ind</p>
            </Link>}
        </article>
     );
}
 
export default Login;