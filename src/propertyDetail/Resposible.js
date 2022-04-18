import "./Responsible.scss";

const Responsible = ({ agent, name, title, phone, email, border }) => {
    return ( 
        <div className="profileWrapper" style={{border:border}}>
            <div className="profileImg">
                <img className="agent" src={agent} alt={name} />
                <div className="socialMedia">
                    <img src="/svg/social.svg" alt="social" />
                </div>
            </div>
            <div className="personalInfo">
                <div className="namePosition">
                    <h3>{name}</h3>
                    <p>{title}</p>
                </div>
                <div className="contactInfo">
                    <section>
                        <img src="/svg/call.svg" alt="phone" />
                        <p>{phone}</p>
                    </section>
                    <section>
                        <img src="/svg/plane.svg" alt="email" />
                        <p>{email}</p>
                    </section>
                </div>
            </div>
        </div>
               
     );
}
 
export default Responsible;