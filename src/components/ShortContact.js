import "./ShortContact.scss";

const ShortContact = () => {
    return ( 
        <article className="contact">
            <section>
                <img src="/svg/email.svg" alt="email" />
                <p className="contact__mail">4000@dinmaegler.com</p>
            </section>
            <section>
                <img src="/svg/phone.svg" alt="phone" />
                <p className="contact__phone">+45 7070 4000</p>
            </section>

        </article>
     );
}
 
export default ShortContact;