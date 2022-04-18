import Employee from "./Employee";
import "./Employees.scss";

const repeatThree = [1,2,3]


const Employees = () => {
    return ( 
        <div className="threeProperties">
            {repeatThree.map(() => {
                return <Employee/>
            })}
        </div>
     );
}
 
export default Employees;