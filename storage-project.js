window.addEventListener("DOMContentLoaded", (event) => {

  const storeItem = () => {
    const button = document.getElementById('add-to-cart');
    button.addEventListener('click', (event) => {
      const itemValue = document.getElementById('items').value
      const qtyValue = document.getElementById('quantity').value

      localStorage.setItem(itemValue, qtyValue)
    })
  };

  const showCart = () => {
    const shoppingCart = document.getElementById('shopping-cart');
    const ul = document.createElement('ul');
    for(let key in localStorage){
      const item = key;
      const quantity = localStorage.getItem(key);
      const li = document.createElement('li');
      // if(quantity){
        li.innerText = "item: " + item + ", quantity: " + quantity;
        ul.appendChild(li); 
      // }
    }
    shoppingCart.appendChild(ul);

  };

  storeItem();
  showCart();


      // const removeItem = () => {

        // };

});
