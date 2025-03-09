'use client'
import { useEffect, useState } from "react";

// interface Recipe {
//     cuisine: string,
//     difficulty: string,
//     image: string,
//     ingredients: [],
//     instructions: [],
//     mealType: [],
//     name:string,
//   }
  
//   interface RecipeType {
//     recipes: Recipe[];
//   }
  
  const RecipeCard = () => {
      const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchRecipes = async() => {
  
            const response = await fetch('https://dummyjson.com/recipes')
        
            if (response.ok) {
              const data = await response.json()
              let reducedrecipes = data.recipes.slice(1, 32)
              console.log(reducedrecipes);
              setRecipes(reducedrecipes)
            }
          }
        fetchRecipes()
    })
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 p-4 sm:grid-cols-1 space-x-2 space-y-3">
        {recipes.map((recipe:any, index) => (
          <div className="aspect-auto p-10 hover:bg-blue-200 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none" key={index}>
              <img className="rounded-[10px] " src={recipe.image} alt={recipe.name} />
              <a href="#" className="text-lg font-medium text-gray-700 dark:text-white">{recipe.name}</a>
              {/* <p className="font-bold text-lg">{recipe.name}</p> */}
              <p className="tracking-near text-sm font-semibold">Cuisine: {recipe.cuisine}</p>
              <p className="font-semibold">Difficulty: {recipe.difficulty}</p>
              <p className="font-semibold">Ingredients: </p>
              {recipe.ingredients.map((value:any, index:number) => (
                <p className="font-semibold inline-block" key={index}>{value + ","}</p>
              ))
              }
              <p className="font-semibold">MealType: </p>
              {recipe.mealType.map((value:any, index:number)=> (
                <p className="font-semibold inline-block" key={index}>{value + ", "}</p>
              ))}

          </div>
        ))}
      </div>
    );
  }
  
  export default RecipeCard;
  