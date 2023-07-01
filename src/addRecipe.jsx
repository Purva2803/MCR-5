import React, { useState, useEffect } from 'react';
import './App.css';
import { recipes } from './data/recipe';

export const AddRecipeModal = ({ onAddRecipe }) => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [cookingInstructions, setCookingInstructions] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [imageLink, setImageLink] = useState('');

  const handleAddRecipe = () => {
    const newRecipe = {
      name: recipeName,
      ingredients: ingredients,
      instructions: cookingInstructions,
      Cuisine: cuisineType,
      image: imageLink,

    };
    onAddRecipe(newRecipe);
    setRecipeName('');
    setIngredients('');
    setCookingInstructions('');
    setCuisineType('');
    setImageLink('');
  };

  return (
    <div className="modal">
      <h2>Add Recipe</h2>
      <label>
        Recipe Name:
        <input
          type="text"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
      </label>
      <label>
        Ingredients:
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </label>
      <label>
        Cooking Instructions:
        <textarea
          value={cookingInstructions}
          onChange={(e) => setCookingInstructions(e.target.value)}
        />
      </label>
      <label>
        Cuisine Type:
        <input
          type="text"
          value={cuisineType}
          onChange={(e) => setCuisineType(e.target.value)}
        />
      </label>
      <label>
        Image Link:
        <input
          type="text"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
        />
      </label>
      <button onClick={handleAddRecipe}>Add Recipe</button>
    </div>
  );
};




