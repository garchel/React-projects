import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromGemini } from "../ai";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");

    async function getRecipe() {
        console.log("Ingredients sent to Gemini:", ingredients); // Log dos ingredientes
        const recipeMarkdown = await getRecipeFromGemini(ingredients);
        console.log("Recipe received from Gemini:", recipeMarkdown); // Log da receita recebida
        setRecipe(recipeMarkdown);
    }

    function addIngredient(event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient").trim().toLowerCase(); // Normaliza para evitar variações de maiúsculas e minúsculas
    
        if (newIngredient && !ingredients.includes(newIngredient)) { // Verifica duplicação
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        } else {
            alert("Este ingrediente já foi adicionado!"); // Alerta para feedback do usuário
        }
    
        event.target.reset(); // Limpa o campo de entrada após adicionar o ingrediente
    }
    

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form"> {}
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            {ingredients.length > 0 && (
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            )}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}