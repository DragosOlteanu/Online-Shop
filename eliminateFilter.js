root.innerHTML += `
    <button id="eliminate-filter-button">Elimina filtrarea</button>
`;

function renderProductList(products) {
    const productList = document.querySelector('#product-list');
    productList.innerHTML = '';
    products.forEach(function (product) {
        const phone = new Product(product.name, product.price, product.image, product.releaseYear,product.dateWhenAdded);
        phone.renderProduct();
    });
}

function eliminateFilterF() {
    const elimnateFilter = document.querySelector('#eliminate-filter-button');
    elimnateFilter.addEventListener('click', function() {
        renderProductList(products);
    })
}
