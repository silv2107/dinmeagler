import "./HeroSearch.scss";

const HeroSearch = () => {
    return ( 
        <article className="property">
            <label htmlFor="bolig">Hvad skal din næste bolig indeholde</label>
            <input type="text" id="bolig" name="bolig" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" />
        </article>
     );
}
 
export default HeroSearch;

// function ffunction(event){
//     console.log(event.target);
// }
// <form onSubmit={ffunction}>
//     HeroSearch
//     HeroButton
// </form>