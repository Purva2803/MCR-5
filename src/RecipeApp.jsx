import { recipes } from './data/recipe';
import { AddRecipeModal } from './addRecipe';
import { useState,useEffect } from 'react';



const SearchForm = ({
  searchCategory,
  setSearchCategory,
  searchQuery,
  setSearchQuery,
  handleSearch,
  clearSearch
}) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <label>
        <input
          type="radio"
          value="name"
          checked={searchCategory === 'name'}
          onChange={() => setSearchCategory('name')}
        />
        Name
      </label>

      <label>
        <input
          type="radio"
          value="ingredients"
          checked={searchCategory === 'ingredients'}
          onChange={() => setSearchCategory('ingredients')}
        />
        Ingredients
      </label>

      <label>
        <input
          type="radio"
          value="cuisine"
          checked={searchCategory === 'cuisine'}
          onChange={() => setSearchCategory('cuisine')}
        />
        Cuisine
      </label>

      <button onClick={handleSearch}>Search</button>
      <button onClick={clearSearch}>Clear Search</button>
    </div>
  );
};

const RecipeApp = () => {
  const [searchCategory, setSearchCategory] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [recipe, setRecipe] = useState(() => {
    const storedRecipes = localStorage.getItem('recipes');
    return storedRecipes ? JSON.parse(storedRecipes) : recipes;
  });

  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase().trim();
    let filtered = [];

    if (searchCategory === 'name') {
      filtered = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(lowerCaseQuery)
      );
    } else if (searchCategory === 'ingredients') {
      filtered = recipes.filter((recipe) =>
        recipe.ingredients.toLowerCase().includes(lowerCaseQuery)
      );
    } else if (searchCategory === 'cuisine') {
      filtered = recipes.filter((recipe) =>
        recipe.Cuisine.toLowerCase().includes(lowerCaseQuery)
      );
    }

    setFilteredRecipes(filtered);
  };

  const clearSearch = () => {
    setSearchCategory('name');
    setSearchQuery('');
    setFilteredRecipes(recipes);
  };

  useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      setFilteredRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(filteredRecipes));
  }, [filteredRecipes]);

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...recipe, newRecipe];
    setRecipe(updatedRecipes);
    setFilteredRecipes(updatedRecipes);
  };
  

  return (
    <div>
      
      <SearchForm
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
      />

      <ul>
      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <h2>{recipe.name}</h2>
              <h3>Ingredients: {recipe.ingredients}</h3>
              <h3>Instructions: {recipe.instructions}</h3>
              <h3>Cuisine Type: {recipe.Cuisine}</h3>
              <img src={recipe.image} alt="recipe" height="200" width="200" />
            </div>
          ))
        ) : (
          <li>No recipes found.</li>
        )}
      </div>

      </ul>

      <button>
        <AddRecipeModal onAddRecipe={handleAddRecipe} />
      </button>
    </div>
  );
};


export default RecipeApp;




