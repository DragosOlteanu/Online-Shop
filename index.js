const root = document.querySelector('#root');
const products = [
    {
        name: 'Iphone XS',
        price: 4500,
        image: 'https://unsplash.com/photos/lB9SHJDCO8o',
        releaseYear: '2018',
        dateWhenAdded: '2022-10-26'
    },
    {
        name: 'Huawei P30',
        price: 4000,
        image: 'https://unsplash.com/photos/lB9SHJDCO8o',
        releaseYear: '2019',
        dateWhenAdded: '2021-02-10'



    },
    {
        name: 'Samsung S10',
        price: 4250,
        image: 'https://unsplash.com/photos/lB9SHJDCO8o',
        releaseYear: '2017',
        dateWhenAdded: '2021-11-05'


    }
];

function getProducts() {
    const localStorageProducts = localStorage.getItem("products");
    console.log(localStorageProducts);
    const parsedProducts = JSON.parse(localStorageProducts);
    return parsedProducts;
}

function setProducts(products) {
    const stringifiedProducts = JSON.stringify(products);
    localStorage.setItem("products", stringifiedProducts);
}

if (getProducts() === null){
    setProducts(products);
}

function startRendering() {
    const localStorageProducts = getProducts();
    renderProductList(localStorageProducts);
}
window.addEventListener('load', startRendering);