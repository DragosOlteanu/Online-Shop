root.innerHTML += `
    <button id="filter-button">Filtreaza</button>
`;

function filterEl(){
    const localStorageProducts = getProducts();
    // console.log(localStorageProducts);
    const filteredArray = localStorageProducts.filter(product=>product.price>4200) ;
    setProducts(filteredArray);
    renderProductList(filteredArray);
    // console.log(filteredArray)
}

    function addSortingFunctionality() {
        const filterByPrice = document.querySelector('#filter-button');
        filterByPrice.addEventListener('click', function() {
            filterEl();
        })
    }
    


    window.addEventListener('load', addSortingFunctionality);