import axios from "axios";
import { useState, useEffect } from "react";
import LowerCards from "./LowerCard";
import "./PropertyWrapper.scss";
import UpperCard from "./UpperCard";
import Spinner from "./Spinner";
import { Link } from "@reach/router";

const PropertyWrapper = () => {
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState("");
    const [address, setAddress] = useState("");
    const [postalcode, setPostalcode] = useState("");
    const [city, setCity] = useState("");
    const [type, setType] = useState("");
    const [gross, setGross] = useState("");
    const [energylabel, setEnergylabel] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [rooms, setRooms] = useState("");
    const [id, setId] = useState();


    
    useEffect(() => {
        
        axios.get("https://dinmaegler.herokuapp.com/homes")
            .then(response => {
                const num = Math.floor(Math.random() * response.data.length);
                setImage(response.data[num].images[0].url)
                setAddress(response.data[num].adress1)
                setPostalcode(response.data[num].postalcode)
                setCity(response.data[num].city)
                setType(response.data[num].type)
                setGross(response.data[num].gross)
                setPrice(response.data[num].price)
                setSize(response.data[num].livingspace)
                setRooms(response.data[num].rooms)
                setId(response.data[num].id)
                setEnergylabel(response.data[num].energylabel)
                if(response.data[num].energylabel === "B") {
                    setColor("yellow")
                }else if(response.data[num].energylabel === "C"){
                    setColor("orange")
                }else if(response.data[num].energylabel === "D"){
                    setColor("red")
                }else if(response.data[num].energylabel === "A"){
                    setColor("green")
                }
                setLoading(false)                
            })
    },[]);

    
    

    return loading ? <h3><Spinner/></h3> : ( 
        <Link to={`/propertydetail/${id}`} className="propertyWrapper">
            <UpperCard img={image} address={address} postalcode={postalcode} city={city} type={type} gross={gross}/>
            <LowerCards energylabel={energylabel} color={color} rooms={rooms} size={size} price={price}/>
        </Link>
     );
}
 
export default PropertyWrapper;

