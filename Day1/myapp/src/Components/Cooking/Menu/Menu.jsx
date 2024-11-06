import { useEffect,useState } from "react";
import Tag from "../Tag/Tag";
import Recipe from "../Recipe/Recipe";
import './Menu.css';

export default function Menu(){
    const [tags,setTags]=useState([]);
    const [recipes,setRecipes]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes/tags")
        .then(response=>response.json(),err=>alert("could not load data at this moment"))
        .then(data=>setTags(data));
    },[]);
    const getRecipe=(tag)=>{
        fetch(`https://dummyjson.com/recipes/tag/${tag}`)
        .then(response=>response.json())
        .then(data=>setRecipes(data["recipes"]));
    }
    return(
        <section className="menu">
            <h1>Menu</h1>
            <section>
            {
                tags.map((tag,index)=>{
                    return(
                        <Tag key={index} name={tag} onGetRecipe={getRecipe}/>
                    );
                })
            }
            </section>
            <hr/>
            <secion>
            <h2>Recipes</h2>
            {
                recipes?recipes.map((recipe) => {
                    return (
                        <Recipe key={recipe.id} name={recipe.name} image={recipe.image} ingredients={recipe.ingredients} instructions={recipe.instructions} />
                    );
                })
                : <p>Select a Tag</p>
            }
            </secion>
        </section>
    );
}