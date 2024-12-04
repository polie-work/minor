const shop = [
    {image: "img/merch1.png",
      description: "Keyring",
      price: 14.76},
    {image: "img/merch2.png",
      description: "Binder",
      price: 31.98},
    {image: "img/merch3.png",
      description: "Can Badge",
      price: 4.10},
    {image: "img/merch4.png",
      description: "Eco Bag",
      price: 28.70},
    {image: "img/merch5.png",
      description: "Film Keyring",
      price: 15.58},
    {image: "img/merch6.png",
      description: "Hoodie",
      price: 61.50},
    {image: "img/merch7.png",
        description: "Hair Scrunchie",
        price: 15.58},
      {image: "img/merch8.png",
        description: "T-Shirt",
        price: 36.90},
      {image: "img/merch9.png",
        description: "Keyring",
        price: 20.50}];
  
  function createProductBlock(merch) {
    const block = document.createElement("div");
    block.classList.add("product-block");
  
    const image = document.createElement("img");
    image.src = merch.image;
    block.appendChild(image);
  
    const description = document.createElement("h3");
    description.textContent = merch.description;
    block.appendChild(description);
  
    const price = document.createElement("p");
    price.textContent = `Стоимость: ${merch.price}$`;
    block.appendChild(price);
    return block;}
    const productContainer = document.getElementById("product-container");

shop.forEach(merch => {const productBlock = createProductBlock(merch);
  productContainer.appendChild(productBlock);});