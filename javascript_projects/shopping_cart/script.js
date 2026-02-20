document.addEventListener("DOMContentLoaded", () => {
  //dom elements
  const productList = document.getElementById("product-list");
  const addProduct = document.getElementById("add-product");
  const removeAll = document.getElementById("remove-all");
  const cartList = document.getElementById("cart-list");
  const productName = document.getElementById("product-name");
  const productPrice = document.getElementById("product-price");
  const totalPrice = document.getElementById("total-price");

  // product and cart array
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.forEach((element) => renderProduct(element));

  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.forEach((element) => renderCart(element));

  //price
  let price = JSON.parse(localStorage.getItem("price")) || 0;
  totalPrice.innerText = price;

  //adding product function
  addProduct.addEventListener("click", () => {
    let name = productName.value;
    let price = Number(productPrice.value);
    if (name && price) {
      let productObj = {
        // product list object
        id: Date.now(),
        name: name,
        price: price,
      };
      products.push(productObj);
      updateLoalStorageProduct();
      renderProduct(productObj);
      productName.value = "";
    }
    if (!price) {
      alert("please enter a number for price");
    }
    productPrice.value = "";
  });

  // remove all cart contents function
  removeAll.addEventListener("click", () => {
    while (cartList.firstChild) {
      cartList.removeChild(cartList.firstChild);
    }
    price = 0;
    totalPrice.innerText = price;
    cartItems = [];
    updateLoalStoragePrice();
    updateLocalStorageCart();
  });

  //add cart function
  productList.addEventListener("click", (e) => {
    e.stopPropagation();
    if ((e.target.tagName = "BUTTON")) {
      let newItem = e.target.parentNode;
      let id = newItem.getAttribute("id");
      products.forEach((item) => {
        if (`${item.id}` === id) {
          let cartObj = {
            //cart list object
            id: Date.now(),
            name: item.name,
            price: item.price,
          };
          cartItems.push(cartObj);
          renderCart(cartObj);
          addPrice(item.price);
          updateLocalStorageCart();
        }
      });
    }
  });

  //remove cart function
  cartList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let eEle = e.target.parentNode;
      cartList.removeChild(eEle);
      subPrice(Number(e.target.value));
      let id = eEle.getAttribute("id");
      cartItems = cartItems.filter((item) => `${item.id}` !== id);
      updateLocalStorageCart();
    }
  });

  //render product list
  function renderProduct(item) {
    if (item) {
      let currProd = document.createElement("div");
      currProd.setAttribute("id", item.id);
      currProd.innerHTML = `
      <p>${item.name}</p>
      <button >Add to cart</button>
      
      `;
      currProd.classList.add("item");
      productList.appendChild(currProd);
    }
  }

  //render cart list
  function renderCart(item) {
    if (item) {
      let div = document.createElement("div");
      div.setAttribute("id", item.id);
      div.innerHTML = `
        <div class = "cart-item-text" >
        <p>name:  ${item.name}</p>
        <p>price: ${item.price}</p>
        </div>
        <button value = ${item.price} >Remove Item</button>
      `;
      div.classList.add("item");
      div.classList.add("cart-item");
      cartList.appendChild(div);
    }
  }

  //pricing function
  function addPrice(value) {
    price = price + value;
    totalPrice.innerText = price;
  }
  function subPrice(value) {
    price = price - value;
    totalPrice.innerText = price;
  }

  // Local Storage
  function updateLoalStorageProduct() {
    localStorage.setItem("products", JSON.stringify(products));
  }
  function updateLocalStorageCart() {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  function updateLoalStoragePrice() {
    localStorage.setItem("price", JSON.stringify(price));
  }
});
