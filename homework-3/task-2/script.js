 async function getProducts() {
     return fetch("https://dummyjson.com/products?limit=100")
    .then(response =>  response.json())
    .then(data => {
        return data.products;
    })
    .catch(error => console.log("error in fetching", error))
}

//All laptops in stock ordered by price descending
getProducts().then(product => {
    const laptopsInStock = product.filter(prod => prod.category === "laptops" && prod.stock > 0).toSorted((a, b) => b.price - a.price)
    console.log(laptopsInStock);
})

//The first grocery item
getProducts().then(product => {
    const firstGrocery = product.find(prod => prod.category === "groceries");
    console.log(firstGrocery);
})

//Index of the first "Samsung" smartphone
getProducts().then(product => {
    const samsungIndex = product.findIndex(p => 
        p.category === "smartphones" && p.title.includes("Samsung")
    );
    console.log(samsungIndex);
    //there is no smartphones
})

//Check if there is any item from the brand "Sony"
getProducts().then(product => {
    const sony = product.find(pr => pr.brand === "Sony")
    console.log(sony);
})

//The name of the highest rated skincare product
getProducts().then(products => {
    
     const skincareProducts = products.filter(p => p.category === "beauty");

    if (skincareProducts.length === 0) {
        console.log("No skincare products found");
        return;
    }

    // Helper function to calculate average review rating
    const averageRating = product =>
        product.reviews.length > 0
            ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
            : 0;

    // Find product with highest average review rating
    const highestRated = skincareProducts.reduce((max, product) =>
        averageRating(product) > averageRating(max) ? product : max
    );

    console.log(
        `Highest rated skincare product: ${highestRated.title} (Average rating: ${averageRating(highestRated).toFixed(2)})`
    );
})

//The average discount percentage of products with a rating above 4.5
getProducts().then(product => {
    const productsWithRatingAbove = product.filter(p => p.rating > 4.5)
    // console.log(productsWithRatingAbove);
    
    const avrgDiscountPercentage = productsWithRatingAbove.reduce((acc, init) => acc + init.discountPercentage, 0) / productsWithRatingAbove.length
    console.log(avrgDiscountPercentage);
})

//Find the product with the highest price
getProducts().then(product => {
    productHighestPrice = product.reduce((max, curr) => curr.price > max.price ? curr : max
    , product[0])
    console.log(productHighestPrice);
})

//Average price of all IPhone smartphones
getProducts().then(products => {
    //   const iphones = products.filter(p =>
    //     p.brand === "Apple"
    // );
    // console.log(iphones);
    
    //  const categories = products.map(p => p.brand);

    // console.log(categories);
    //there is no smartphones ??
})

//The product with the lowest price
getProducts().then(products => {
    const lowetsPrice = products.reduce((max, curr) => curr.price < max.price ? curr : max, products[0])
    console.log(lowetsPrice);
})