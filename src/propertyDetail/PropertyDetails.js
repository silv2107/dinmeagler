import "./PropertyDetails.scss";

export const FirstColumnInfo = ({ livingspace, lotsize, rooms }) => {
    return (
        <div className="firstColumnInfo columns"> 
            <div className="rowWrapper">
                <p className="row1 rows">Sagsnummer: </p>
                <p>-</p>
            </div>
            <div className="rowWrapper">
                <p className="row2 rows">Boligareal: </p>
                <p>{livingspace} m²</p>
            </div>
            <div className="rowWrapper">
                <p className="row3 rows">Grundareal: </p>
                <p>{lotsize} m²</p>
            </div>
            <div className="rowWrapper">
                <p className="row4 rows">Rum/værelser: </p>
                <p>{rooms}</p>
            </div>
            <div className="rowWrapper">
                <p className="row5 rows">Antal Plan: </p>
                <p>-</p>
            </div>
        </div>
     );
}
 
export const SecondColumnInfo = ({  built, remodel, energylabel }) => {
    return ( 
        <div className="secondColumnInfo columns"> 
            <div className="rowWrapper">
                <p className="row1 rows">Kælder: </p>
                <p>-</p>
            </div>
            <div className="rowWrapper">
                <p className="row2 rows">Byggeår: </p>
                <p>{built}</p>
            </div>
            <div className="rowWrapper">
                <p className="row3 rows">Ombygget: </p>
                <p>{remodel}</p>
            </div>
            <div className="rowWrapper">
                <p className="row4 rows">Energimærke: </p>
                <p>{energylabel}</p>
            </div>
        </div>
     );
}
 

export const ThirdColumnInfo = ({ payment, gross, netto, cost }) => {
    return ( 
        <div className="thirdColumnInfo columns"> 
            <div className="rowWrapper">
                <p className="row1 rows">Udbetaling: </p>
                <p>{parseInt(payment).toLocaleString()}</p>
            </div>
            <div className="rowWrapper">
                <p className="row2 rows">Brutto ex ejerudgift: </p>
                <p>{parseInt(gross).toLocaleString()}</p>
            </div>
            <div className="rowWrapper">
                <p className="row3 rows">Netto ex ejerudgift: </p>
                <p>{parseInt(netto).toLocaleString()}</p>
            </div>
            <div className="rowWrapper">
                <p className="row4 rows">Ejerudgift: </p>
                <p>{parseInt(cost).toLocaleString()}</p>
            </div>
        </div>
     );
}
 
