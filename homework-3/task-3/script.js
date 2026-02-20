async function getProducts() {
     return fetch("https://dummyjson.com/recipes")
    .then(response =>  response.json())
    .then(data => {
        return data.recipes;
    })
    .catch(error => console.log("error in fetching", error))
}

getProducts().then(products => {
    console.log(products.map(p => p.tags));       // see all tags arrays
    console.log(products.map(p => p.mealType));   // see all mealType arrays
});

// All Desserts
getProducts().then(products => {
    const desserts = products.filter(p => p.tags && p.tags.some(tag => tag.toLowerCase() === "dessert"))
    console.log(desserts);  
})

// Get the names of recipes with more than 30 reviews
getProducts().then(products => {
    const recepiesRewiews = products.filter(p => p.reviewCount > 30)
    console.log(recepiesRewiews);
})

// All recipes that use Cinnamon as an ingredient
getProducts().then(products => {
    const cinamonProd = products.filter(p => p.ingredients.includes("Cinnamon"))
    console.log(cinamonProd);
})

// Recipes that are served as both Lunch and Dinner
getProducts().then(products => {
    const lunchAndDinner = products.filter(p => p.mealType.includes("Lunch") && p.mealType.includes("Dinner"))
    console.log(lunchAndDinner);
})

// The ingredients needed for "Mango Salsa Chicken" dish
getProducts().then(products => {
    const mangoSalsaChicken = products.find(p => p.name === "Mango Salsa Chicken")
    if(mangoSalsaChicken){
        mangoSalsaChicken.ingredients.forEach(ing => console.log(ing)
        )
    }  
})

// Calculate the average number of calories for all American cusine recipes
getProducts().then(products => {
    const americanCusine = products.filter(p => p.cuisine === "American")
    const average = americanCusine.reduce((sum, acc) => sum + acc.caloriesPerServing, 0) /americanCusine.length
    console.log(average);
})

// The average cooking time of all pasta recipes
getProducts().then(products => {
    const pasta = products.filter(p => p.tags.includes("Pasta"))
    const average = pasta.reduce((sum, acc) => sum + (acc.cookTimeMinutes + acc.prepTimeMinutes), 0) / pasta.length
    // console.log(pasta);
    console.log(average); 
    // console.log("Number of pasta recipes:", pasta.length);
})

// Find the recipe with the lowest number of reviews
getProducts().then(products => {
    const recepie = products.reduce((sum, acc) => sum.reviewCount < acc.reviewCount ? sum : acc)
    console.log(recepie);  
})