import "./AgentForm.scss";
import HeroButton from "../components/HeroButton";
import CheckBox from "../components/CheckBox";

const AgentForm = ( { name, display } ) => {
    window.scroll(0,0)
    function consoleLog(event){
        event.preventDefault()
        const properties = event.target;
        const name = properties.name.value;
        const email = properties.email.value;
        const subject = properties.subject.value;
        const describe = properties.describe.value;
        console.log(properties);

        //validation
        if(name.length > 4 && subject.length > 10 ) {
            console.log(name);
            console.log(subject);
            console.log(describe);
            console.log(email);
        }        
    }
    return ( 
        <form onSubmit={consoleLog} className="formAgent">
            {name ? <h4>Kontakt {name}</h4> : null}            
            <div className="nameEmailWrapper">
                <div className="name">
                    <label  className="forLabel" htmlFor="name">Navn</label>
                    <input  className="forInput" type="text" id="name" placeholder="Indtast navn" />
                </div>
                <div className="email">
                    <label  className="forLabel"htmlFor="email">Email</label>
                    <input  className="forInput" type="email" id="email" placeholder="Indtast email" required/>
                </div>
            </div>
            <div className="subjectWrapper">
                <label className="forLabel" htmlFor="subject">Emne</label>
                <input className="forInput"  type="text" id="subject" placeholder="Hvad drejer din henvendelse sig om?" />
            </div>
            <div >
                <label className="forLabel" htmlFor="describe">Besked</label>
                <textarea className="forInput describe"  name="describe" id="describe" rows="10" placeholder="Skriv din besked her"></textarea>
            </div>
            <CheckBox visible={display}/>
            <div className="describe">
                <HeroButton text="Send besked" padding="20px"/>
            </div>
        </form>
     );
}
 
export default AgentForm;