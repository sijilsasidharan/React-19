import React, { FormEvent, useState } from 'react'

const AddIngrediants = () => {

    const [ingredients, setIngredients] = useState<string[]>([]);

    const ingrediantsList = ingredients.map(item => <li>{item}</li>) 

    function handleAddingIngredients(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(event);
        const ingrediant = new FormData(event.currentTarget).get('ingrediant') as string;
        setIngredients(ingrediants => [...ingrediants, ingrediant])
    }

  return (
    <>
        <form onSubmit={handleAddingIngredients}>
            <div>Add Ingrediants</div>
            <input type='text' name="ingrediant" />
            <button>Add Ingredients</button> 
        </form>
        <ul>
            {ingrediantsList}
        </ul>
    </>
    
  )
}

export default AddIngrediants
