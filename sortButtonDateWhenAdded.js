root.innerHTML += `
    <button id="sort-by-Date-when-added">Sorteaza dupa data adaugarii</button>
`;

function sortPhonesByDwa(sortTypeDwa) {
    switch(sortTypeDwa) {
        case "SORT_BY_DWA":
            const localStorageProducts = getProducts();
            const sortedArrayDwa = localStorageProducts.sort((elem5, elem6) => {
                if (elem5.dateWhenAdded < elem6.dateWhenAdded) {
                    return -1;
                } else if (elem5.dateWhenAdded > elem6.dateWhenAdded) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArrayDwa);
            renderProductList(sortedArrayDwa);
            break;
    }
}

function addSortingFunctionalityByDwa() {
    const sortByDwa = document.querySelector('#sort-by-Date-when-added');
    sortByDwa.addEventListener('click', function() {
        sortPhonesByDwa('SORT_BY_DWA');
    })
}

window.addEventListener('load', addSortingFunctionalityByDwa);