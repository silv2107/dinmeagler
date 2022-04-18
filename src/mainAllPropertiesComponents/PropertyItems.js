import axios from "axios";
import "../mainFirstPageComponents/FourProperties.scss";
import { useState, useEffect } from "react";
import LowerCards from "../mainFirstPageComponents/LowerCard";
import Spinner from "../mainFirstPageComponents/Spinner";
import UpperCard from "../mainFirstPageComponents/UpperCard";
import { Link } from "@reach/router";
import "./PropertyItems.scss";


const PropertyItems = ({ search }) => {

    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);
    const [showSelected, setShowSelected] = useState([]);

    useEffect(() => {
        if(content.length > 0) {
            
            let array = content.filter(function(property){
                if (!search) {
                    return true;
                }
                let smallCityWord = property.city.toLowerCase();
                let smallPostalNr = property.postalcode.toString();
                let searchLowerCase = search.toLowerCase();


               if(smallCityWord.includes(searchLowerCase) || smallPostalNr.includes(searchLowerCase)) {
                   return true;
               }

               else{return false};
               
            });
            setShowSelected(array)
        }
    }, [search, content]);
    
    useEffect(() => {
        axios.get("https://dinmaegler.herokuapp.com/homes")
            .then(response => {
                setContent(response.data)
                setLoading(false)
            })
    },[]);
    return loading ? <h3><Spinner/></h3> : ( 
        <div className="fourProperties ">
            {showSelected.map(item => {
                const energy = item.energylabel;
                var id = item.id;
                let color = "";
                if(energy === "B") {
                    color = "yellow"
                }else if(energy === "C"){
                    color = "orange"
                }else if(energy === "D"){
                    color = "red"
                }else if(energy === "A"){
                    color = "green"
                }
                
                return      <Link to={`/propertydetail/${id}`} key={item.id} className="propertyItem">
                                <UpperCard key={item.id} img={item.images[0].url} description="property img" address={item.adress1} postalcode={item.postalcode} city={item.city} type={item.type} gross={item.gross}/>
                                <LowerCards energylabel={item.energylabel} color={color} rooms={item.rooms} size={item.livingspace} price={item.price}/>
                            </Link>
            })}
        </div>
        
     );
}
 
export default PropertyItems;