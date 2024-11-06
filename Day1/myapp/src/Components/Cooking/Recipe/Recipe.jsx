export default function Recipe(props){
    return(
        <section>      
            <h2>{props.name}</h2>
            <image src={props.image} height="200" width="200" alt={props.name}/>
            <h3>Ingredients</h3>
            {
                props.ingredients.map((ingredient,index)=>{
                    return(
                        <li key={index}>{ingredient}</li>
                    );
                })
            }
            <p>{props.instructions}</p>
        </section>
    );
}