const products = 


const productlist= document.getElementById('productlist')
//javascript object notation
async function displayProducts ()
{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    const data = await res.json();
 data.forEach(function(prod) {
     const product = document.createElement('li')
     product.classList.add('product')
     const prodImage = document.createElement('img')
     prodImage.src = prod.image;
     prodImage.alt = prod.title;
     const prodTitle = document.createElement('h3')
     prodTitle.textContent = prod.title;
     const prodPrice = document.createElement('p')
     prodPrice.textContent = prod.price;
     product.appendChild(prodImage)
     product.appendChild(prodTitle)
     product.appendChild(prodPrice)
     productlist.appendChild(product)


     
     
 });
}
displayProducts()