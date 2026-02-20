async function getProducts() {
     return fetch("https://dummyjson.com/carts")
    .then(response =>  response.json())
    .then(data => {
        return data.carts;
    })
    .catch(error => console.log("error in fetching", error))
}


// All product titles in all carts
getProducts().then(products => {
     products.map(p => p.products.forEach(p => console.log(p.title)))    
})

// The total quantity of all products purchased
getProducts().then(products => {
    const total = products.reduce((sum, acc) => sum + acc.totalQuantity, 0)
    console.log(total);
})

// Check if there is any cart with a total value above $100,000
getProducts().then(products => {
    const cardValueAbove = products.filter(p => p.total > 100_000)
    console.log(cardValueAbove);
    
})

// The total revenue from all carts (sum of all discountedTotal values)
getProducts().then(products => {
    const discountTotal = products.reduce((sum, acc) => sum + acc.discountedTotal, 0)
    console.log(discountTotal.toFixed(2));
})

// The cart with the highest total value
getProducts().then(products => {
    const highestTotal = products.reduce((sum, acc) => sum.total > acc.total ? sum : acc, 0)
    console.log(highestTotal);
})

// Find all products with a discount greater than 15%
getProducts().then(products => {
    const discount = products.flatMap(p => p.products.filter(p => p.discountPercentage > 15))
    console.log(discount);
})

// The user ID of the cart with the highest total quantity
getProducts().then(products => {
    const idOfCard = products.reduce((sum, acc) => sum.totalQuantity > acc.totalQuantity ? sum : acc, 0)
    console.log("id of card:" + " " + idOfCard.id);
    console.log("total quantiti:" + " " + idOfCard.totalQuantity);
})

// The most expensive product in all carts (before discount)
getProducts().then(products => {
    const mostExpensive = products.flatMap(p => p.products).reduce((sum, acc) => sum.price > acc.price ? sum : acc)
    console.log(mostExpensive);
})

// The average discounted total per cart
getProducts().then(product => {
    const averageDiscount = product.reduce((sum, acc) => sum + acc.discountedTotal, 0) / product.length;
    console.log(averageDiscount);
})

//  The top 3 most expensive products after discount
getProducts().then(products => {
    const mostExpensiveAfterDiscount = products.flatMap(p => p.products).sort((a, b) => b.discountedTotal - a.discountedTotal).slice(0, 3)
    console.log(mostExpensiveAfterDiscount);
})