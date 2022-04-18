import "./CheckBox.scss";

const CheckBox = ({ visible }) => {
    return ( 
        <div className="checkBoxContainer" style={{display:visible}}>
            <input id="checkbox" type="checkbox" />
            <label className="checkBoxLabel" htmlFor="checkbox">Jeg vil gerne modtage Din Mæglers nyhedsbrev.</label>
        </div>
     );
}
 
export default CheckBox;