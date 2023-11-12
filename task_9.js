const productTable = document.querySelector('#productsList tbody');
const productCart = document.querySelector('#productsCart tbody');

const products = ['trousers', 'shirt', 'shorts', 'shoes',];
const productsInCart = {};

function addProductToShelf(product) {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.textContent = product;
    const cell2 = document.createElement('td');
    const button = document.createElement('button')
    button.textContent = 'buy';
    button.id = product;
    cell2.append(button);
    row.append(cell1, cell2)
    productTable.append(row);
}

function addProductToCart(products) {
    const productsKeys = Object.keys(products);
    const tbody = document.createElement('tbody');
    for(const key of productsKeys) {

        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.textContent = key;
        const cell2 = document.createElement('td');
        cell2.textContent = products[key];
        row.append(cell1, cell2)
        tbody.append(row);
        }
    productCart.innerHTML = '';
    productCart.appendChild(tbody);
}

products.forEach((e) => addProductToShelf(e));
const buttonBuy = document.querySelectorAll('#productsList button');
buttonBuy.forEach((product) => product.addEventListener('click', (e) => {
    const item = e.target.id;
    productsInCart[`${item}`] = isNaN(productsInCart[`${item}`]) ? 1 : productsInCart[`${item}`] + 1;
    addProductToCart(productsInCart);
}));
