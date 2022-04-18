import "./Contactlogin.scss";
import Login from "./Login";
import ShortContact from "./ShortContact";


 const Contactlogin = () => {
     return ( 
         <div className="contactLoginWrapper">
            <article className="contactLogin">
               <ShortContact/>
               <Login/>
            </article>
         </div>
      );
 }
  
 export default Contactlogin;