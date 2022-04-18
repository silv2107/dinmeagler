import "./MainImg.scss";
const MainImg = ({ img, description }) => {
    return ( 
        <div className="mainImg">
            <img src={img} alt={description}/>
        </div>
     );
}
 
export default MainImg;