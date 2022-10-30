class Product {
    constructor(name, price,image,releaseYear,dateWhenAdded  ) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.releaseYear = releaseYear;
        this.dateWhenAdded = dateWhenAdded;
    }
    renderProduct() {
        const productList = document.querySelector('#product-list');
        productList.innerHTML += `
            <li class="product">
                <p>Nume: ${this.name}</p>
                <p>Pret: ${this.price}</p>
                <p>Image: ${this.image}</p>
                <p>Anul aparitiei: ${this.releaseYear}</p>
                <p>Data adaugarii: ${this.dateWhenAdded}</p>
                <button id="delete-el">Delete</button>
                <br>
            </li>
        `;
    }
}