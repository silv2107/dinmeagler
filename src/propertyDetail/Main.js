import "./Mail.scss";
import Address from "./Address";
import Icon from "./Icon";
import MainImg from "./MainImg";
import Price from "./Price";
import { useParams } from "@reach/router";
import axios from "axios";
import Spinner from "../mainFirstPageComponents/Spinner";
import { useEffect, useState } from "react";
import { FirstColumnInfo, SecondColumnInfo, ThirdColumnInfo } from "./PropertyDetails";
import Description from "./Description";
import Responsible from "./Resposible";
import { Link } from "@reach/router";

function renderContent(content){
    const image = content.images[0].url;
    const street = content.adress1;
    const postal = content.postalcode;
    const city = content.city;
    const price = content.price;
    const livingspace = content.livingspace;
    const lotsize = content.lotsize;
    const rooms = content.rooms;
    const built = content.built;
    const remodel = content.remodel;
    const energylabel = content.energylabel;
    const payment = content.payment;
    const gross = content.gross;
    const netto = content.netto;
    const cost = content.cost;
    const description = content.description;
    const agent = content.agent.image.url;
    const name = content.agent.name;
    const title = content.agent.title;
    const phone = content.agent.phone;
    const email = content.agent.email;
    const agentId = content.agent.id;
    

    console.log(content);
    return (
        <>
            <MainImg img={image}/>
            <div className="adIconPrice">
                <Address street={street} postal={postal} city={city}/>
                <Icon/>
                <Price price={price}/>
            </div> 
            <div className="infoDetails">
                <FirstColumnInfo livingspace={livingspace} lotsize={lotsize} rooms={rooms}/>
                <SecondColumnInfo built={built} remodel={remodel} energylabel={energylabel}/>
                <ThirdColumnInfo payment={payment} gross={gross} netto={netto} cost={cost}/>
            </div>
            <div className="toPartResponsible">
                <Description description={description}/>
                <div className="responsibleContainer">
                    <article className="responsibleWrapper">
                        <h3 className="title">Ansvarlige mægler</h3>
                        <Link to={`/agentdetails/${agentId}`} style={{textDecoration:"none"}}>
                            <Responsible border="#D3DEE8 1px solid" agent={agent} name={name} title={title} phone={phone} email={email}/>
                        </Link>
                    </article>
                </div>
            </div>
            

        </> 
    );
}

const Main = () => {
    window.scroll(0,0)
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);

    
    useEffect(() => {
        axios.get(`https://dinmaegler.herokuapp.com/homes/${id}`)
        .then(response => {
            setContent(response.data)
            
            setLoading(false);
            }
        )
    },[id]);
    return loading ? <h3><Spinner/></h3> : ( 
        <main >
            {renderContent(content)}
        </main>
     );
}
 
export default Main;