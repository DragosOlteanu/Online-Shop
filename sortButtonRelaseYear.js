root.innerHTML += `
    <button id="sort-by-release">Sorteaza dupa release</button>
`;

function sortPhonesByRelease(sortTypeR) {
    switch(sortTypeR) {
        case "SORT_BY_RELEASE":
            const localStorageProducts = getProducts();
            const sortedArrayR = localStorageProducts.sort((elem3, elem4) => {
                if (elem3.releaseYear < elem4.releaseYear) {
                    return -1;
                } else if (elem3.releaseYear > elem4.releaseYear) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArrayR);
            renderProductList(sortedArrayR);
            break;
    }
}

function addSortingFunctionalityR() {
    const sortByRelease = document.querySelector('#sort-by-release');
    sortByRelease.addEventListener('click', function() {
        sortPhonesByRelease('SORT_BY_RELEASE');
    })
}

window.addEventListener('load', addSortingFunctionalityR);