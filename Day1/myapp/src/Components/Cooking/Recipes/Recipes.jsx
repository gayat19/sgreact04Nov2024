import { useEffect,useState } from "react";
import Recipe from "../Recipe/Recipe";
export function Recipes(props) {
    const [recipes, setRecipes] = useState(props.recipes);
    
    return (
        <section>
            <h1>Recipes</h1>
            {
                recipes?recipes.map((recipe) => {
                    return (
                        <Recipe key={recipe.id} name={recipe.name} image={recipe.image} ingredients={recipe.ingredients} instructions={recipe.instructions} />
                    );
                })
                : <p>Select a Tag</p>
            }
        </section>
    );
}