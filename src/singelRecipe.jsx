

export const singelRecipe = () => {
    

    return (
        <div>
        <h1>Recipe App</h1>
        <ul>
            {recipes.map((recipe, index) => (
            <li key={index}>{recipe.recipeName}</li>
            ))}
        </ul>
        </div>
    );


}